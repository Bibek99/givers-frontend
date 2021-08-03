import React from 'react';

const StatusPill = ({ status }) => {
    let className = '';

    if (status === 'Approved') {
        className = 'bg-green-200 text-green-700';
    } else if (status === 'Pending') {
        className = 'bg-yellow-200 text-yellow-700';
    } else if (status === 'Rejected') {
        className = 'bg-red-200 text-red-700';
    }

    return (
        <div
            className={`px-1 py-1 rounded-full flex flex-row justify-center text-center text-sm uppercase ${className}`}
        >
            {status}
        </div>
    );
};

export default StatusPill;
