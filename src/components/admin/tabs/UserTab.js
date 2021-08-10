import { Tab } from "@headlessui/react";
import React from "react";
import PropTypes from "prop-types";

const UserTab = ({ user }) => {
    const avatar = user.images;
    return (
        <Tab.Panel className="rounded-xl focus:outline-none">
            <ul className="flex flex-col items-center space-y-6">
                <li className="text-xl font-medium">User Details</li>
                <li>
                    <img
                        src={avatar}
                        alt="user avatar"
                        className="h-24 w-24 object-cover rounded-full"
                    />
                </li>
                <li>
                    <table className="w-full text-lg">
                        <tbody>
                            <tr className="group py-2">
                                <th className="px-6 py-4">
                                    Full Name
                                </th>
                                <td className="px-6 py-4 text-gray-500">
                                    {user.full_name}
                                </td>
                            </tr>
                            <tr className="group py-2">
                                <th className="px-6 py-4">Address</th>
                                <td className="px-6 py-4 text-gray-500">
                                    {user.address}
                                </td>
                            </tr>
                            <tr className="group py-2">
                                <th className="px-6 py-4">Email</th>
                                <td className="px-6 py-4 text-gray-500">
                                    {user.email}
                                </td>
                            </tr>
                            <tr className="group py-2">
                                <th className="px-6 py-4">Phone</th>
                                <td className="px-6 py-4 text-gray-500">
                                    {user.phone}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </Tab.Panel>
    );
};

export default UserTab;

UserTab.propTypes = {
    user: PropTypes.object,
};
