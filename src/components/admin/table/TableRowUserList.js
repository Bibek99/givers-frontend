import React from "react";
import UserStatusPill from "../UserStatusPill";
import PropTypes from "prop-types";

const TableRowUserList = ({ user }) => {
    const avatar = user.images;

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
                {user.volunteer ? "Volunteer" : "Organizer"}
            </td>
            <td className="px-6 py-4">
                <div className="flex flex-row justify-center items-center">
                    <UserStatusPill
                        approved={user.verify}
                        rejected={user.reject}
                    />
                </div>
            </td>
        </tr>
    );
};

export default TableRowUserList;

TableRowUserList.propTypes = {
    user: PropTypes.object,
};
