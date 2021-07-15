import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import SecNav from '../components/navs/SecNav';
import FormPageImg from '../components/sections/FormPageImg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const userLogin = useSelector((state) => state.userLogin);

    const history = useHistory();

    if (userLogin) {
        const { isAuthenticated, userInfo } = userLogin;
        if (userInfo) {
            const { volunteer, organization } = userInfo;

            if (isAuthenticated) {
                if (volunteer) {
                    history.push({
                        pathname: '/user',
                        state: { eventLoad: true },
                    });
                }
                if (organization) {
                    history.push({
                        pathname: '/org',
                        state: { eventLoad: true },
                    });
                }
            }
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
