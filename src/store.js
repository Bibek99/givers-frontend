import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer } from './reducers/userReducers';
import { loadEventReducer } from './reducers/eventReducers';

// combines all the reducers
const reducer = combineReducers({
    userLogin: userLoginReducer,
    events: loadEventReducer,
});

// Get user info from the storage when we first load the page
// If no user, returns null
const userInfoFromStorage = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null;

const auth = userInfoFromStorage ? true : false;

// stores all our initial states
const initialState = {
    userLogin: {
        token: userInfoFromStorage,
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
