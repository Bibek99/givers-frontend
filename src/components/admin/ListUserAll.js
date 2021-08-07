import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../constants/baseURL';
import { authorizedJSONHeader } from '../../helpers/config';
import TableRowUserList from './table/TableRowUserList';

const ListUserAll = () => {
    const [usersList, setUserList] = useState();

    const {
        userInfo: { access },
    } = useSelector((state) => state.userLogin);

    const getAllUsers = useCallback(async () => {
        const config = authorizedJSONHeader(access);
        const getAllUsersUrl = BASE_URL + '/api/showalluser/';

        const { data } = await axios.get(getAllUsersUrl, config);
        setUserList(data);
    }, [access]);

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    console.log(usersList);
    return (
        <div className="bg-white rounded-lg">
            {usersList && usersList.length !== 0 ? (
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
                                                <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Role
                                                </th>
                                                <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {usersList &&
                                                usersList.map((user, index) => {
                                                    return (
                                                        <React.Fragment
                                                            key={index}
                                                        >
                                                            <TableRowUserList
                                                                user={user}
                                                            />
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
            ) : (
                <div className="text-xl text-center font-medium py-10">
                    No Users.
                </div>
            )}
        </div>
    );
};

export default ListUserAll;
