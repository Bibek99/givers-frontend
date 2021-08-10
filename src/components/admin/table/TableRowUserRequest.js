import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TableRowUserRequest = ({ request }) => {
    const avatar = request.images;

    return (
        <tr className="text-center">
            <td className="px-6 py-4">
                <img
                    src={avatar}
                    alt="avatar"
                    className="h-14 w-14 rounded-full border-2 object-cover mx-auto"
                />
            </td>
            <td className="px-6 py-4">{request.full_name}</td>
            <td className="px-6 py-4">{request.phone}</td>
            <td className="px-6 py-4">{request.address}</td>

            <td className="px-6 py-4">
                <Link
                    to={`/admin/requests/${request.id}`}
                    className="text-purple-500"
                >
                    View Detail
                </Link>
            </td>
        </tr>
    );
};

export default TableRowUserRequest;

TableRowUserRequest.propTypes = {
    request: PropTypes.object,
};
