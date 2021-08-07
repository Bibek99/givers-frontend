import React, { useEffect } from 'react';
import LoginForm from '../components/forms/LoginForm';
import SecNav from '../components/navs/SecNav';
import FormPageImg from '../components/sections/FormPageImg';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { userCreateClear } from '../actions/userActions';

const LoginPage = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, isAuthenticated, error, userInfo = false } = userLogin;
    const active = userInfo ? userInfo.active : false;

    const history = useHistory();
    const dispatch = useDispatch();

    const [btnClicked, setBtnClicked] = useState(false);

    // for user login redirects
    if (userLogin) {
        const { isAuthenticated, userInfo } = userLogin;
        if (userInfo) {
            const { volunteer, organization, active, id, verify } = userInfo;

            if (isAuthenticated) {
                if (active) {
                    if (verify) {
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
                    } else {
                        history.push('/account/verification/wait');
                    }
                } else {
                    history.push(`/otp/activation/${id}`);
                }
            }
        }
    }

    // manages the user logging loading, error, success state
    useEffect(() => {
        let toastsId = {};
        dispatch(userCreateClear());

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
            }
        }
    }, [loading, error, isAuthenticated, btnClicked, active, dispatch]);

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
