import React from 'react';
import { ReactComponent as GiversLogo } from '../../assets/givers-logo.svg';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const OtpActivationPage = () => {
    const {
        register,
        formState: { errors, isValid },
        trigger,
    } = useForm();

    return (
        <div className="min-h-screen min-w-screen bg-purple-300 flex flex-col justify-center text-center px-4 bg-bgPattern">
            <div className="max-w-screen-sm bg-white rounded-xl px-20 py-6 mx-auto">
                <div className="flex flex-col justify-center text-center">
                    <GiversLogo className="mx-auto mb-12" />
                    <p className="mb-2">
                        We have sent you{' '}
                        <span className="text-lg font-medium">
                            One Time Password (OTP)
                        </span>{' '}
                        to your email.
                    </p>
                    <p className="text-purple-500 text-lg font-medium mb-6">
                        Please Enter OTP
                    </p>

                    <div className="mb-8 md:px-8">
                        <input
                            className={`text-center mt-2 px-6 py-2 h-12 w-full border-2 border-gray-300 focus:border-white bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                errors.otp
                                    ? 'focus:ring-red-500'
                                    : 'focus:ring-green-500'
                            }`}
                            type="otp"
                            name="otp"
                            placeholder="*  *  *  *  *  *"
                            {...register('otp', {
                                required: 'Please enter your OTP',
                            })}
                            onKeyUp={() => {
                                trigger('otp');
                            }}
                        />

                        {errors.otp && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.otp.message}
                            </div>
                        )}
                    </div>
                    <div className="w-full flex flex-col justify-center md:flex-row-reverse md:space-y-0 mb-12">
                        <button
                            disabled={!isValid}
                            className="mb-4 md:mb-0 border-2 border-purple-500 text-white text-lg font-medium px-8 py-2 rounded-lg bg-purple-500"
                        >
                            Verify OTP
                        </button>
                        <button className="md:mr-8 border-2 border-purple-500 text-purple-500 text-lg font-medium px-8 py-2 rounded-lg">
                            Resend OTP
                        </button>
                    </div>
                </div>

                <Link to="/" className="text-purple-500 text-center">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default OtpActivationPage;
