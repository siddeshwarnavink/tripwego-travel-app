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
import useTranslation from '../../../hooks/useTranslation';
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
    baseApiUrl: string;
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
            availableDates,
            baseApiUrl
        }
    };
}

function BookSlot(props: BookSlotProps) {
    const [active, setActive] = useState(0);
    const [slotDate, setSlotDate] = useState(props.availableDates[0]);
    const { t } = useTranslation();

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

    function nextStep() {
        if (active == 1) {
            form.validate();
            if (form.isValid()) {
                setActive(2);
                submitBookingFormHandler();
            }
        } else {
            setActive((current) => (current < 3 ? current + 1 : current));
        }
    }
    function prevStep() {
        setActive((current) => (current > 0 ? current - 1 : current));
    }

    function setActiveStepHandler(step: number) {
        if (step === 2) {
            if (form.isValid()) {
                setActive(step);
                submitBookingFormHandler();
            }
        } else {
            setActive(step);
        }
    }

    async function submitBookingFormHandler() {
        const {
            email,
            firstName,
            lastName,
            phoneNumber,
            address
        } = form.values;
        await fetch(`${props.baseApiUrl}/booking/bookSlot`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                firstName,
                lastName,
                phoneNumber,
                address,
                date: slotDate,
                placeId: props.place.id
            })
        });
    }

    return (
        <Layout>
            <Container>
                <Text size='xl' weight='bold'>
                    {t('bookSlot.caption')}
                </Text>
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
                        <Stepper.Step label={t('bookSlot.step1.caption')}>
                            <SimpleGrid cols={2} px='lg'>
                                <Select
                                    label={t('bookSlot.step1.selectDateLabel')}
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
                        <Stepper.Step label={t('bookSlot.step2.caption')}>
                            <SimpleGrid cols={2}>
                                <TextInput
                                    withAsterisk
                                    label={t('bookSlot.step2.firstNameLabel')}
                                    {...form.getInputProps('firstName')}
                                />
                                <TextInput
                                    withAsterisk
                                    label={t('bookSlot.step2.lastNameLabel')}
                                    {...form.getInputProps('lastName')}
                                />
                            </SimpleGrid>
                            <SimpleGrid cols={2}>
                                <TextInput
                                    withAsterisk
                                    label={t('bookSlot.step2.emailLabel')}
                                    {...form.getInputProps('email')}
                                />
                                <TextInput
                                    withAsterisk
                                    label={t('bookSlot.step2.phoneNoLabel')}
                                    {...form.getInputProps('phoneNumber')}
                                />
                            </SimpleGrid>
                            <Textarea
                                label={t('bookSlot.step2.addressLabel')}
                                withAsterisk
                                minRows={4}
                                {...form.getInputProps('address')}
                            />
                        </Stepper.Step>
                        <Stepper.Step label={t('bookSlot.step3.caption')}>
                            <Container style={{ margin: '12px auto', maxWidth: '350px', textAlign: 'center' }}>
                                <IconCircleCheck size={75} />
                                <Text size='xl' weight='bold'>{t('bookSlot.step3.successMsgCaption')}</Text>
                                <Text>{t('bookSlot.step3.successMsgSubCaption')}</Text>

                                <div style={{ marginTop: '12px' }}>
                                    <Link href='/' passHref>
                                        <Button component='a'>
                                            {t('bookSlot.step3.actionBtn')}
                                        </Button>
                                    </Link>
                                </div>
                            </Container>
                        </Stepper.Step>
                    </Stepper>
                    <Group position="center" mt="xl">
                        {(active > 0 && active !== 2) && (
                            <Button variant="default" onClick={prevStep}>
                                {t('bookSlot.backBtn')}
                            </Button>
                        )}
                        {active !== 2 && (
                            <Button onClick={nextStep}>
                                {t('bookSlot.nextBtn')}
                            </Button>
                        )}
                    </Group>
                </Container>
            </Container>
        </Layout>
    );
}

export default BookSlot;