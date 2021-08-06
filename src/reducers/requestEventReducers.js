import {
    REQUESTFORM_EVENT_LOAD,
    REQUESTFORM_EVENT_SUCCESS,
    REQUESTFORM_EVENT_ERROR,
    REQUESTFORM_APPLY_REQUEST,
    REQUESTFORM_APPLY_SUCCESS,
    REQUESTFORM_APPLY_ERROR,
    REQUESTFORM_EVENT_CLEAR,
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

export const applyForEventToVolunteerReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUESTFORM_APPLY_REQUEST:
            return {
                loading: true,
                applyForEvent: false,
                error: false,
            };

        case REQUESTFORM_APPLY_SUCCESS:
            return {
                loading: false,
                applyForEvent: true,
                error: false,
            };

        case REQUESTFORM_APPLY_ERROR:
            return {
                loading: false,
                applyForEvent: false,
                error: action.payload,
            };

        case REQUESTFORM_EVENT_CLEAR:
            return {
                loading: false,
                error: false,
                applyForEvent: false,
            };

        default:
            return state;
    }
};
