import axios from 'axios';
import { BASE_URL } from '../constants/baseURL';
import {
    ORGEVENT_LOAD_REQUEST,
    ORGEVENT_LOAD_SUCCESS,
    ORGEVENT_LOAD_FAIL,
} from '../constants/orgEventConstatns';
import { authorizedJSONHeader } from '../helpers/config';

export const orgEventLoad = (id, token) => async (dispatch) => {
    try {
        dispatch({
            type: ORGEVENT_LOAD_REQUEST,
        });

        const config = authorizedJSONHeader(token);
        const orgEventLoadUrl = BASE_URL + `/api/events/user/${id}/`;
        const { data } = await axios.get(orgEventLoadUrl, config);

        dispatch({
            type: ORGEVENT_LOAD_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ORGEVENT_LOAD_FAIL,
            payload: 'Org Event Load error',
        });
    }
};
