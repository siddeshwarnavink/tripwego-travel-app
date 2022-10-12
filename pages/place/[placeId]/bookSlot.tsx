import { useEffect, useState } from 'react';
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
import formatDate from '../../../helpers/formatDate';
import validateEmail from '../../../helpers/validateEmail';
import validateString from '../../../helpers/validateString';
import validatePhoneNumber from '../../../helpers/validatePhoneNumber';
import Layout from '../../../components/layout';
import PlaceListItem from '../../../components/places/placeListItem';

interface BookSlotProps {
    place: IPlace;
    availableDates: string[];
}

export async function getServerSideProps({ req, query }) {
    const { origin } = absoluteUrl(req, undefined);
    const baseApiUrl = `${origin}/api`;

    const placeReq = await fetch(`${baseApiUrl}/places/${query.placeId}`);
    const { place } = await placeReq.json();

    const availableSlotsReq = await fetch(`${baseApiUrl}/places/getAvailableSlots?id=${query.placeId}`);
    const availableDates = await availableSlotsReq.json();

    return {
        props: {
            place,
            availableDates
        }
    };
}

function BookSlot(props: BookSlotProps) {
    const [active, setActive] = useState(0);
    const [slotDate, setSlotDate] = useState(props.availableDates[0]);

    const form = useForm({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: ''
        },

        validate: {
            firstName: value => validateString(value) ? null : 'Invalid first name',
            lastName: value => validateString(value) ? null : 'Invalid last name',
            phoneNumber: value => validatePhoneNumber(value) ? null : 'Invalid phoneNumber',
            address: value => validateString(value) ? null : 'Invalid address',
            email: (value) => validateEmail(value) ? null : 'Invalid email',
        },
    });

    const nextStep = () => {
        if (active == 1) {
            form.validate();
            if (form.isValid()) {
                setActive(2);
            }
        } else {
            setActive((current) => (current < 3 ? current + 1 : current));
        }
    }
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    function setActiveStepHandler(step: number) {
        if (step === 2) {
            if (form.isValid()) {
                setActive(step);
            }
        } else {
            setActive(step);
        }
    }

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
                    <Stepper active={active} onStepClick={setActiveStepHandler} breakpoint='sm'>
                        <Stepper.Step label='Pick a slot'>
                            <SimpleGrid cols={2} px='lg'>
                                <Select
                                    label='Select date'
                                    value={slotDate}
                                    onChange={setSlotDate}
                                    data={props.availableDates.map((availableDate, index) => {
                                        return {
                                            value: availableDate,
                                            label: formatDate(new Date(availableDate))
                                        };
                                    })}
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
                                {...form.getInputProps('address')}
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