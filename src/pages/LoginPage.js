import React from 'react';
import SecNav from '../components/navs/SecNav';
import FormPageImg from '../components/sections/FormPageImg';

const LoginPage = () => {
    return (
        <>
            <SecNav />
            <div className="lg:max-w-screen-xl mx-auto flex justify-between">
                <FormPageImg />
            </div>
        </>
    );
};

export default LoginPage;
