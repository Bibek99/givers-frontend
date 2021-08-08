import { ArrowLeftIcon } from '@heroicons/react/outline';
import axios from 'axios';
import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/baseURL';
import { authorizedJSONHeader } from '../../helpers/config';
import RequestApproveModal from './modal/RequestApproveModal';
import RequestRejectModal from './modal/RequestRejectModal';
import RequestUserDetailTabs from './tabs/RequestUserDetailTabs';

const RequestUserDetails = () => {
    const { id } = useParams();
    const history = useHistory();

    const [requestDetail, setRequestDetail] = useState();
    const [tabList, setTabList] = useState([]);
    const [isApproveModalOpen, setApproveModalOpen] = useState(false);
    const [isRejectModalOpen, setRejectModalOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);

    function openApproveModal() {
        setApproveModalOpen(true);
    }

    function closeApproveModal() {
        setApproveModalOpen(false);
    }

    function openRejectModal() {
        setRejectModalOpen(true);
    }

    function closeRejectModal() {
        setRejectModalOpen(false);
    }

    const {
        userInfo: { access },
    } = useSelector((state) => state.userLogin);

    const getRequestDetail = useCallback(async () => {
        const config = authorizedJSONHeader(access);
        const getRequestDetailUrl = BASE_URL + `/api/showspecificuser/${id}/`;

        const { data } = await axios.get(getRequestDetailUrl, config);
        setRequestDetail(data);

        setTabList([
            data.volunteer ? 'User' : 'Organization',
            'Socials',
            'Document',
        ]);
    }, [access, id]);

    useEffect(() => {
        getRequestDetail();
    }, [getRequestDetail]);

    console.log(requestDetail);

    const approveOrReject = async (bool) => {
        try {
            setLoading(true);
            const config = authorizedJSONHeader(access);

            const approveOrRejectUrl =
                BASE_URL + `/api/verification/user/${requestDetail.id}/`;

            const postData = {
                verify: bool ? 'True' : 'False',
                reject: !bool ? 'True' : 'False',
            };

            const { data } = await axios.post(
                approveOrRejectUrl,
                postData,
                config
            );
            console.log(data);

            const { success } = data;

            setLoading(false);
            if (success) {
                history.goBack();
            }
        } catch (error) {
            console.log(error);
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
                    <>
                        {requestDetail && (
                            <RequestUserDetailTabs
                                requestDetail={requestDetail}
                                tabList={tabList}
                            />
                        )}
                    </>
                </div>

                {requestDetail && (
                    <div className="flex flex-row justify-center text-center space-x-4 mb-8 -mt-4">
                        <button
                            onClick={() => openApproveModal()}
                            className="text-lg px-6 py-2 text-white bg-purple-500 rounded-lg focus:outline-none"
                        >
                            Approve
                        </button>
                        <button
                            onClick={() => openRejectModal()}
                            className="text-lg px-6 py-2 text-red-500 bg-white border-2 border-red-500 rounded-lg focus:outline-none"
                        >
                            Reject
                        </button>
                    </div>
                )}

                <RequestApproveModal
                    loading={isLoading}
                    approve={approveOrReject}
                    closeModal={closeApproveModal}
                    isOpen={isApproveModalOpen}
                />
                <RequestRejectModal
                    loading={isLoading}
                    reject={approveOrReject}
                    closeModal={closeRejectModal}
                    isOpen={isRejectModalOpen}
                />
            </div>
        </div>
    );
};

export default RequestUserDetails;
