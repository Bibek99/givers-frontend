import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import SecNav from '../components/navs/SecNav';
import FormPageImg from '../components/sections/FormPageImg';
import { useDispatch, useSelector } from 'react-redux';
import { loadEvents } from '../actions/eventActions';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { isAuthenticated, volunteer, organization } = userLogin;

    if (isAuthenticated) {
        dispatch(loadEvents());

        if (volunteer) {
            return <Redirect to="/user" />;
        }
        if (organization) {
            return <Redirect to="/org" />;
        }
    }

    return (
        <>
            <SecNav />
            <div className="lg:max-w-screen-xl mx-auto flex justify-between">
                <FormPageImg />
                <LoginForm />
            </div>
        </>
    );
};

export default LoginPage;
