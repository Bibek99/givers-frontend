import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    USER_CREATE_CLEAR,
} from '../constants/userConstants';

// Determining the changes on the App state based on the operation success or fail.
export const userLoginLogoutReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
                error: false,
                isAuthenticated: false,
            };

        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                error: false,
                isAuthenticated: true,
            };

        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
                isAuthenticated: false,
            };

        case USER_LOGOUT_REQUEST:
            return {
                loading: true,
                error: false,
            };

        case USER_LOGOUT_SUCCESS:
            return {
                loading: false,
                userInfo: null,
                error: false,
                isAuthenticated: false,
            };

        case USER_LOGOUT_FAIL:
            return {
                loading: false,
                error: 'LogOut error occured',
            };

        default:
            return state;
    }
};

export const userCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_CREATE_REQUEST:
            return {
                loading: true,
            };

        case USER_CREATE_SUCCESS:
            return {
                loading: false,
                createdUserInfo: action.payload,
                userCreated: true,
            };

        case USER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case USER_CREATE_CLEAR:
            return {
                loading: false,
                userCreated: null,
                createdUserInfo: null,
            };

        default:
            return state;
    }
};

// export const userLogOutReducer = (state = {}, action) => {
//     switch (action.type) {
//         case USER_LOGOUT_REQUEST:
//             return {
//                 loading: true,
//             };

//         case USER_LOGOUT_SUCCESS:
//             return {
//                 loading: false,
//             };

//         case USER_LOGOUT_FAIL:
//             return {
//                 loading: false,
//                 error: 'LogOut error occured',
//             };

//         default:
//             return state;
//     }
// };
