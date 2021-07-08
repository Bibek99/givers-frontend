import axios from 'axios';
import { BASE_URL } from '../constants/baseURL';
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
                error.response && error.response.message
                    ? error.response.message
                    : error.message || 'Event Load Error',
        });
    }
};

export const createEvent =
    ({ name, location, start_date, end_date, banner, description }) =>
    async (dispatch) => {
        try {
            dispatch({
                type: EVENT_CREATE_REQUEST,
            });

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const { data } = await axios.post(
                BASE_URL + 'api/events/register/',
                {
                    username: 'Naearp777',
                    name: name,
                    location: location,
                    start_date: start_date,
                    end_date: end_date,
                    banner: banner,
                    description: description,
                },
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
