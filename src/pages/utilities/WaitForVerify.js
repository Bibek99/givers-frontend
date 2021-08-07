import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import { ReactComponent as GiversLogo } from '../../assets/givers-logo.svg';

const WaitForVerify = () => {
    const { userInfo = false } = useSelector((state) => state.userLogin);
    const { refresh, access } = userInfo;

    const dispatch = useDispatch();

    return (
        <div className="min-h-screen min-w-screen bg-purple-300 flex flex-col justify-center text-center px-4 bg-bgPattern">
            <div className="max-w-screen-sm bg-white rounded-xl px-20 py-6 mx-auto">
                <div className="flex flex-col justify-center text-center space-y-8">
                    <GiversLogo className="mx-auto" />
                    <p className="text-lg">
                        Your account application is being reviewed by one of our
                        team members. You will be informed through email once
                        the verification process is completed.
                    </p>
                    <Link
                        to="/login"
                        onClick={() => dispatch(logout(refresh, access))}
                        className="border-2 border-purple-500 text-white text-lg font-medium px-8 py-2 rounded-lg bg-purple-500"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WaitForVerify;
