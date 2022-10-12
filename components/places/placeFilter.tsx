import {
    Text,
    Paper,
    RangeSlider,
    SimpleGrid,
    Button,
    Container,
    Select
} from '@mantine/core';
import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';
import { useResponsive } from '../../hooks/useResponsive';

import { ICategory } from '../../models/ICategory';

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

const breakpoints = { xs: 0, sm: 480, md: 1024 };

function PlaceFilter(props: PlaceFilterProps) {
    const { screenIsAtLeast } = useResponsive();

    return (
        <Paper shadow='xs' radius='md' p='md'>
            <Text
                variant='gradient'
                size='xl'
                weight='bold'
                gradient={{ from: '#9FBD48', to: '#BCE548', deg: 45 }}
            >
                Find your best destination
            </Text>
            <Container fluid py='lg'>
                <SimpleGrid cols={3} style={{ display: screenIsAtLeast('md') ? 'grid' : 'block' }}>
                    <div style={{ marginRight: '25px' }}>
                        <Text size='sm' weight='bold'>Trip budget:</Text>
                        <RangeSlider
                            mt='xl'
                            value={[props.budget[0], props.budget[1]]}
                            onChange={props.onBudgetChange}
                            label={(value) => `₹${value},000`}
                            marks={marks}
                        />
                    </div>
                    <div style={screenIsAtLeast('md') ? null : { paddingTop: '32px' }}>
                        <Text size='sm' weight='bold'>Trip duration:</Text>
                        <DateRangePicker value={props.tripDateRange as DateRangePickerValue} onChange={props.onTripDateRangeChange} />
                    </div>
                    <div style={screenIsAtLeast('md') ? null : { paddingTop: '12px' }}>
                        <Text size='sm' weight='bold'>Category:</Text>
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
                <Button type='submit'>Search</Button>
            </Container>
        </Paper >
    );
}

export default PlaceFilter;