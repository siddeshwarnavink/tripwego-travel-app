import { BackgroundImage, Container, Text, Button, Card, Grid, Chip, Tabs, SimpleGrid, Image, Timeline } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconMap } from '@tabler/icons';
import YouTube from 'react-youtube';

import absoluteUrl from '../../../helpers/absoluteUrl';
import currencyFormatter from '../../../helpers/currencyFormatter';
import useResponsive from '../../../hooks/useResponsive';
import useTranslation from '../../../hooks/useTranslation';
import { IPlace } from '../../../models/IPlaces';
import Layout from '../../../components/layout';
import LocationItem from '../../../components/location/locationItem';
import LocationFeature from '../../../components/location/locationFeature';
import Link from 'next/link';

interface PlaceDetailProps {
    place: IPlace;
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

function PlaceDetail(props: PlaceDetailProps) {
    const { screenIsAtLeast } = useResponsive();
    const { t } = useTranslation();

    return (
        <Layout>
            <BackgroundImage src={props.place.cover_picture}>
                <Container fluid pt={300} pb='md' style={{ background: 'linear-gradient(to bottom, transparent 50%, #000000 100%)', color: 'white' }}>
                    <Text size={30} weight='bold'>{props.place.title}</Text>
                    <Text>{props.place.short_description}</Text>
                    <Container fluid pt='sm' px={0}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ justifyContent: 'center', alignItems: 'center', padding: '5px', marginRight: '14px' }}>
                                <Text size='md' weight='bold' color='#9FBD48'>{currencyFormatter(props.place.price)}</Text>
                            </div>
                            <div>
                                <Link passHref href={`/place/${props.place.id}/bookSlot`}>
                                    <Button component='a'>{t('placeDetail.bookNowBtn')}</Button>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </Container>
            </BackgroundImage>
            <Container px='md'>
                <Container fluid pt='xl' px={0}>
                    <YouTube
                        videoId={props.place.youtubeId}
                        opts={{
                            width: '100%',
                            heigth: '100%',
                            playerVars: {
                                autoplay: 1,
                                controls: 0,
                                disablekb: 1,
                                mute: 1
                            },
                        }}
                    />
                    <Card shadow='md' mt='lg'>
                        <Text size='xl' weight='bold'>{props.place.title}</Text>
                        <Container fluid px={0}>
                            <Chip checked={false}>{props.place.categories.caption}</Chip>
                        </Container>
                        <Container fluid px={0} py='sm'>
                            <Text size='md'>{props.place.description}</Text>
                        </Container>

                        <Button
                            component='a'
                            href={`https://maps.google.com/?q=${props.place.title},${props.place.address}`}
                            target='_blank'
                            leftIcon={<IconMap size={14} />}
                        >
                            {t('placeDetail.viewOnMapBtn')}
                        </Button>
                    </Card>
                </Container>
                <Container fluid pt={35} px={0}>
                    <Text size='xl' weight='bold'>{t('placeDetail.locationCaption')}</Text>
                    <Text color='gray' size='md'>{t('placeDetail.locaitonSubCaption')}</Text>
                </Container>
                <Container fluid pt='md' px={0}>
                    <SimpleGrid cols={4} style={screenIsAtLeast('sm') ? null : { display: 'block' }} >
                        {JSON.parse(props.place.locations).map((location, i) => {
                            return (
                                <LocationItem
                                    key={i + location.caption}
                                    thumbnail={location.thumbnail}
                                    caption={location.caption}
                                    marginBottom={!screenIsAtLeast('sm')}
                                />
                            );
                        })}
                    </SimpleGrid>
                </Container>

                <Container fluid pt={35} px={0}>
                    <Text size='xl' weight='bold'>{t('placeDetail.photosCaption')}</Text>
                </Container>
                <Container fluid px={0} py='sm'>
                    <Carousel sx={{ maxWidth: 950 }} mx='auto' loop withIndicators>
                        {JSON.parse(props.place.pictures).map((pictureUrl, i) => {
                            return (
                                <Carousel.Slide key={i + pictureUrl}>
                                    <Image src={pictureUrl} />
                                </Carousel.Slide>
                            );
                        })}
                    </Carousel>
                </Container>

                <Container fluid pt={35} px={0}>
                    <Text size='xl' weight='bold'>{t('placeDetail.facilitiesCaption')}</Text>
                    <Text color='gray' size='md'>{t('placeDetail.facilitiesSubCaption')}</Text>
                </Container>

                <Container fluid pt='md' px={0}>
                    <SimpleGrid style={screenIsAtLeast('sm') ? null : { display: 'block' }} cols={5}>
                        {props.place.facilities.split(',').map((facilityName, index) => {
                            return (
                                <LocationFeature
                                    key={index + facilityName}
                                    caption={facilityName}
                                    marginBottom={!screenIsAtLeast('sm')}
                                />
                            );
                        })}
                    </SimpleGrid>
                </Container>

                <Container fluid pt={35} px={0}>
                    <Text size='xl' weight='bold'>{t('placeDetail.roadmapCaption')}</Text>
                    <Text color='gray' size='md'>{t('placeDetail.roadmapSubCaption')}</Text>
                </Container>
                <Container fluid pt='md' px={20} >
                    <Timeline active={JSON.parse(props.place.roadmap).length} bulletSize={24} lineWidth={2}>
                        {JSON.parse(props.place.roadmap).map((roadmap, i) => {
                            return (
                                <Timeline.Item key={i + roadmap.location} title={roadmap.location}>
                                    <Text color="dimmed" size="sm">{roadmap.time}</Text>
                                </Timeline.Item>
                            );
                        })}
                    </Timeline>
                </Container>
            </Container>
            <Card
                mt={75}
                sx={(theme) => ({
                    backgroundImage: theme.fn.gradient({ from: '#9FBD48', to: '#BCE548', deg: 45 }),
                    textAlign: 'center'
                })}>
                <Container p={50}>
                    <Text size='xl' weight='bold'>
                        {t('placeDetail.finalCardCaption')}
                    </Text>
                    <Container pt='md'>
                        <Link passHref href={`/place/${props.place.id}/bookSlot`}>
                            <Button component='a' variant='outline' color='dark'>
                                {t('placeDetail.bookNowBtn')}
                            </Button>
                        </Link>
                    </Container>
                </Container>
            </Card>
        </Layout>
    );
}

export default PlaceDetail;