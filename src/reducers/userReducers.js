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
    USERS_LIST_LOAD_REQUEST,
    USERS_LIST_LOAD_SUCCESS,
    USERS_LIST_LOAD_FAIL,
    USERS_FILTER_LOAD_REQUEST,
    USERS_FILTER_LOAD_SUCCESS,
    USERS_FILTER_LOAD_FAIL,
} from "../constants/userConstants"

// Determining the changes on the App state based on the operation success or fail.
export const userLoginLogoutReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
                error: false,
                isAuthenticated: false,
            }

        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                error: false,
                isAuthenticated: true,
            }

        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
                isAuthenticated: false,
            }

        case USER_LOGOUT_REQUEST:
            return {
                loading: true,
                error: false,
            }

        case USER_LOGOUT_SUCCESS:
            return {
                loading: false,
                userInfo: null,
                error: false,
                isAuthenticated: false,
            }

        case USER_LOGOUT_FAIL:
            return {
                loading: false,
                error: "LogOut error occured",
            }

        default:
            return state
    }
}

export const userCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_CREATE_REQUEST:
            return {
                loading: true,
                userCreated: false,
                error: false,
            }

        case USER_CREATE_SUCCESS:
            return {
                loading: false,
                createdUserInfo: action.payload,
                userCreated: true,
                error: false,
            }

        case USER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

        case USER_CREATE_CLEAR:
            return {
                loading: false,
                userCreated: false,
                createdUserInfo: null,
                error: false,
            }

        default:
            return state
    }
}

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

export const userLoadFilterReducer = (state = {}, action) => {
    switch (action.type) {
        case USERS_LIST_LOAD_REQUEST:
            return {
                loading: true,
                users: [],
                error: false,
            }

        case USERS_LIST_LOAD_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: false,
            }

        case USERS_LIST_LOAD_FAIL:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }

        case USERS_FILTER_LOAD_REQUEST:
            return {
                loading: true,
                users: [],
                error: false,
            }

        case USERS_FILTER_LOAD_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: false,
            }

        case USERS_FILTER_LOAD_FAIL:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }

        default:
            return state
    }
}
