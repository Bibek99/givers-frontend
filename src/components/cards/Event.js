import { DotsVerticalIcon } from '@heroicons/react/solid';
import { ClipboardCheckIcon, HeartIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Event = () => {
    return (
        <div className="flex flex-col w-full bg-white rounded-lg mb-5">
            <div className="flex flex-row justify-between px-6 pt-6 pb-4">
                <div className="inline-flex">
                    <img
                        src="https://locus.pcampus.edu.np/wp-content/uploads/2019/11/cropped-Logo-04.png"
                        alt="org logo"
                        className="object-cover h-16 w-16"
                    />
                    <div className="ml-4 flex flex-col justify-center">
                        <div className="text-2xl font-medium">
                            Locus, IOE Pulchowk Campus
                        </div>
                        <div className="text-sm md:text-base text-gray-400">
                            Posted on June 28
                        </div>
                    </div>
                </div>
                <div>
                    <div className="h-6 w-6">
                        <DotsVerticalIcon />
                    </div>
                </div>
            </div>

            <img
                src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/181107881_1472916536212174_5039234446614312642_n.png?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=_IVKVBgwnDgAX_zT1jx&_nc_ht=scontent.fktm10-1.fna&oh=ca0fc083ab4a697a2ec65df73b4ab605&oe=60DED573"
                alt="event-cover"
                className="object-cover"
            />
            <div className="flex flex-col md:flex-row md:justify-between p-6">
                <div className="flex flex-col space-y-2">
                    <div className="text-2xl font-medium">
                        Call for Volunteers in LOCUS 2021
                    </div>
                    <div className="text-gray-400">
                        June 29, 2021 to July 31, 2021
                    </div>
                </div>
                <div className="mt-6 md:mt-2">
                    <Link className="bg-blue-100 text-blue-600 text-lg rounded-lg px-6 py-2">
                        Event Details
                    </Link>
                </div>
            </div>
            <hr className="bg-gray-400 mb-4 px-6" />
            <div className="flex flex-col space-y-5 md:space-y-0 text-center md:flex-row md:space-x-5 px-6 pb-6">
                <button className="text-green-500 bg-green-100  rounded-lg px-6 py-2 flex flex-row text-center justify-center">
                    <ClipboardCheckIcon className="h-6 w-6 mr-4" />
                    <p className="text-lg">Request to Volunteer</p>
                </button>
                <button className="text-red-500 bg-red-100 rounded-lg px-6 py-2 flex flex-row text-center justify-center">
                    <HeartIcon className="h-6 w-6 mr-4" />
                    <p className="text-lg">Interested</p>
                </button>
            </div>
        </div>
    );
};

export default Event;
