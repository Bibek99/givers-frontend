import React from 'react';
import Event from '../cards/Event';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEvents } from '../../actions/eventActions';

const EventLists = () => {
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.userLogin);
    const { access } = userInfo;

    useEffect(() => {
        dispatch(loadEvents(access));
    }, [dispatch, access]);

    const { loading, eventsList } = useSelector((state) => state.events);

    return (
        <div>
            {loading ? (
                <div>Events Loading</div>
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
