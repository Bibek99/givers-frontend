import React from "react";
import {
    PencilIcon,
    ExternalLinkIcon,
    LocationMarkerIcon,
    MailIcon,
    GlobeAltIcon,
    PhoneIcon,
} from "@heroicons/react/outline";
import UserProfileLoading from "../../loading/UserProfileLoading";
import PropTypes from "prop-types";

const ViewOrgProfile = ({ org, toggleEditMode }) => {
    return (
        <>
            {org && (
                <div className="flex divide-y-2 flex-col w-full border bg-white rounded-lg shadow-xl">
                    <div className="flex flex-col md:flex-row  mx-8 lg:mx-12 my-8 lg:my-12">
                        <div className="flex-shrink-0 flex flex-row ">
                            <img
                                alt="Profile"
                                src={org.images}
                                className="rounded-full w-40 md:w-48 lg:w-56 shadow-xl"
                            />
                        </div>
                        <div className="flex flex-col-reverse md:flex-col space-y-6 ml-8 w-full">
                            <div className="flex flex-row justify-center mt-8 md:mt-0 md:justify-end">
                                <button
                                    onClick={toggleEditMode}
                                    className="flex flex-row justify-center w-36 bg-blue-100 px-2 py-2 text-blue-600 rounded-lg shadow focus:outline-none"
                                >
                                    <PencilIcon className="h-4 lg:h-5 w-5 lg:w-6 mr-1 lg:mr-2 mt-1" />
                                    <span className="text-base lg:text-lg">
                                        Edit Profile
                                    </span>
                                </button>
                            </div>
                            <div className="">
                                <div className="flex flex-row justify-center md:justify-start mt-4 md:mt-0 mb-4 text-3xl font-semibold">
                                    {org.full_name}
                                </div>
                                <div className="text-xm lg:text-lg md:text-base break-words text-gray-500">
                                    {org.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 font-semibold mx-8 md:mx-16 py-8">
                        <li className="inline-flex">
                            <LocationMarkerIcon className=" text-purple-600 h-12 w-10 mr-2" />
                            <ul>
                                <li className="">Address</li>
                                <li className="font-normal">
                                    {org.address}
                                </li>
                            </ul>
                        </li>
                        <li className="inline-flex">
                            <MailIcon className=" text-purple-600 h-12 w-10 mr-2" />
                            <ul>
                                <li className="">Email</li>
                                <li className="font-normal">
                                    {org.email}
                                </li>
                            </ul>
                        </li>
                        <li className="inline-flex">
                            <PhoneIcon className=" text-purple-600 h-12 w-10 mr-2" />
                            <ul>
                                <li className="">Phone</li>
                                <li className="font-normal">
                                    {org.phone}
                                </li>
                            </ul>
                        </li>
                        <li className="inline-flex">
                            <GlobeAltIcon className=" text-purple-600 h-12 w-10 mr-2" />
                            <ul>
                                <li className="">Website</li>
                                <li className="flex font-normal items-center">
                                    {org.website}
                                    <a
                                        target="_blank"
                                        href={org.website}
                                        rel="noreferrer"
                                    >
                                        <ExternalLinkIcon className="ml-2 w-4 h-4" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )}
            {!org && <UserProfileLoading />}
        </>
    );
};

export default ViewOrgProfile;

ViewOrgProfile.propTypes = {
    org: PropTypes.object,
    toggleEditMode: PropTypes.func,
};
