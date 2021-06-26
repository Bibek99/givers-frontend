import {
    HomeIcon,
    HeartIcon,
    UserIcon,
    ClipboardCheckIcon,
    InboxInIcon,
    CogIcon,
    FireIcon,
} from '@heroicons/react/solid';

export const userNavLinkRoutes = [
    {
        path: '/user',
        name: 'Home',
        icon: <HomeIcon className="h-6 w-6" />,
        onclick: () => console.log('home'),
        exact: true,
    },
    {
        path: '/user/profile',
        name: 'Profile',
        icon: <UserIcon className="h-6 w-6" />,
    },
    {
        path: '/user/interested',
        name: 'Interested Events',
        icon: <HeartIcon className="h-6 w-6" />,
    },
    {
        path: '/user/history',
        name: 'Events History',
        icon: <ClipboardCheckIcon className="h-6 w-6" />,
    },
    {
        path: '/user/invitations',
        name: 'Invitations',
        icon: <InboxInIcon className="h-6 w-6" />,
    },
    {
        path: '/user/achievements',
        name: 'Achievements',
        icon: <FireIcon className="h-6 w-6" />,
    },
    {
        path: '/user/settings',
        name: 'Settings',
        hr: true,
        icon: <CogIcon className="h-6 w-6" />,
    },
];
