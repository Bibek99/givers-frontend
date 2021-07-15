import React, { useEffect } from 'react';
import LoginForm from '../components/forms/LoginForm';
import SecNav from '../components/navs/SecNav';
import FormPageImg from '../components/sections/FormPageImg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMemo } from 'react';

const LoginPage = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, isAuthenticated } = userLogin;
    const history = useHistory();

    const [btnClicked, setBtnClicked] = useState(false);

    // for user login redirects
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

    let toastsId = useMemo(() => {}, []);

    // manages the user logging loading, error, success state
    useEffect(() => {
        if (btnClicked) {
            if (loading) {
                toast.remove(toastsId.error);
                const loadingToastId = toast.loading(
                    'Please wait while we log you in. . .'
                );
                toastsId.loading = loadingToastId;
            } else if (error) {
                toast.remove(toastsId.loading);
                const errorToastId = toast.error(`Oops, ${error}`);
                toastsId.error = errorToastId;
            } else if (isAuthenticated) {
                toast.remove(toastsId.loading);
                const successToastId = toast.success('Successfully logged In');
                toastsId.success = successToastId;
            } else if (!loading) {
                toast.remove(toastsId.loading);
            }
        }
    }, [loading, error, isAuthenticated, btnClicked, toastsId]);

    return (
        <>
            <SecNav />
            <div className="lg:max-w-screen-xl mx-auto flex justify-between">
                <FormPageImg />
                <LoginForm setBtnClicked={setBtnClicked} />
            </div>
        </>
    );
};

export default LoginPage;
