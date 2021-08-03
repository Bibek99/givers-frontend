import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/baseURL';
import { authorizedJSONHeader } from '../../helpers/config';

const RequestByUserDetail = () => {
    const { eid, uid } = useParams();
    const [requestDetail, setRequestDetail] = useState();

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

    console.log(requestDetail);

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="flex flex-col px-6 max-w-screen-sm mx-auto">
                <p className="text-center font-medium text-3xl my-8">
                    Request Detail
                </p>
                <div className="flex flex-col my-4">
                    <Fragment>
                        {requestDetail && (
                            <>
                                <div className="mb-6">
                                    <p className="text-lg font-medium mb-2">
                                        {requestDetail.ques_1}
                                    </p>
                                    <p className="">{requestDetail.ans_1}</p>
                                    <hr className="mt-4" />
                                </div>
                                <div className="mb-6">
                                    <p className="text-lg font-medium mb-2">
                                        {requestDetail.ques_2}
                                    </p>
                                    <p className="">{requestDetail.ans_2}</p>
                                    <hr className="mt-4" />
                                </div>
                                <div className="mb-6">
                                    <p className="text-lg font-medium mb-2">
                                        {requestDetail.ques_3}
                                    </p>
                                    <p className="">{requestDetail.ans_3}</p>
                                    <hr className="mt-4" />
                                </div>
                            </>
                        )}
                    </Fragment>
                </div>
            </div>
        </div>
    );
};

export default RequestByUserDetail;
