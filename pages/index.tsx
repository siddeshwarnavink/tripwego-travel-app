import { FormEvent, useState } from 'react';

import Layout from '../components/layout';
import PlaceFilter from '../components/places/placeFilter';

function Index() {
  const [filterBudget, setFilterBudget] = useState([30, 60]);
  const [tripDateRange, setTripDateRange] = useState([
    new Date(), // today
    new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000)) // 5 days from toady
  ]);
  const [filterCategory, setFilterCategory] = useState(1);

  async function onPlaceFilterFormSubmitHandler(event: FormEvent) {
    event.preventDefault();
    // TODO: send filter to backend
  }

  return (
    <Layout>
      <form onSubmit={onPlaceFilterFormSubmitHandler}>
        <PlaceFilter
          budget={filterBudget}
          tripDateRange={tripDateRange}
          categoryPicked={filterCategory}
          categories={[]} // TODO: get form database
          onBudgetChange={setFilterBudget}
          onTripDateRangeChange={setTripDateRange}
          onCategoryChange={setFilterCategory}
        />
      </form>
    </Layout>
  );
}

export default Index;