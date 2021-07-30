import React from 'react';
import { Link, useParams } from 'react-router-dom';

const RequestsByUser = () => {
    const { id } = useParams();
    const uid = 1;
    return (
        <div className="flex flex-col bg-white rounded-lg">
            <div className="flex flex-col">
                <p className="text-center font-medium text-4xl mt-8">
                    Showing all user requests {id}
                </p>
                <div className="px-6 my-8 flex flex-col">
                    <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="group px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                            <th className="group px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>

                                            <th className="group px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>

                                            <th className="group px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>

                                            <th className="group px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>

                                            <th className="group px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4">
                                                <img
                                                    src=""
                                                    alt="avatar"
                                                    className="h-14 w-14 rounded-full border-2"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                Arpan pokharel
                                            </td>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4">
                                                <Link
                                                    to={`/org/requests/event/${id}/detail/${uid}`}
                                                    className="text-purple-500"
                                                >
                                                    View Detail
                                                </Link>
                                            </td>
                                        </tr>
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

export default RequestsByUser;
