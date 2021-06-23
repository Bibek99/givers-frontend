import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import SecNav from '../components/navs/SecNav';
import FormPageImg from '../components/sections/FormPageImg';

const LoginPage = () => {
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
