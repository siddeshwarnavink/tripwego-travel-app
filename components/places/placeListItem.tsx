import Link from 'next/link';
import { Paper, Image, Text, Chip, Grid, Container } from '@mantine/core';

import currencyFormatter from '../../helpers/currencyFormatter';

interface PlaceListItemProps {
    placeId: string;
    title: string;
    thumbnail: string;
    shortDescription: string;
    price: number;
    categoryCaption: string;
}

function PlaceListItem(props: PlaceListItemProps) {
    return (
        <Container fluid py='lg'>
            <Link href={`/place/${props.placeId}`}>
                <Paper shadow='sm' style={{ cursor: 'pointer' }}>
                    <Grid>
                        <Grid.Col span={2}>
                            <Image
                                src={props.thumbnail}
                                height={160}
                                alt={props.title}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Text size='xl' weight='bold'>{props.title}</Text>
                            <Text size='sm' weight='bold' color='#7e9636'>{currencyFormatter(props.price)}</Text>
                            <Text size='sm'>{props.shortDescription}</Text>

                            <Container fluid px={0} py='sm'>
                                <Chip checked={false}>{props.categoryCaption}</Chip>
                            </Container>
                        </Grid.Col>
                    </Grid>
                </Paper>
            </Link>
        </Container>
    );
}

export default PlaceListItem;