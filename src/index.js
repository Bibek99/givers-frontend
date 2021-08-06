import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

/*
 * * ReactDOM.render() , render is the functio to render HTML from JSX components to a html file
 */
ReactDOM.render(
    /*
     * * Main app is wrapped with the provider with a prop of store,
     * * this enables use of redux store in the application
     */
    <Provider store={store}>
        <App />
    </Provider>,
    /*
     * * React gets an index page content with an id of 'root' and inserts all the
     * * HTML content from the JSX components
     */
    document.getElementById('root')
);
