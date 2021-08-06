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
    EVENT_REQUEST_CLEAR,
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

export const createEventReducer = (state = {}, action) => {
    switch (action.type) {
        case EVENT_CREATE_REQUEST:
            return {
                loading: true,
                error: false,
                eventCreated: false,
            };

        case EVENT_CREATE_SUCCESS:
            return {
                loading: false,
                createdEvent: action.payload,
                error: false,
                eventCreated: true,
            };

        case EVENT_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
                eventCreated: false,
            };

        case EVENT_CREATE_CLEAR:
            return {
                loading: false,
                error: false,
                createdEvent: null,
                eventCreated: false,
            };

        default:
            return state;
    }
};

export const createEventRequestFormReducer = (state = {}, action) => {
    switch (action.type) {
        case EVENT_REQUEST_CREATE:
            return {
                requestloading: true,
                requesterror: false,
                requestFormCreated: false,
            };

        case EVENT_REQUEST_SUCCESS:
            return {
                requestloading: false,
                requesterror: false,
                requestFormCreated: true,
            };

        case EVENT_REQUEST_FAIL:
            return {
                requestloading: false,
                requesterror: action.payload,
                requestFormCreated: false,
            };

        case EVENT_REQUEST_CLEAR:
            return {
                requestloading: false,
                requesterror: false,
                requestFormCreated: false,
            };

        default:
            return state;
    }
};
