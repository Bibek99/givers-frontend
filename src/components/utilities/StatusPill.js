import React from "react";
import PropTypes from "prop-types";

const StatusPill = ({ approved, pending }) => {
    let className = "";
    let status = "";

    if (approved) {
        className = "bg-green-200 text-green-700";
        status = "Approved";
    } else if (pending) {
        className = "bg-yellow-200 text-yellow-700";
        status = "Pending";
    } else if (!approved && !pending) {
        className = "bg-red-200 text-red-700";
        status = "Rejected";
    }

    return (
        <div
            className={`w-24 font-medium px-1 py-1 rounded-full flex flex-row justify-center text-center text-sm uppercase ${className}`}
        >
            {status}
        </div>
    );
};

export default StatusPill;

StatusPill.propTypes = {
    approved: PropTypes.bool,
    pending: PropTypes.bool,
};
