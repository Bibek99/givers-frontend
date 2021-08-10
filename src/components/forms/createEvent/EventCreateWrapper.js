import React, { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import CreateEvent from "./CreateEvent";
import CreateRequestForm from "./CreateRequestForm";

const EventCreateWrapper = () => {
    const [createEventBtnClicked, setcreateEventBtnClicked] =
        useState(false);
    const [
        createEventRequestBtnClicked,
        setcreateEventRequestBtnClicked,
    ] = useState(false);

    const dispatch = useDispatch();

    const {
        error,
        loading,
        eventCreated = false,
        createdEvent = false,
    } = useSelector((state) => state.createEvent);

    const {
        requesterror,
        requestloading,
        requestFormCreated = false,
    } = useSelector((state) => state.createEventRequestFormReducer);

    useEffect(() => {
        const toastsId = {};
        if (createEventBtnClicked) {
            if (loading) {
                toast.remove(toastsId.error);
                const loadingToastId = toast.loading(
                    "Please wait while we create your event. . ."
                );
                toastsId.loading = loadingToastId;
            } else if (error) {
                toast.remove(toastsId.loading);
                const errorToastId = toast.error(`Oops, ${error}`);
                toastsId.error = errorToastId;
            } else if (eventCreated) {
                toast.remove(toastsId.loading);
                const successToastId = toast.success(
                    "Event Created Succesfully!"
                );
                toastsId.success = successToastId;
            }
        }
        if (createEventRequestBtnClicked) {
            if (requestloading) {
                toast.remove(toastsId.error);
                const loadingToastId = toast.loading(
                    "Please wait while we create request form your event. . ."
                );
                toastsId.loading = loadingToastId;
            } else if (requesterror) {
                toast.remove(toastsId.loading);
                const errorToastId = toast.error(`Oops, ${error}`);
                toastsId.error = errorToastId;
            } else if (requestFormCreated) {
                toast.remove(toastsId.loading);
                const successToastId = toast.success(
                    "Event Request Form Created Succesfully!"
                );
                toastsId.success = successToastId;
            }
        }
    }, [
        loading,
        error,
        eventCreated,
        createEventBtnClicked,
        requesterror,
        requestloading,
        createEventRequestBtnClicked,
        requestFormCreated,
        dispatch,
    ]);

    return (
        <Fragment>
            {!eventCreated && (
                <CreateEvent
                    setcreateEventBtnClicked={
                        setcreateEventBtnClicked
                    }
                />
            )}
            {eventCreated && (
                <CreateRequestForm
                    createdEvent={createdEvent}
                    setcreateEventRequestBtnClicked={
                        setcreateEventRequestBtnClicked
                    }
                />
            )}
        </Fragment>
    );
};

export default EventCreateWrapper;
