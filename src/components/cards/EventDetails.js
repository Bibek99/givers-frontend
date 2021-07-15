import {
    ArrowLeftIcon,
    InformationCircleIcon,
    CalendarIcon,
    LocationMarkerIcon,
    ClipboardCheckIcon,
} from '@heroicons/react/outline';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { formatDate } from '../../helpers/date';

const EventDetails = () => {
    let { id } = useParams();
    const { eventsList } = useSelector((state) => state.events);

    function extractEventById(eventsList, id) {
        for (let i = 0; i < eventsList.length; i++) {
            if (eventsList[i].id.toString() === id) {
                return eventsList[i];
            }
        }
    }

    const eventDetail = extractEventById(eventsList, id);

    return (
        <div className="flex flex-col w-full bg-white rounded-lg mb-5">
            <div className="flex flex-col justify-between pt-6 pb-4">
                <div className="px-6">
                    <Link
                        to="/user"
                        className="flex flex-row space-x-4 items-center"
                    >
                        <ArrowLeftIcon className="h-6 w-6" />
                        <span className="text-lg">Back</span>
                    </Link>
                </div>
                <div className="w-full my-6">
                    <img
                        src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/184135521_1477105875793240_1073957879458308382_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8631f5&_nc_ohc=KY5mx3yHIJEAX95fbsZ&_nc_ht=scontent.fktm10-1.fna&oh=945cefc382284d7892d9083b65e3ec87&oe=60F49B74"
                        alt="event banner"
                    />
                </div>
                <div className="inline-flex px-6">
                    <img
                        src="https://locus.pcampus.edu.np/wp-content/uploads/2019/11/cropped-Logo-04.png"
                        className="object-cover h-16 w-16"
                        alt=""
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
                <div className="px-6 text-2xl font-medium">
                    {eventDetail.name}
                    <hr className="bg-gray-400 my-4 px-6" />
                </div>
                <div className="px-6">
                    <div className="grid grid-cols-12 gap-4 text-gray-400">
                        <div className="col-start-1 col-end-2 ">
                            <div className="w-6 h-6">
                                <InformationCircleIcon />
                            </div>
                        </div>
                        <div className="col-start-2 col-span-11 ">
                            <div className="text-lg">
                                <div className="break-all">
                                    {eventDetail.description}
                                </div>
                            </div>
                        </div>
                        <div className="col-start-1 col-end-2 ">
                            <div className="w-6 h-6">
                                <CalendarIcon />
                            </div>
                        </div>
                        <div className="col-start-2 col-span-11 ">
                            <div className="text-lg">
                                <div className="break-all">
                                    {formatDate(eventDetail.start_date)} to{' '}
                                    {formatDate(eventDetail.end_date)}
                                </div>
                            </div>
                        </div>
                        <div className="col-start-1 col-end-2 ">
                            <div className="w-6 h-6">
                                <LocationMarkerIcon />
                            </div>
                        </div>
                        <div className="col-start-2 col-span-11 ">
                            <div className="text-lg">
                                <div className="break-all">
                                    {eventDetail.location}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-gray-400 my-4 px-6" />
                    <button className="text-green-500 bg-green-100  rounded-lg px-6 py-2 flex flex-row text-center justify-center">
                        <ClipboardCheckIcon className="h-6 w-6 mr-4" />
                        <p className="text-lg">Request to Volunteer</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
