import { Card, Image, Text, Group } from '@mantine/core';

interface LocationProps {
    thumbnail: string;
    caption: string;
}

function LocationItem(props: LocationProps) {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={props.thumbnail}
                    height={160}
                    alt={props.caption}
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{props.caption}</Text>
            </Group>
        </Card>
    );
}

export default LocationItem;