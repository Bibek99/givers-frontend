import React from "react";
import { Tab } from "@headlessui/react";
import { formatDate } from "../../../helpers/date";
import PropTypes from "prop-types";

const EventTab = ({ event }) => {
    const banner = event.banner;
    return (
        <Tab.Panel className="rounded-xl p-3 focus:outline-none">
            <ul className="flex flex-col items-center space-y-6">
                <li className="text-xl font-medium">Event Details</li>

                <li>
                    <table className="w-full text-lg">
                        <tbody>
                            <tr className="group py-2">
                                <th className="px-6 py-4">
                                    Event Name
                                </th>
                                <td className="px-6 py-4 text-gray-500">
                                    {event.name}
                                </td>
                            </tr>
                            <tr className="group py-2">
                                <th className="px-6 py-4">
                                    Location
                                </th>
                                <td className="px-6 py-4 text-gray-500">
                                    {event.location}
                                </td>
                            </tr>
                            <tr className="group py-2">
                                <th className="px-6 py-4">Occurs</th>
                                <td className="px-6 py-4 text-gray-500">
                                    {formatDate(event.start_date)} to{" "}
                                    {formatDate(event.end_date)}
                                </td>
                            </tr>
                            <tr className="group py-2">
                                <th className="px-6 py-4">
                                    Description
                                </th>
                                <td className="px-6 py-4 text-gray-500">
                                    {event.description}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li>
                    <img
                        src={banner}
                        alt="event banner"
                        className="rounded-xl mt-4"
                    />
                </li>
            </ul>
        </Tab.Panel>
    );
};

export default EventTab;

EventTab.propTypes = {
    event: PropTypes.object,
};
