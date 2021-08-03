import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants/baseURL';
import StatusPill from '../utilities/StatusPill';

const TableRowUser = ({ request, eventId }) => {
    const avatar = BASE_URL + request.user.images;
    return (
        <tr>
            <td className="px-6 py-4">
                <img
                    src={avatar}
                    alt="avatar"
                    className="h-14 w-14 rounded-full border-2 object-cover"
                />
            </td>
            <td className="px-6 py-4">{request.user.full_name}</td>
            <td className="px-6 py-4">{request.user.email}</td>
            <td className="px-6 py-4">{request.user.address}</td>
            <td className="px-6 py-4">
                <StatusPill status="Pending" />
            </td>
            <td className="px-6 py-4">
                <Link
                    to={`/org/requests/event/${eventId}/detail/${request.user.id}`}
                    className="text-purple-500"
                >
                    View Detail
                </Link>
            </td>
        </tr>
    );
};

export default TableRowUser;
