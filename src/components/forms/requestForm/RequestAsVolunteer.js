import React from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadRequestForm } from '../../../actions/requestEventActions';

// // access token to be passed for authorization
// const fetchRequestEvent = async (token, id) => {
//     const getRequestEventUrl = BASE_URL + `/api/requested/form/${id}`;

//     const config = authorizedJSONHeader(token);

//     const { data } = await axios.get(getRequestEventUrl, config);

//     return data;
// };

const RequestAsVolunteer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const {
        userInfo: { access },
    } = useSelector((state) => state.userLogin);

    useEffect(() => {
        dispatch(loadRequestForm(access, id));
    }, [dispatch, loadRequestForm]);

    const {
        loading,
        error,
        requestFormLoaded,
        requestFormData = false,
    } = useSelector((state) => state.requestForm);

    return (
        <div className="flex flex-col w-full bg-white rounded-lg mb-5">
            {loading && <h1>Loading</h1>}
            {requestFormLoaded && (
                <Fragment>
                    <div className="flex flex-col text-center px-6 pt-6 pb-4">
                        <p className="">Request Event Form</p>
                    </div>
                </Fragment>
            )}
            {error && <h1>Error</h1>}
        </div>
    );
};

export default RequestAsVolunteer;
