import { ArrowLeftIcon } from '@heroicons/react/outline';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/baseURL';
import { authorizedJSONHeader } from '../../helpers/config';
import TableRowUser from '../table/TableRowUser';

const RequestsByUser = () => {
    const { id } = useParams();
    const history = useHistory();
    const [requestsList, setRequestsList] = useState();

    const {
        userInfo: { access },
    } = useSelector((state) => state.userLogin);

    const loadRequests = useCallback(async () => {
        const config = authorizedJSONHeader(access);
        const loadRequestsUrl = BASE_URL + `/api/requested/${id}`;
        const { data } = await axios.get(loadRequestsUrl, config);
        setRequestsList(data);
    }, [access, id]);

    useEffect(() => {
        loadRequests();
    }, [loadRequests]);

    console.log(requestsList);

    return (
        <div className="bg-white rounded-lg">
            <button
                onClick={() => history.goBack()}
                className="inline-flex  px-8 mt-8 focus:outline-none"
            >
                <ArrowLeftIcon className="h-6 w-6" />
                <span className="ml-1">Go Back</span>
            </button>
            <div className="flex flex-col">
                <p className="text-center font-medium text-3xl my-8">
                    Showing all User requests
                </p>

                {requestsList && (
                    <p className="px-6 text-lg font-medium">
                        Event Name : {requestsList[0].event.name}
                    </p>
                )}
                <div className="px-6 my-8 flex flex-col">
                    <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>

                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Phone Number
                                            </th>

                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Address
                                            </th>

                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>

                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {requestsList &&
                                            requestsList.map(
                                                (request, index) => {
                                                    return (
                                                        <React.Fragment
                                                            key={index}
                                                        >
                                                            <TableRowUser
                                                                request={
                                                                    request
                                                                }
                                                                eventId={id}
                                                            />
                                                        </React.Fragment>
                                                    );
                                                }
                                            )}
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
