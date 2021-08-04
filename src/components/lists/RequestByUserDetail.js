import React, { useState, useEffect, Fragment, useCallback } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/baseURL';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { authorizedJSONHeader } from '../../helpers/config';
import RequestByUserDetailTabs from '../tabs/RequestByUserDetailTabs';
import RequestApproveModal from '../modals.js/RequestApproveModal';
import RequestRejectModal from '../modals.js/RequestRejectModal';

const RequestByUserDetail = () => {
    const { eid, uid } = useParams();
    const history = useHistory();
    const [requestDetail, setRequestDetail] = useState();
    const [isApproveOpen, setIsApproveOpen] = useState(false);
    const [isRejectOpen, setIsRejectOpen] = useState(false);

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
        // const config = authorizedMultiPartHeader(access);
        const config = authorizedJSONHeader(access);
        const approveOrDeclineUrl = BASE_URL + `/api/approval/${eid}/${uid}/`;

        // const formData = new FormData();
        // formData.append('user_id', requestDetail.user.id);
        // formData.append('event_id', requestDetail.event.id);
        // formData.append('ques_1', requestDetail.ques_1);
        // formData.append('ques_2', requestDetail.ques_2);
        // formData.append('ques_3', requestDetail.ques_3);
        // formData.append('ans_1', requestDetail.ans_1);
        // formData.append('ans_2', requestDetail.ans_2);
        // formData.append('ans_3', requestDetail.ans_3);
        // formData.append('approved', bool ? 'True' : 'False');
        // formData.append('pending', 'False');
        // formData.append('user_details', requestDetail.user_details);
        // formData.append('request_volunteer', 'True');

        const formData = {
            // user_id: requestDetail.user.id,
            // event_id: requestDetail.event.id,
            // ques_1: requestDetail.ques_1,
            // ques_2: requestDetail.ques_2,
            // ques_3: requestDetail.ques_3,
            // ans_1: requestDetail.ans_1,
            // ans_2: requestDetail.ans_2,
            // ans_3: requestDetail.ans_3,
            approved: bool ? 'True' : 'False',
            pending: 'False',
            // user_details: requestDetail.user_details,
            // request_volunteer: 'True',
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
                    <button
                        className="text-lg px-6 py-2 text-white bg-purple-500 rounded-lg focus:outline-none"
                        // onClick={() => approveOrDecline(true)}
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
                </div>
                <RequestApproveModal
                    isOpen={isApproveOpen}
                    closeModal={closeApproveModal}
                    approve={approveOrDecline}
                />
                <RequestRejectModal
                    isOpen={isRejectOpen}
                    closeModal={closeRejectModal}
                    decline={approveOrDecline}
                />
            </div>
        </div>
    );
};

export default RequestByUserDetail;
