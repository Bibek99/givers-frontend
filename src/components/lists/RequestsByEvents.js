import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orgEventLoad } from '../../actions/orgEventActions';
import TableRowEvent from '../table/TableRowEvent';

const RequestsByEvents = () => {
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.userLogin);
    const { id, access } = userInfo;

    useEffect(() => {
        dispatch(orgEventLoad(id, access));
    }, [dispatch, id, access]);

    const { eventsList } = useSelector((state) => state.orgEvent);

    return (
        <div className="flex flex-col bg-white rounded-lg">
            <div className="flex flex-col">
                <p className="text-center font-medium text-3xl mt-8">
                    Showing all requests
                </p>
                <div className="px-6 my-8 flex flex-col">
                    <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Event Name
                                            </th>

                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Location
                                            </th>

                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Start Date
                                            </th>

                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                End Date
                                            </th>
                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Approved
                                            </th>
                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Reviewed
                                            </th>

                                            <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {eventsList &&
                                            eventsList.map((event, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <TableRowEvent
                                                            event={event}
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
        </div>
    );
};

export default RequestsByEvents;
