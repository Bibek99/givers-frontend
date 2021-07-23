import { BASE_URL } from '../constants/baseURL';
import {
    REQUESTFORM_EVENT_LOAD,
    REQUESTFORM_EVENT_SUCCESS,
    REQUESTFORM_EVENT_ERROR,
} from '../constants/reuestEventConstants';

export const loadRequestFormReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUESTFORM_EVENT_LOAD:
            return {
                loading: true,
                requestFormLoaded: false,
                error: false,
            };

        case REQUESTFORM_EVENT_SUCCESS:
            return {
                loading: false,
                requestFormLoaded: true,
                requestFormData: action.payload,
                error: false,
            };

        case REQUESTFORM_EVENT_ERROR:
            return {
                loading: false,
                requestFormLoaded: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
