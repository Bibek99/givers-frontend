import React from 'react';
import SecNav from '../components/navs/SecNav';
import FormPageImg from '../components/sections/FormPageImg';
import SignupForm from '../components/forms/SignupFrom';

const GetStartedPage = () => {
    return (
        <>
            <SecNav />
            <div className="lg:max-w-screen-xl mx-auto flex justify-between">
                <FormPageImg />
                <SignupForm />
            </div>
        </>
    );
};

export default GetStartedPage;
