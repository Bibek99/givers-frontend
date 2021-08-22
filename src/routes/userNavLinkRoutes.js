import {
    HomeIcon,
    HeartIcon,
    UserIcon,
    ClipboardCheckIcon,
    InboxInIcon,
    CogIcon,
} from "@heroicons/react/solid"

export const userNavLinkRoutes = [
    {
        index: 1,
        path: "/user",
        name: "Home",
        icon: <HomeIcon className="h-6 w-6" />,
        exact: true,
    },
    {
        index: 2,
        path: "/user/profile",
        name: "Profile",
        icon: <UserIcon className="h-6 w-6" />,
    },
    {
        index: 5,
        path: "/user/invitations",
        name: "Invitations",
        icon: <InboxInIcon className="h-6 w-6" />,
    },
    {
        index: 3,
        path: "/user/interested",
        name: "Interested Events",
        icon: <HeartIcon className="h-6 w-6" />,
    },
    {
        index: 4,
        path: "/user/history",
        name: "Events History",
        icon: <ClipboardCheckIcon className="h-6 w-6" />,
    },

    {
        index: 7,
        path: "/user/settings",
        name: "Settings",
        hr: true,
        icon: <CogIcon className="h-6 w-6" />,
    },
]
