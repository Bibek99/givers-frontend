import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import SecNav from '../components/navs/SecNav';
import FormPageImg from '../components/sections/FormPageImg';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { isAuthenticated, userInfo } = userLogin;
    const { volunteer, organization } = userInfo;

    if (isAuthenticated) {
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
