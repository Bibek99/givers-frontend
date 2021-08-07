import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../constants/baseURL';
import { authorizedJSONHeader } from '../../helpers/config';
import TableRowUserRequest from './table/TableRowUserRequest';

const RequestListAll = () => {
    const [requestsList, setRequestsList] = useState();

    const {
        userInfo: { access },
    } = useSelector((state) => state.userLogin);

    const getAllRequests = useCallback(async () => {
        const config = authorizedJSONHeader(access);
        const getAllRequestsUrl = BASE_URL + '/api/verification/alluser/';

        const { data } = await axios.get(getAllRequestsUrl, config);
        setRequestsList(data);
    }, [access]);

    useEffect(() => {
        getAllRequests();
    }, [getAllRequests]);

    console.log(requestsList);

    return (
        <div className="bg-white rounded-lg">
            {requestsList && requestsList.length !== 0 ? (
                <div className="flex flex-col">
                    <p className="text-center font-medium text-3xl my-8">
                        Showing all User requests
                    </p>

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
                                                                <TableRowUserRequest
                                                                    request={
                                                                        request
                                                                    }
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
            ) : (
                <div className="text-xl text-center font-medium py-10">
                    No request to show for now.
                </div>
            )}
        </div>
    );
};

export default RequestListAll;
