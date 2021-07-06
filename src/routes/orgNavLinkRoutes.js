import {
    HomeIcon,
    HeartIcon,
    UserIcon,
    ClipboardCheckIcon,
    InboxInIcon,
    CogIcon,
    PencilAltIcon,
} from '@heroicons/react/solid';

export const orgNavLinkRoutes = [
    {
        path: '/org',
        name: 'Home',
        icon: <HomeIcon className="h-6 w-6" />,
        exact: true,
    },
    {
        path: '/org/create',
        name: 'Create Event',
        icon: <PencilAltIcon className="h-6 w-6" />,
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
