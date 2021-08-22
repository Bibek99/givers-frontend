import { ReactComponent as DashboardView } from "../assets/feature-icons/dashboard.svg"
import { ReactComponent as EmailNotification } from "../assets/feature-icons/emailnoti.svg"
import { ReactComponent as UserFriendly } from "../assets/feature-icons/userfriendly.svg"
import { ReactComponent as Flexible } from "../assets/feature-icons/flexible.svg"
import { ReactComponent as Responsive } from "../assets/feature-icons/responsive.svg"
import { ReactComponent as UserManagement } from "../assets/feature-icons/usermgmt.svg"

export const featuresList = [
    {
        icon: <DashboardView />,
        title: "Dashboard View",
        description:
            "Our interactive dashboard allows you to drill down and filter operational information.",
    },
    {
        icon: <UserFriendly />,
        title: "User Friendly",
        description:
            "Our user interface is well-organized, making it easy to locate different tools and options.",
    },
    {
        icon: <Flexible />,
        title: "Flexibility",
        description:
            "Components can be easily customized and scalable development in large scale.",
    },
    {
        icon: <UserManagement />,
        title: "Manage Users",
        description:
            "The super admin can manage users, modify their roles etc inside the application.",
    },
    {
        icon: <Responsive />,
        title: "Responsive UI",
        description:
            "User Interface renders well on a variety of devices and window or screen sizes from minimum to maximum display.",
    },
    {
        icon: <EmailNotification />,
        title: "Email Notifications",
        description:
            "Users are notified via email on their in application notification.",
    },
]
