import { BackgroundImage, Container, Text, Button, Card, Grid, Chip, Tabs, SimpleGrid, Image, Timeline } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconInfoCircle, IconMapPin, IconMap } from '@tabler/icons';
import YouTube from 'react-youtube';

import absoluteUrl from '../../helpers/absoluteUrl';
import currencyFormatter from '../../helpers/currencyFormatter';
import Layout from '../../components/layout';
import LocationItem from '../../components/location/locationItem';
import LocationFeature from '../../components/location/locationFeature';

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

function PlaceDetail(props) {
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
                                <Button>Book now</Button>
                            </div>
                        </div>
                    </Container>
                </Container>
            </BackgroundImage>
            <Container fluid px='md'>
                <Container fluid pt='xl' px={0}>
                    <Grid>
                        <Grid.Col span={7}>
                            <Card shadow='md'>
                                <Tabs defaultValue="about">
                                    <Tabs.List>
                                        <Tabs.Tab value="about" icon={<IconInfoCircle size={14} />}>About</Tabs.Tab>
                                        <Tabs.Tab value="location" icon={<IconMapPin size={14} />}>Location</Tabs.Tab>
                                    </Tabs.List>

                                    <Tabs.Panel value="about" pt="xs">
                                        <Text size='xl' weight='bold'>About the place</Text>

                                        <Container fluid px={0} py='sm'>
                                            <Text size='md'>{props.place.description}</Text>
                                        </Container>
                                        <Container fluid px={0} py='sm'>
                                            <Chip checked={false}>{props.place.categories.caption}</Chip>
                                        </Container>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="location" pt="xs">
                                        <Text size='xl' weight='bold'>Location</Text>

                                        <Container fluid px={0} py='sm'>
                                            <Text size='md'>
                                                {props.place.address}
                                            </Text>

                                            <Container fluid px={0} py='sm'>
                                                <Button leftIcon={<IconMap size={14} />}>View on maps</Button>
                                            </Container>
                                        </Container>
                                    </Tabs.Panel>
                                </Tabs>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={5} style={{ margin: 'auto 0' }}>
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
                        </Grid.Col>
                    </Grid>
                </Container>

                <Container fluid pt={35} px={0}>
                    <Text size='xl' weight='bold'>Location to visit</Text>
                    <Text color='gray' size='md'>Location we will visit in this tour</Text>
                </Container>
                <Container fluid pt='md' px={0}>
                    <SimpleGrid cols={6}>
                        {JSON.parse(props.place.locations).map((location, i) => {
                            return (
                                <LocationItem
                                    key={i + location.caption}
                                    thumbnail={location.thumbnail}
                                    caption={location.caption}
                                />
                            );
                        })}
                    </SimpleGrid>
                </Container>

                <Container fluid pt={35} px={0}>
                    <Text size='xl' weight='bold'>Photos</Text>
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
                    <Text size='xl' weight='bold'>Facilities</Text>
                    <Text color='gray' size='md'>Facilities provided by us if you decide to take this tour</Text>
                </Container>
                <Container fluid pt='md' px={0}>
                    <SimpleGrid cols={6}>
                        {props.place.facilities.split(',').map((facilityName, index) => {
                            return (
                                <LocationFeature key={index + facilityName} caption={facilityName} />
                            );
                        })}
                    </SimpleGrid>
                </Container>

                <Container fluid pt={35} px={0}>
                    <Text size='xl' weight='bold'>Roadmap</Text>
                    <Text color='gray' size='md'>Overview of the schedule of the tour</Text>
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
                    <Text size='xl' weight='bold'>What are you waiting for?</Text>
                    <Container pt='md'>
                        <Button variant='outline' color='dark'>Book now</Button>
                    </Container>
                </Container>
            </Card>
        </Layout>
    );
}

export default PlaceDetail;