import {
    EVENT_LOAD_REQUEST,
    EVENT_LOAD_SUCCESS,
    EVENT_LOAD_FAIL,
} from '../constants/eventConstants';

export const loadEventReducer = (state = { events: [] }, action) => {
    switch (action.type) {
        case EVENT_LOAD_REQUEST:
            return {
                loading: true,
                eventsList: [],
            };

        case EVENT_LOAD_SUCCESS:
            return {
                loading: false,
                eventsList: action.payload,
            };

        case EVENT_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
