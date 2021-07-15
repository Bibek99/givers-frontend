import React from 'react';
import Event from '../cards/Event';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEvents } from '../../actions/eventActions';
import EventLoading from '../loading/EventLoading';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const EventLists = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    let eventLoad = true;
    const { state = false } = location;

    if (state) {
        eventLoad = state.eventLoad;
    }

    const { userInfo } = useSelector((state) => state.userLogin);
    const { access } = userInfo;

    const [eventsLoad] = useState(eventLoad === true ? true : false);

    useEffect(() => {
        if (eventsLoad) {
            dispatch(loadEvents(access));
        }
    }, [dispatch, access, eventsLoad]);

    const { loading, eventsList } = useSelector((state) => state.events);

    return (
        <div>
            {loading && [1, 2, 3].map((n) => <EventLoading key={n} />)}

            {eventsList &&
                eventsList.map((event, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Event event={event} />
                        </React.Fragment>
                    );
                })}
        </div>
    );
};

export default EventLists;
