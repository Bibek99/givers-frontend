import React from "react";
import { Link } from "react-router-dom";
import StatusPill from "../utilities/StatusPill";
import PropTypes from "prop-types";

const TableRowUser = ({ request, eventId }) => {
    const avatar = request.user.images;
    return (
        <tr className="text-center">
            <td className="px-6 py-4">
                <img
                    src={avatar}
                    alt="avatar"
                    className="h-14 w-14 rounded-full border-2 object-cover mx-auto"
                />
            </td>
            <td className="px-6 py-4">{request.user.full_name}</td>
            <td className="px-6 py-4">{request.user.phone}</td>
            <td className="px-6 py-4">{request.user.address}</td>
            <td className="px-6 py-4">
                <div className="flex items-center justify-center">
                    <StatusPill
                        approved={request.approved}
                        pending={request.pending}
                    />
                </div>
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

TableRowUser.propTypes = {
    request: PropTypes.object,
    eventId: PropTypes.number,
};
