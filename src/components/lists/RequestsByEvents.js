import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RequestsByEvents = () => {
    const { eventsList } = useSelector((state) => state.events);

    return (
        <div className="flex flex-col bg-white rounded-lg">
            <div className="flex flex-col">
                <p className="text-center font-medium text-4xl mt-8">
                    Showing all requests
                </p>
                <div className="px-6 mt-8 flex flex-col">
                    <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Event Name
                                            </th>

                                            <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Location
                                            </th>

                                            <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Start Date
                                            </th>

                                            <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                End Date
                                            </th>

                                            <th className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {eventsList &&
                                            eventsList.map((event, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <tr className="">
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {event.name}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {event.location}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {
                                                                    event.start_date
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {event.end_date}
                                                            </td>
                                                            <td>
                                                                <Link
                                                                    className="text-purple-500"
                                                                    to={`/org/requests/${event.id}`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </React.Fragment>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestsByEvents;
