import axios from 'axios';
import { BASE_URL } from '../constants/baseURL';
import {
    EVENT_LOAD_REQUEST,
    EVENT_LOAD_SUCCESS,
    EVENT_LOAD_FAIL,
    EVENT_CREATE_SUCCESS,
    EVENT_CREATE_REQUEST,
    EVENT_CREATE_FAIL,
    EVENT_CREATE_CLEAR,
    EVENT_REQUEST_CREATE,
    EVENT_REQUEST_SUCCESS,
    EVENT_REQUEST_FAIL,
} from '../constants/eventConstants';
import {
    authorizedJSONHeader,
    authorizedMultiPartHeader,
} from '../helpers/config';

export const loadEvents = (token) => async (dispatch) => {
    try {
        dispatch({
            type: EVENT_LOAD_REQUEST,
        });

        const config = authorizedJSONHeader(token);

        const loadEventUrl = BASE_URL + '/api/events/';

        const { data } = await axios.get(loadEventUrl, config);

        dispatch({
            type: EVENT_LOAD_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: EVENT_LOAD_FAIL,
            payload:
                error.response && error.response.message
                    ? error.response.message
                    : error.message || 'Event Load Error',
        });
    }
};

export const createAnEvent = (postData, token) => async (dispatch) => {
    try {
        dispatch({
            type: EVENT_CREATE_REQUEST,
        });

        const config = authorizedMultiPartHeader(token);

        const createEventUrl = BASE_URL + '/api/events/register/';

        const { data } = await axios.post(createEventUrl, postData, config);

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

export const eventCreateClear = () => async (dispatch) => {
    dispatch({
        type: EVENT_CREATE_CLEAR,
    });
};

export const eventRequestCreate = (postData, token) => async (dispatch) => {
    try {
        dispatch({
            type: EVENT_REQUEST_CREATE,
        });

        const config = authorizedJSONHeader(token);

        const createEventRequestUrl = BASE_URL + '/api/request/form/';

        const { data } = await axios.post(
            createEventRequestUrl,
            postData,
            config
        );

        dispatch({
            type: EVENT_REQUEST_SUCCESS,
            payload: data,
        });

        dispatch({
            type: EVENT_CREATE_CLEAR,
        });
    } catch (error) {
        dispatch({
            type: EVENT_REQUEST_FAIL,
            payload: 'Event Request Form Create Error',
        });
    }
};
