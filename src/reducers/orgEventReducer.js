import {
    ORGEVENT_LOAD_REQUEST,
    ORGEVENT_LOAD_SUCCESS,
    ORGEVENT_LOAD_FAIL,
} from '../constants/orgEventConstatns';

export const orgEventLoadReducer = (state = {}, action) => {
    switch (action.type) {
        case ORGEVENT_LOAD_REQUEST:
            return {
                loading: true,
                error: false,
                eventList: [],
            };

        case ORGEVENT_LOAD_SUCCESS:
            return {
                loading: false,
                error: false,
                eventList: action.payload,
            };

        case ORGEVENT_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload,
                eventList: [],
            };

        default:
            return state;
    }
};
