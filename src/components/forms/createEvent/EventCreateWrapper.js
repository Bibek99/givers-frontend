import React, { Fragment, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import CreateEvent from './CreateEvent';
import CreateRequestForm from './CreateRequestForm';

const EventCreateWrapper = () => {
    const [btnClicked, setBtnClicked] = useState(false);

    const dispatch = useDispatch();

    const {
        error,
        loading,
        eventCreated = false,
        createdEvent = false,
    } = useSelector((state) => state.createEvent);

    useEffect(() => {
        let toastsId = {};
        if (btnClicked) {
            if (loading) {
                toast.remove(toastsId.error);
                const loadingToastId = toast.loading(
                    'Please wait while we create your event. . .'
                );
                toastsId.loading = loadingToastId;
            } else if (error) {
                toast.remove(toastsId.loading);
                const errorToastId = toast.error(`Oops, ${error}`);
                toastsId.error = errorToastId;
            } else if (eventCreated) {
                toast.remove(toastsId.loading);
                const successToastId = toast.success(
                    'Event Created Succesfully!'
                );
                toastsId.success = successToastId;
            }
        }
    }, [loading, error, eventCreated, btnClicked, dispatch]);

    return (
        <Fragment>
            {!eventCreated && <CreateEvent setBtnClicked={setBtnClicked} />}
            {eventCreated && <CreateRequestForm createdEvent={createdEvent} />}
        </Fragment>
    );
};

export default EventCreateWrapper;
