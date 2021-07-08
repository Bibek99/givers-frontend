import axios from 'axios';
import {
    EVENT_LOAD_REQUEST,
    EVENT_LOAD_SUCCESS,
    EVENT_LOAD_FAIL,
    EVENT_CREATE_SUCCESS,
    EVENT_CREATE_REQUEST,
    EVENT_CREATE_FAIL,
} from '../constants/eventConstants';

export const loadEvents = () => async (dispatch) => {
    try {
        dispatch({
            type: EVENT_LOAD_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.get('/api/events/', config);

        dispatch({
            type: EVENT_LOAD_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: EVENT_LOAD_FAIL,
            payload:
                error.response && error.response.events.detail
                    ? error.response.events.detail
                    : error.message,
        });
    }
};

export const createEvent = (postdata) => async (dispatch) => {
    try {
        dispatch({
            type: EVENT_CREATE_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post(
            '/api/events/register/',
            postdata,
            config
        );

        dispatch({
            type: EVENT_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: EVENT_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : 'Event Create Error',
        });
    }
};
