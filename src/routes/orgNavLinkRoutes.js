import {
    HomeIcon,
    HeartIcon,
    UserIcon,
    ClipboardCheckIcon,
    InboxInIcon,
    CogIcon,
} from '@heroicons/react/solid';

export const orgNavLinkRoutes = [
    {
        path: '/org',
        name: 'Home',
        icon: <HomeIcon className="h-6 w-6" />,
        onclick: () => console.log('home'),
        exact: true,
    },
    {
        path: '/org/profile',
        name: 'Profile',
        icon: <UserIcon className="h-6 w-6" />,
    },
    {
        path: '/org/dashboard',
        name: 'Dashboard',
        icon: <HeartIcon className="h-6 w-6" />,
    },
    {
        path: '/org/history',
        name: 'Events History',
        icon: <ClipboardCheckIcon className="h-6 w-6" />,
    },
    {
        path: '/org/requests',
        name: 'Requests',
        icon: <InboxInIcon className="h-6 w-6" />,
    },
    {
        path: '/org/settings',
        name: 'Settings',
        hr: true,
        icon: <CogIcon className="h-6 w-6" />,
    },
];
