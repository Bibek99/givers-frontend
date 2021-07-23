import axios from 'axios';
import { BASE_URL } from '../constants/baseURL';
import {
    REQUESTFORM_EVENT_LOAD,
    REQUESTFORM_EVENT_SUCCESS,
    REQUESTFORM_EVENT_ERROR,
} from '../constants/reuestEventConstants';
import { authorizedJSONHeader } from '../helpers/config';

export const loadRequestForm = (token, id) => async (dispatch) => {
    try {
        dispatch({
            type: REQUESTFORM_EVENT_LOAD,
        });

        const config = authorizedJSONHeader(token);
        const getRequestEventUrl = BASE_URL + `/api/requested/form/${id}`;

        const { data } = await axios.get(getRequestEventUrl, config);

        dispatch({
            type: REQUESTFORM_EVENT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: REQUESTFORM_EVENT_ERROR,
            payload: 'Request Form Load Error',
        });
    }
};
