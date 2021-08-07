import React from 'react';
import { BASE_URL } from '../../../constants/baseURL';
import UserStatusPill from '../UserStatusPill';

const TableRowUserList = ({ user }) => {
    const avatar = BASE_URL + user.images;
    return (
        <tr className="text-center">
            <td className="px-6 py-4">
                <img
                    src={avatar}
                    alt="avatar"
                    className="h-14 w-14 rounded-full border-2 object-cover mx-auto"
                />
            </td>
            <td className="px-6 py-4">{user.full_name}</td>
            <td className="px-6 py-4">{user.phone}</td>
            <td className="px-6 py-4">{user.address}</td>
            <td className="px-6 py-4">
                {user.volunteer ? 'Volunteer' : 'Organizer'}
            </td>
            <td className="px-6 py-4">
                <UserStatusPill approved={user.verify} rejected={user.reject} />
            </td>
        </tr>
    );
};

export default TableRowUserList;
