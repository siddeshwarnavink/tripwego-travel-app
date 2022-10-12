import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppShell, Image, Header, Grid, Text, SimpleGrid } from '@mantine/core';
import { IconMapPin, IconCalendarTime, IconInfoCircle } from '@tabler/icons';

interface LayoutProps {
    children: ReactNode
}

function Layout(props: LayoutProps) {
    const router = useRouter();

    const navigationLinks = [
        { caption: 'Places', path: '/', icon: IconMapPin },
        { caption: 'My Bookings', path: '/myBookings', icon: IconCalendarTime },
        { caption: 'About', path: '/about', icon: IconInfoCircle }
    ];

    function isActiveLink(path: string) {
        return router.asPath === path;
    }

    return (
        <AppShell
            padding='md'
            header={(
                <Header height={60} p='xs'>
                    <Grid>
                        <Grid.Col span={1}>
                            <div style={{ width: '150px', cursor: 'pointer' }}>
                                <Link href='/'>
                                    <Image src='/images/TripWeGo_Logo.svg' alt='TripWeGo' />
                                </Link>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <SimpleGrid cols={3}>
                                {navigationLinks.map((link, i) => {
                                    return (
                                        <Link key={link.caption + i} href={link.path} passHref>
                                            <Text
                                                component='a'
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    padding: '5px 0px',
                                                    cursor: 'pointer'
                                                }}
                                                weight={isActiveLink(link.path) ? 'bold' : 'normal'}
                                                color={isActiveLink(link.path) ? '#7e9636' : 'gray'}
                                            >
                                                <link.icon stroke={1.5} />
                                                <div>{link.caption}</div>
                                            </Text>
                                        </Link>
                                    );
                                })}
                            </SimpleGrid>
                        </Grid.Col>
                    </Grid>
                </Header>
            )}
        >
            {props.children}
        </AppShell>
    );
}

export default Layout;