import React, { useState, useEffect, Fragment, useCallback } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/baseURL';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { authorizedJSONHeader } from '../../helpers/config';
import RequestByUserDetailTabs from '../tabs/RequestByUserDetailTabs';
import RequestApproveModal from '../modals/RequestApproveModal';
import RequestRejectModal from '../modals/RequestRejectModal';

const RequestByUserDetail = () => {
    const { eid, uid } = useParams();
    const history = useHistory();
    const [requestDetail, setRequestDetail] = useState();
    const [isApproveOpen, setIsApproveOpen] = useState(false);
    const [isRejectOpen, setIsRejectOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [task, setTask] = useState('')

    function openApproveModal() {
        setIsApproveOpen(true);
    }

    function closeApproveModal() {
        setIsApproveOpen(false);
    }

    function openRejectModal() {
        setIsRejectOpen(true);
    }

    function closeRejectModal() {
        setIsRejectOpen(false);
    }

    const {
        userInfo: { access },
    } = useSelector((state) => state.userLogin);

    const loadRequestDetail = useCallback(async () => {
        const config = authorizedJSONHeader(access);
        const loadRequestDetailUrl =
            BASE_URL + `/api/approval/request/${eid}/${uid}/`;

        const { data } = await axios.get(loadRequestDetailUrl, config);
        setRequestDetail(data[0]);
    }, [access, eid, uid]);

    useEffect(() => {
        loadRequestDetail();
    }, [loadRequestDetail]);

    const approveOrDecline = async (bool) => {
        setLoading(true);
        const config = authorizedJSONHeader(access);
        const approveOrDeclineUrl = BASE_URL + `/api/approval/${eid}/${uid}/`;

        const formData = {
            approved: bool ? 'True' : 'False',
            pending: 'False',
            task_assigned: task
        };

        const {
            data: { success },
        } = await axios.post(approveOrDeclineUrl, formData, config);

        if (success) {
            history.goBack();
        }
    };

    console.log(requestDetail);

    const tabList = ['Application', 'User', 'Event'];

    const renderButtons = () => {
        if (requestDetail) {
            if (requestDetail.pending) {
                return (
                    <>
                        <button
                            className="text-lg px-6 py-2 text-white bg-purple-500 rounded-lg focus:outline-none"
                            onClick={() => openApproveModal()}
                        >
                            Approve
                        </button>
                        <button
                            className="text-lg px-6 py-2 text-red-500 bg-white border-2 border-red-500 rounded-lg focus:outline-none"
                            onClick={() => openRejectModal()}
                        >
                            Reject
                        </button>
                    </>
                );
            } else if (requestDetail.approved) {
                return (
                    <>
                        <button className="text-lg px-6 py-2 font-medium text-green-700 bg-green-200 rounded-lg focus:outline-none">
                            Approved
                        </button>
                    </>
                );
            } else if (!requestDetail.approved && !requestDetail.pending) {
                return (
                    <>
                        <button className="text-lg px-6 py-2 font-medium text-red-700 bg-red-200 rounded-lg focus:outline-none">
                            Rejected
                        </button>
                    </>
                );
            }
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <button
                onClick={() => history.goBack()}
                className="inline-flex  px-8 mt-8 focus:outline-none"
            >
                <ArrowLeftIcon className="h-6 w-6" />
                <span className="ml-1">Go Back</span>
            </button>
            <div className="flex flex-col px-6 mx-auto">
                <p className="text-center font-medium text-3xl mt-8">
                    Request Detail
                </p>

                <div className="">
                    <Fragment>
                        {requestDetail && (
                            <RequestByUserDetailTabs
                                requestDetail={requestDetail}
                                tabList={tabList}
                            />
                        )}
                    </Fragment>
                </div>

                <div className="flex flex-row justify-center text-center space-x-4 mb-8 -mt-4">
                    {renderButtons()}
                </div>
                <RequestApproveModal
                    isOpen={isApproveOpen}
                    closeModal={closeApproveModal}
                    approve={approveOrDecline}
                    loading={isLoading}
                    setTask={setTask}
                />
                <RequestRejectModal
                    isOpen={isRejectOpen}
                    closeModal={closeRejectModal}
                    decline={approveOrDecline}
                    loading={isLoading}
                />
            </div>
        </div>
    );
};

export default RequestByUserDetail;
