import { FormEvent, useState } from 'react';
import {
  Container,
  Text
} from '@mantine/core';
import Router from 'next/router';

import { IPlace } from '../models/IPlaces';
import { ICategory } from '../models/ICategory';
import absoluteUrl from '../helpers/absoluteUrl';
import Layout from '../components/layout';
import PlaceFilter from '../components/places/placeFilter';
import PlaceListItem from '../components/places/placeListItem';

interface IndexProps {
  places: IPlace[],
  categories: ICategory[]
};

export async function getServerSideProps({ req, query }) {
  const { origin } = absoluteUrl(req, undefined);
  const baseApiUrl = `${origin}/api`;

  const budget = query.budget || '[]';
  const category = query.category || -1;
  const placesReq = await fetch(`${baseApiUrl}/places?category=${category}&budget=${budget}`);
  const { places } = await placesReq.json();

  const categoriesReq = await fetch(`${baseApiUrl}/categories`);
  const { categories } = await categoriesReq.json();

  return {
    props: {
      places,
      categories
    }
  };
}

function Index(props: IndexProps) {
  const [filterBudget, setFilterBudget] = useState([30, 60]);
  const [tripDateRange, setTripDateRange] = useState([
    new Date(), // today
    new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000)) // 5 days from toady
  ]);
  const [filterCategory, setFilterCategory] = useState(1);

  async function onPlaceFilterFormSubmitHandler(event: FormEvent) {
    event.preventDefault();
    const filterData = {
      category: filterCategory,
      budget: JSON.stringify(filterBudget),
      tripDateRange: tripDateRange.map(dateObj => `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()}`)
    };

    await Router.push({
      pathname: '/',
      query: filterData,
    });
  }

  return (
    <Layout>
      <Container>
        <form onSubmit={onPlaceFilterFormSubmitHandler}>
          <PlaceFilter
            budget={filterBudget}
            tripDateRange={tripDateRange}
            categoryPicked={filterCategory}
            categories={props.categories} // TODO: get form database
            onBudgetChange={setFilterBudget}
            onTripDateRangeChange={setTripDateRange}
            onCategoryChange={setFilterCategory}
          />
        </form>
        <Container fluid mt='xl'>
          <Text size='xl' weight='bold'>Places to visit</Text>
          {props.places.map(place => {
            return (
              <PlaceListItem
                key={place.id}
                placeId={`${place.id}`}
                title={place.title}
                thumbnail={place.thumbnail}
                shortDescription={place.short_description}
                price={place.price}
                categoryCaption={place.categories.caption}
              />
            )
          })}
        </Container>
      </Container>
    </Layout>
  );
}

export default Index;