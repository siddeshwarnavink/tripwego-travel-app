import {
    Text,
    Paper,
    RangeSlider,
    SimpleGrid,
    Button,
    Container,
    Select
} from '@mantine/core';
// import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';
import { useResponsive } from '../../hooks/useResponsive';

import { ICategory } from '../../models/ICategory';
import useTranslation from '../../hooks/useTranslation';

interface PlaceFilterProps {
    budget: number[],
    tripDateRange: any[],
    categoryPicked: number,
    categories: ICategory[],
    onBudgetChange: (values: number[]) => void,
    onTripDateRangeChange: (values: any[]) => void,
    onCategoryChange: (value: number) => void
}

const marks = [
    { value: 10, label: '₹10,000' },
    { value: 50, label: '₹50,000' },
    { value: 100, label: '₹1,00,000' },
];

function PlaceFilter(props: PlaceFilterProps) {
    const { screenIsAtLeast } = useResponsive();
    const { t } = useTranslation();

    return (
        <Paper shadow='xs' radius='md' p='md'>
            <Text
                variant='gradient'
                size='xl'
                weight='bold'
                gradient={{ from: '#9FBD48', to: '#BCE548', deg: 45 }}
            >
                {t('home.filter.caption')}
            </Text>
            <Container fluid py='lg'>
                <SimpleGrid cols={3} style={{ display: screenIsAtLeast('md') ? 'grid' : 'block' }}>
                    <div style={{ marginRight: '25px' }}>
                        <Text size='sm' weight='bold'>
                            {t('home.filter.tripBudgetLabel')}
                        </Text>
                        <RangeSlider
                            mt='xl'
                            value={[props.budget[0], props.budget[1]]}
                            onChange={props.onBudgetChange}
                            label={(value) => `₹${value},000`}
                            marks={marks}
                        />
                    </div>
                    {/* <div style={screenIsAtLeast('md') ? null : { paddingTop: '32px' }}>
                        <Text size='sm' weight='bold'>{t('home.filter.tripDurationLabel')}</Text>
                        <DateRangePicker value={props.tripDateRange as DateRangePickerValue} onChange={props.onTripDateRangeChange} />
                    </div> */}
                    <div style={screenIsAtLeast('md') ? null : { paddingTop: '12px' }}>
                        <Text size='sm' weight='bold'>
                            {t('home.filter.categoryLabel')}
                        </Text>
                        <Select
                            value={`${props.categoryPicked}`}
                            data={props.categories.map(category => {
                                return {
                                    value: `${category.id}`,
                                    label: category.caption
                                };
                            })}
                            onChange={value => value ? props.onCategoryChange(parseInt(value)) : null}
                        />
                    </div>
                </SimpleGrid>
            </Container>
            <Container fluid mt='xl' px={0}>
                <Button type='submit'>
                    {t('home.filter.actionBtn')}
                </Button>
            </Container>
        </Paper >
    );
}

export default PlaceFilter;