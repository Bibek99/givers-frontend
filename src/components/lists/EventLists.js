import React from "react";
import Event from "../cards/Event";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadEvents } from "../../actions/eventActions";
import EventLoading from "../loading/EventLoading";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const EventLists = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    let eventLoad = true;
    const { state = false } = location;
    if (state) {
        eventLoad = state.eventLoad;
    }

    const resetLocationState = () => {
        history.replace({
            ...location,
            state: false,
        });
    };

    useEffect(() => {
        window.addEventListener("beforeunload", resetLocationState);
    });

    const { userInfo } = useSelector((state) => state.userLogin);
    const { access, volunteer } = userInfo;

    const [eventsLoad] = useState(eventLoad ? true : false);

    useEffect(() => {
        if (eventsLoad) {
            dispatch(loadEvents(access));
        }
    }, [dispatch, access, eventsLoad]);

    const { loading, eventsList } = useSelector(
        (state) => state.events
    );

    return (
        <div>
            {loading &&
                [1, 2, 3].map((n) => <EventLoading key={n} />)}

            {eventsList &&
                eventsList.map((event, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Event
                                event={event}
                                volunteer={volunteer}
                            />
                        </React.Fragment>
                    );
                })}
        </div>
    );
};

export default EventLists;
