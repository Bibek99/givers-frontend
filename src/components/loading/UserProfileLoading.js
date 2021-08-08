import React from 'react';
import Shimmer from './partials/Shimmer';
import SkeletonLoading from './partials/SkeletonLoading';

const UserProfileLoading = () => {
    return (
        <div className="relative flex flex-col w-full bg-white rounded-lg mb-5 overflow-hidden">
            <Shimmer />
            <div className="px-6 pt-6 pb-4 mb-4">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-row">
                        <SkeletonLoading type="avatar-profile" />
                    </div>
                    <div className="flex flex-col-reverse md:flex-col w-full">
                        <div className="flex flex-row justify-center mt-8 md:mt-0 md:justify-end">
                            <SkeletonLoading type="button" />
                        </div>
                        <div className="ml-8 flex flex-col justify-center space-y-2">
                            <SkeletonLoading type="title" />

                            <SkeletonLoading type="text" />
                            <SkeletonLoading type="text" />
                            <SkeletonLoading type="text" />
                        </div>
                    </div>
                </div>
                <hr className="my-8 px-6 border-2" />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 font-semibold mx-8 md:mx-16 py-8">
                    <li className="inline-flex space-x-3">
                        <SkeletonLoading type="icon" />
                        <ul>
                            <li className="">
                                <SkeletonLoading type="title" />
                            </li>
                            <li>
                                <SkeletonLoading type="text" />
                            </li>
                        </ul>
                    </li>
                    <li className="inline-flex space-x-3">
                        <SkeletonLoading type="icon" />
                        <ul>
                            <li className="">
                                <SkeletonLoading type="title" />
                            </li>
                            <li>
                                <SkeletonLoading type="text" />
                            </li>
                        </ul>
                    </li>
                    <li className="inline-flex space-x-3">
                        <SkeletonLoading type="icon" />
                        <ul>
                            <li className="">
                                <SkeletonLoading type="title" />
                            </li>
                            <li>
                                <SkeletonLoading type="text" />
                            </li>
                        </ul>
                    </li>
                    <li className="inline-flex space-x-3">
                        <SkeletonLoading type="icon" />
                        <ul>
                            <li className="">
                                <SkeletonLoading type="title" />
                            </li>
                            <li>
                                <SkeletonLoading type="text" />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserProfileLoading;
