import React from "react";
import {
    PencilIcon,
    ExternalLinkIcon,
    LocationMarkerIcon,
    MailIcon,
    GlobeAltIcon,
    PhoneIcon,
} from "@heroicons/react/outline";

// import { ReactComponent as FacebookLogo } from "../../../assets/Socials/facebook.svg";

const ViewOrgProfile = ({ toggleEditMode }) => {
    return (
        <div className="flex divide-y-2 flex-col w-full border bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row justify-around mx-8 lg:mx-12 my-8 lg:my-12">
                <div className="flex-shrink-0 flex flex-row justify-center ">
                    <img
                        alt="Profile"
                        src="https://media-exp1.licdn.com/dms/image/C4E0BAQEo9PVf9GD4CQ/company-logo_200_200/0/1619675762699?e=2159024400&v=beta&t=JIxwLFMsePXIv_wOlALdWQ8plKUMdg_-wRtKpWcSZdw"
                        className="rounded-full w-40 md:w-48 lg:w-56 "
                    />
                </div>
                <div className="flex flex-col-reverse md:flex-col">
                    <div className="flex flex-row justify-center mt-8 md:mt-0 md:justify-end">
                        <div className="flex flex-row justify-center w-36 bg-blue-100 px-2 py-2 text-blue-600 rounded-lg shadow ">
                            <PencilIcon className="h-4 lg:h-5 w-5 lg:w-6 mr-1 lg:mr-2 mt-1" />
                            <button
                                onClick={toggleEditMode}
                                className="text-base lg:text-lg"
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>
                    <div className="md:ml-10 md:mr-20">
                        <div className="flex flex-row justify-center md:justify-start mt-4 md:mt-0 mb-4 text-3xl font-semibold">
                            Locus
                        </div>
                        <div className="text-xm lg:text-lg md:text-base break-words text-gray-500">
                            LOCUS is an umbrella organization led by
                            undergraduate students of Electrical, Electronics,
                            and Computer Engineering departments from IOE,
                            Pulchowk Campus. A single compass: fostering
                            collaboration guides all our activities.
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
                            Institute of Engineering, Central Campus, Pulchowk
                        </li>
                    </ul>
                </li>
                <li className="inline-flex">
                    <MailIcon className=" text-purple-600 h-12 w-10 mr-2" />
                    <ul>
                        <li className="">Email</li>
                        <li className="font-normal">locus@ioe.edu.np</li>
                    </ul>
                </li>
                <li className="inline-flex">
                    <PhoneIcon className=" text-purple-600 h-12 w-10 mr-2" />
                    <ul>
                        <li className="">Phone</li>
                        <li className="font-normal">+977 9865168524</li>
                    </ul>
                </li>
                <li className="inline-flex">
                    <GlobeAltIcon className=" text-purple-600 h-12 w-10 mr-2" />
                    <ul>
                        <li className="">Website</li>
                        <li className="flex font-normal items-center">
                            https://locus.pcampus.edu.np/
                            <a
                                target="_blank"
                                href="https://locus.pcampus.edu.np/"
                                rel="noreferrer"
                            >
                                <ExternalLinkIcon className="ml-2 w-4 h-4" />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default ViewOrgProfile;
