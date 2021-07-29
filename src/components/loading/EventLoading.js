import React from 'react';
import Shimmer from './partials/Shimmer';
import SkeletonLoading from './partials/SkeletonLoading';

const EventLoading = () => {
    return (
        <div className="relative flex flex-col w-full bg-white rounded-lg mb-5 overflow-hidden">
            <Shimmer />
            <div className="px-6 pt-6 pb-4">
                <div className="inline-flex">
                    {/* Posted User img */}
                    <SkeletonLoading type="avatar" />

                    <div className="ml-4 flex flex-col justify-center">
                        {/* Posted By */}
                        <SkeletonLoading type="title" />

                        {/* Posted On */}
                        <SkeletonLoading type="text" />
                    </div>
                </div>
            </div>

            {/* Banner Image */}
            <SkeletonLoading type="banner" />

            <div className="flex flex-col md:flex-row md:justify-between px-6 py-4">
                <div className="flex flex-col">
                    {/* Event Name */}
                    <SkeletonLoading type="title-lg" />
                    {/* Event Date */}
                    <SkeletonLoading type="text-lg" />
                </div>
                <div className="mt-6 md:mt-2">
                    {/* Event Details Button */}
                    <SkeletonLoading type="button" />
                </div>
            </div>
            <hr className="mb-4 px-6" />
            <div className="flex flex-col space-y-5 md:space-y-0 text-center md:flex-row md:space-x-5 px-6 pb-6">
                {/* Request to Volunteer Button */}
                <SkeletonLoading type="button-expand-sm" />
                {/* Interested Button */}
                <SkeletonLoading type="button-expand-sm" />
            </div>
        </div>
    );
};

export default EventLoading;
