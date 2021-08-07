import { HomeIcon, UserIcon, InboxInIcon } from '@heroicons/react/solid';

export const adminNavLinkRoutes = [
    {
        index: 1,
        path: '/admin',
        name: 'Dashboard',
        icon: <HomeIcon className="h-6 w-6" />,
        exact: true,
    },
    {
        index: 2,
        path: '/admin/users',
        name: 'All Users',
        icon: <UserIcon className="h-6 w-6" />,
        exact: true,
    },
    {
        index: 3,
        path: '/admin/requests',
        name: 'All Requests',
        icon: <InboxInIcon className="h-6 w-6" />,
        exact: true,
    },
];
