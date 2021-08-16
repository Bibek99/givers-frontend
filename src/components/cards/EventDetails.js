import {
    ArrowLeftIcon,
    InformationCircleIcon,
    CalendarIcon,
    LocationMarkerIcon,
    ClipboardCheckIcon,
} from "@heroicons/react/outline"
import axios from "axios"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { Link, useHistory, useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/baseURL"
import { authorizedJSONHeader } from "../../helpers/config"
import { formatDate } from "../../helpers/date"

const EventDetails = () => {
    const history = useHistory()

    const [eventDetail, setEventDetail] = useState("")

    const { id } = useParams()

    const {
        userInfo: { volunteer, access },
    } = useSelector((state) => state.userLogin)

    const path = volunteer ? "/user" : "/org"

    const loadEventDetails = useCallback(async () => {
        const loadEventDetailsUrl = BASE_URL + `/api/events/${id}/`
        const config = authorizedJSONHeader(access)

        const { data } = await axios.get(loadEventDetailsUrl, config)

        if (data) {
            setEventDetail(data)
        }
    }, [access, id])

    useEffect(() => {
        loadEventDetails()
    }, [])

    return (
        <div className="flex flex-col w-full bg-white rounded-lg mb-5">
            {eventDetail && (
                <div className="flex flex-col justify-between pt-6 pb-4">
                    <div className="px-6">
                        <button
                            to="/user"
                            className="flex flex-row space-x-4 items-center focus:outline-none"
                            onClick={() =>
                                history.push({
                                    pathname: path,
                                    state: { eventLoad: false },
                                })
                            }
                        >
                            <ArrowLeftIcon className="h-6 w-6" />
                            <span className="text-lg">Back</span>
                        </button>
                    </div>
                    <div className="">
                        <div className="w-full my-4">
                            <img
                                src={eventDetail.banner}
                                alt="event banner"
                            />
                        </div>
                        <div className="inline-flex items-start px-6 relative">
                            <img
                                src={eventDetail.user.images}
                                className="object-cover h-32 w-32 border-2 rounded-full border-white absolute -top-16 bg-white"
                                alt=""
                            />
                            <div className="h-16 w-32"></div>
                            <div className="ml-4 flex flex-col justify-center">
                                <div className="text-2xl font-medium">
                                    {eventDetail.user.username}
                                </div>
                                <div className="text-sm md:text-base text-gray-400">
                                    posted on{" "}
                                    {formatDate(
                                        eventDetail.posted_at
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 text-2xl font-medium mt-6">
                        {eventDetail.name}
                        <hr className="bg-gray-400 my-4 px-6" />
                    </div>
                    <div className="px-6">
                        <p className="text-lg font-medium mb-4">
                            Event Details
                        </p>
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
                                        Occurs{" "}
                                        {formatDate(
                                            eventDetail.start_date
                                        )}{" "}
                                        to{" "}
                                        {formatDate(
                                            eventDetail.end_date
                                        )}
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
                        {volunteer && (
                            <div>
                                <hr className="bg-gray-400 my-4 px-6" />
                                <div className="flex flex-row">
                                    <Link
                                        to={`/user/request/event/${id}`}
                                        className="text-green-500 bg-green-100  rounded-lg px-6 py-2 flex flex-row text-center justify-center"
                                    >
                                        <ClipboardCheckIcon className="h-6 w-6 mr-4" />
                                        <p className="text-lg">
                                            Request to Volunteer
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default EventDetails
