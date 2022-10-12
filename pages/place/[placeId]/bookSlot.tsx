import {
    Container,
    Text
} from '@mantine/core';

import { IPlace } from '../../../models/IPlaces';
import absoluteUrl from '../../../helpers/absoluteUrl';
import Layout from '../../../components/layout';
import PlaceListItem from '../../../components/places/placeListItem';

interface BookSlotProps {
    place: IPlace
}

export async function getServerSideProps({ req, query }) {
    const { origin } = absoluteUrl(req, undefined);
    const baseApiUrl = `${origin}/api`;

    const placeReq = await fetch(`${baseApiUrl}/places/${query.placeId}`);
    const { place } = await placeReq.json();

    return {
        props: {
            place
        }
    };
}

function BookSlot(props: BookSlotProps) {
    return (
        <Layout>
            <Container>
                <Text size={20} weight='bold'>Book a slot</Text>
                <PlaceListItem
                    title={props.place.title}
                    shortDescription={props.place.short_description}
                    thumbnail={props.place.thumbnail}
                    placeId={`${props.place.id}`}
                    price={props.place.price}
                    categoryCaption={props.place.categories.caption}
                />
            </Container>
        </Layout>
    );
}

export default BookSlot;