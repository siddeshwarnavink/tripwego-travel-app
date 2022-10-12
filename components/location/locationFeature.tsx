import { Card, Text } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons';

interface LocationFeatureProps {
    caption: string;
}

function LocationFeature(props: LocationFeatureProps) {
    return (
        <Card shadow='sm' withBorder>
            <IconCircleCheck color='#9FBD48' />
            <Text weight='bold'>{props.caption}</Text>
        </Card>
    );
}

export default LocationFeature;