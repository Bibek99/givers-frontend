import React from "react";
import PropTypes from "prop-types";

const UserStatusPill = ({ approved, rejected }) => {
    let className = "";
    let status = "";

    if (approved) {
        className = "bg-green-200 text-green-700";
        status = "Verified";
    } else if (rejected) {
        className = "bg-red-200 text-red-700";
        status = "Rejected";
    } else if (!approved && !rejected) {
        className = "bg-yellow-200 text-yellow-700";
        status = "Pending";
    }

    return (
        <div
            className={`w-24 font-medium px-1 py-1 rounded-full flex flex-row justify-center text-center text-sm uppercase ${className}`}
        >
            {status}
        </div>
    );
};

export default UserStatusPill;

UserStatusPill.propTypes = {
    approved: PropTypes.bool,
    rejected: PropTypes.bool,
};
