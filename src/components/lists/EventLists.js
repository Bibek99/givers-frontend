import React from 'react';
import Event from '../cards/Event';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadEvents } from '../../actions/eventActions';

const EventLists = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadEvents());
    });

    return (
        <div>
            <Event />
            <Event />
            <Event />
        </div>
    );
};

export default EventLists;
