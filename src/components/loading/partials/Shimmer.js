import React from 'react';

const Shimmer = () => {
    return (
        <div className="animate-shimmer absolute top-0 left-0 w-full h-full opacity-50">
            <div className=" bg-gradient-to-r from-transparent via-white to-transparent w-1/5 h-full transform -skew-x-12"></div>
        </div>
    );
};

export default Shimmer;
