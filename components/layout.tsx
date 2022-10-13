import { ReactNode, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppShell, Image, Header, Grid, ActionIcon, Group } from '@mantine/core';
import { IconMapPin, IconCalendarTime, IconInfoCircle, IconSun, IconMoonStars } from '@tabler/icons';

import { themeContext } from '../context/theme-context';

interface LayoutProps {
    children: ReactNode
}

function Layout(props: LayoutProps) {
    const router = useRouter();
    const themeCtx = useContext(themeContext)

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
                    <Group sx={{ height: '100%' }} px={20} position="apart">
                        <div style={{ width: '150px', cursor: 'pointer' }}>
                            <Link href='/'>
                                <Image src={themeCtx.isDarkMode ? '/images/TripWeGo_Logo_Dark.svg' : '/images/TripWeGo_Logo.svg'} alt='TripWeGo' />
                            </Link>
                        </div>
                        <ActionIcon variant="default" onClick={() => themeCtx.setIsDarkMode(!themeCtx.isDarkMode)} size={30}>
                            {themeCtx.isDarkMode ? <IconSun size={16} /> : <IconMoonStars size={16} />}
                        </ActionIcon>
                    </Group>

                </Header>
            )}
        >
            {props.children}
        </AppShell>
    );
}

export default Layout;