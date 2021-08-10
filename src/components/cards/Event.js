import { DotsVerticalIcon } from "@heroicons/react/solid";
import {
    ClipboardCheckIcon,
    HeartIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../helpers/date";
import PropTypes from "prop-types";

const Event = ({ event, volunteer }) => {
    const eventBanner = event.banner;

    return (
        <div className="flex flex-col w-full bg-white rounded-lg mb-5">
            <div className="flex flex-row justify-between px-6 pt-6 pb-4">
                <div className="inline-flex">
                    <img
                        src={event.user.images}
                        alt="org logo"
                        className="object-cover h-16 w-16 rounded-full"
                    />
                    <div className="ml-4 flex flex-col justify-center">
                        <div className="text-2xl font-medium">
                            {event.user.username}
                        </div>
                        <div className="text-sm md:text-base text-gray-400">
                            Posted on {formatDate(event.posted_at)}
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
                src={eventBanner}
                alt="event-cover"
                className="object-cover"
            />
            <div className="flex flex-col md:flex-row md:justify-between p-6">
                <div className="flex flex-col space-y-2">
                    <div className="text-2xl font-medium">
                        {event.name}
                    </div>
                    <div className="text-gray-400">
                        Occurs {formatDate(event.start_date)} to{" "}
                        {formatDate(event.end_date)}
                    </div>
                </div>
                <div className="mt-6 md:mt-2">
                    <Link
                        className="bg-blue-100 text-blue-600 text-lg rounded-lg px-6 py-2"
                        to={
                            volunteer
                                ? `user/event/${event.id}/`
                                : `org/event/${event.id}`
                        }
                    >
                        Event Details
                    </Link>
                </div>
            </div>
            {volunteer && (
                <div>
                    <hr className="bg-gray-400 mb-4 px-6" />
                    <div className="flex flex-col space-y-5 md:space-y-0 text-center md:flex-row md:space-x-5 px-6 pb-6">
                        <Link
                            to={`/user/request/event/${event.id}`}
                            className="text-green-500 bg-green-100  rounded-lg px-6 py-2 flex flex-row text-center justify-center"
                        >
                            <ClipboardCheckIcon className="h-6 w-6 mr-4" />
                            <p className="text-lg">
                                Request to Volunteer
                            </p>
                        </Link>
                        <button className="text-red-500 bg-red-100 rounded-lg px-6 py-2 flex flex-row text-center justify-center">
                            <HeartIcon className="h-6 w-6 mr-4" />
                            <p className="text-lg">Interested</p>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Event;

Event.propTypes = {
    volunteer: PropTypes.bool,
    event: PropTypes.object,
};
