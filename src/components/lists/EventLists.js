import React from 'react';
import Event from '../cards/Event';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEvents } from '../../actions/eventActions';
import EventLoading from '../loading/EventLoading';

const EventLists = () => {
    const { userInfo } = useSelector((state) => state.userLogin);
    const { access } = userInfo;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadEvents(access));
    }, [dispatch, access]);

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
