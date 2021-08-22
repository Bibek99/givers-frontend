/*
 * * Importing Libraries
 */
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

/*
 * * Importing Custom Reducers
 */
import {
    userLoginLogoutReducer,
    userCreateReducer,
    userLoadFilterReducer,
} from "./reducers/userReducers"
import {
    createEventReducer,
    loadEventReducer,
    createEventRequestFormReducer,
} from "./reducers/eventReducers"
import {
    applyForEventToVolunteerReducer,
    loadRequestFormReducer,
} from "./reducers/requestEventReducers"
import { orgEventLoadReducer } from "./reducers/orgEventReducer"

/*
 * * Combining all the Reducer functions to a single Reducer function
 */
const reducer = combineReducers({
    userLogin: userLoginLogoutReducer,
    userCreate: userCreateReducer,
    events: loadEventReducer,
    createEvent: createEventReducer,
    createEventRequestFormReducer: createEventRequestFormReducer,
    requestForm: loadRequestFormReducer,
    applyForEvent: applyForEventToVolunteerReducer,
    orgEvent: orgEventLoadReducer,
    usersList: userLoadFilterReducer,
})

/*
 * * gets the 'userInfo' from the local storage is stored from the pervious login
 * * If 'userInfo' exist
 * * user is logged in to the application
 * * If not
 * * user is directed to the login page/screen
 */
const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null

const auth = userInfoFromStorage
    ? userInfoFromStorage.token
        ? true
        : false
    : false

/*
 * * initialState object stores all our initial state
 * * Initial States are the state of different actions,
 * * When the app loads or reloads in the browser window
 */
const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage,
        isAuthenticated: auth,
        error: false,
        loading: false,
    },
    userCreate: {
        loading: false,
        error: false,
        userCreated: false,
    },
    events: {
        eventsList: [],
    },
    createEvent: {
        error: false,
        loading: false,
        eventCreated: false,
    },
    createEventRequestFormReducer: {
        requesterror: false,
        requestloading: false,
    },
    requestForm: {
        loading: false,
        error: false,
        requestFormLoaded: false,
    },
    applyForEvent: {
        loading: false,
        error: false,
        applyForEvent: false,
    },
    orgEvent: {
        loading: false,
        error: false,
        eventsList: [],
    },
    usersList: {
        loading: false,
        users: [],
        error: false,
    },
}

/*
 * * middleware is the array of middleware(s) used in the application with redux store
 */
const middleware = [thunk]

/*
 * * store is the place where all state interaction are stored
 * * It defines the global state of our application
 */
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

/*
 * * Default export of our redux store
 */
export default store
