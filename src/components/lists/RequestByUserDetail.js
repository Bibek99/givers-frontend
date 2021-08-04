import { ArrowLeftIcon } from '@heroicons/react/outline';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/baseURL';
import { authorizedJSONHeader } from '../../helpers/config';
import RequestByUserDetailTabs from '../tabs/RequestByUserDetailTabs';

const RequestByUserDetail = () => {
    const { eid, uid } = useParams();
    const history = useHistory();
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

    const tabList = ['Application', 'User', 'Event'];

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <button
                onClick={() => history.goBack()}
                className="inline-flex text-purple-500 px-8 mt-8 focus:outline-none"
            >
                <ArrowLeftIcon className="h-6 w-6" />
                <span className="ml-1">Go Back</span>
            </button>
            <div className="flex flex-col px-6  mx-auto">
                <p className="text-center font-medium text-3xl mt-8">
                    Request Detail
                </p>

                <div className="flex flex-col">
                    <Fragment>
                        {requestDetail && (
                            <RequestByUserDetailTabs
                                requestDetail={requestDetail}
                                tabList={tabList}
                            />
                        )}
                    </Fragment>
                </div>
            </div>
        </div>
    );
};

export default RequestByUserDetail;
