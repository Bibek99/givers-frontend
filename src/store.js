import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    userLoginLogoutReducer,
    userCreateReducer,
} from './reducers/userReducers';
import { createEventReducer, loadEventReducer } from './reducers/eventReducers';

// combines all the reducers
const reducer = combineReducers({
    userLogin: userLoginLogoutReducer,
    userCreate: userCreateReducer,
    events: loadEventReducer,
    createEvent: createEventReducer,
});

// Get user info from the storage when we first load the page
// If no user, returns null
const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const auth = userInfoFromStorage
    ? userInfoFromStorage.token
        ? true
        : false
    : false;

// stores all our initial states
const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage,
        isAuthenticated: auth,
    },
    events: {
        eventsList: [],
    },
};

// list of the middilewares used in the app
const middleware = [thunk];

// our main store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// store exported
export default store;
