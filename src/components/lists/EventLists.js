import React from 'react';
import Event from '../cards/Event';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEvents } from '../../actions/eventActions';

const EventLists = () => {
    const { userInfo } = useSelector((state) => state.userLogin);
    const { access } = userInfo;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadEvents(access));
        console.log('use effect fired');
    }, [dispatch, access]);

    const { loading, eventsList } = useSelector((state) => state.events);

    return (
        <div>
            {loading ? (
                <div>Event Loading</div>
            ) : (
                eventsList.map((event, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Event event={event} />
                        </React.Fragment>
                    );
                })
            )}
        </div>
    );
};

export default EventLists;
