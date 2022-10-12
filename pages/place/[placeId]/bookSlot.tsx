import { useState } from 'react';
import Link from 'next/link';
import {
    Container,
    Stepper,
    SimpleGrid,
    Text,
    TextInput,
    Group,
    Button,
    Textarea,
    Select
} from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons'
import { useForm } from '@mantine/form';

import { IPlace } from '../../../models/IPlaces';
import absoluteUrl from '../../../helpers/absoluteUrl';
import Layout from '../../../components/layout';
import PlaceListItem from '../../../components/places/placeListItem';

interface BookSlotProps {
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

function BookSlot(props: BookSlotProps) {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const form = useForm({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <Layout>
            <Container>
                <Text size='xl' weight='bold'>Book a slot</Text>
                <PlaceListItem
                    title={props.place.title}
                    shortDescription={props.place.short_description}
                    thumbnail={props.place.thumbnail}
                    placeId={`${props.place.id}`}
                    price={props.place.price}
                    categoryCaption={props.place.categories.caption}
                />

                <Container mt='xl'>
                    <Stepper active={active} onStepClick={setActive} breakpoint='sm'>
                        <Stepper.Step label='Pick a slot'>
                            <SimpleGrid cols={2} px='lg'>
                                <Select
                                    label='Select date'
                                    data={[
                                        { value: 'react', label: 'React' },
                                        { value: 'ng', label: 'Angular' },
                                        { value: 'svelte', label: 'Svelte' },
                                        { value: 'vue', label: 'Vue' },
                                    ]}
                                />
                            </SimpleGrid>
                        </Stepper.Step>
                        <Stepper.Step label='Fill your details'>
                            <SimpleGrid cols={2}>
                                <TextInput
                                    withAsterisk
                                    label='First name'
                                    placeholder='John'
                                    {...form.getInputProps('firstName')}
                                />
                                <TextInput
                                    withAsterisk
                                    label='Last name'
                                    placeholder='doe'
                                    {...form.getInputProps('lastName')}
                                />
                            </SimpleGrid>
                            <SimpleGrid cols={2}>
                                <TextInput
                                    withAsterisk
                                    label='Email address'
                                    placeholder='test@test.com'
                                    {...form.getInputProps('email')}
                                />
                                <TextInput
                                    withAsterisk
                                    label='Phone number'
                                    {...form.getInputProps('phoneNumber')}
                                />
                            </SimpleGrid>
                            <Textarea
                                label='Your address'
                                withAsterisk
                                minRows={4}
                            />
                        </Stepper.Step>
                        <Stepper.Step label='Get your tickets'>
                            <Container style={{ margin: '12px auto', maxWidth: '350px', textAlign: 'center' }}>
                                <IconCircleCheck size={75} />
                                <Text size='xl' weight='bold'>Ticket booked successfully</Text>
                                <Text>You'll soon be contacted by our team</Text>

                                <div style={{ marginTop: '12px' }}>
                                    <Link href='/' passHref>
                                        <Button component='a'>Go home</Button>
                                    </Link>
                                </div>
                            </Container>
                        </Stepper.Step>
                    </Stepper>
                    <Group position="center" mt="xl">
                        {(active > 0 && active !== 2) && (
                            <Button variant="default" onClick={prevStep}>Back</Button>
                        )}
                        {active !== 2 && (
                            <Button onClick={nextStep}>Next</Button>
                        )}
                    </Group>
                </Container>
            </Container>
        </Layout>
    );
}

export default BookSlot;