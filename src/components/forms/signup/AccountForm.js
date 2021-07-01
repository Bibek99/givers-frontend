import React, { useState } from 'react';
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/outline';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
// Form validation imports

const SignupForm = ({
    register,
    errors,
    isValid,
    handleSubmit,
    getValues,
    trigger,
}) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isPassword2Visible, setPassword2Visible] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col max-w-screen-md mt-20 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-8 px-8 mx-auto">
                    <div>
                        <h1 className="text-3xl font-semibold flex text-center justify-center">
                            Your Account
                        </h1>
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                className={`mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.email
                                        ? 'focus:ring-red-500'
                                        : 'focus:ring-green-500'
                                }`}
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                {...register('email', {
                                    required: 'Please enter your email',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
                                        message:
                                            'Please enter a valid email address',
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger('email');
                                }}
                            />
                            {errors.email ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>

                        {errors.email && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.email.message}
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <label htmlFor="password" className="mb-2">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <div>
                                {isPasswordVisible ? (
                                    <EyeOffIcon
                                        className="h-6 w-6 text-gray-400"
                                        onClick={() => {
                                            setPasswordVisible(false);
                                        }}
                                    />
                                ) : (
                                    <EyeIcon
                                        className="h-6 w-6 text-gray-400"
                                        onClick={() => {
                                            setPasswordVisible(true);
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                className={`px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none ${
                                    errors.password
                                        ? 'focus:ring-2 focus:ring-red-500'
                                        : 'focus:ring-2 focus:ring-green-500'
                                }`}
                                type={isPasswordVisible ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                {...register('password', {
                                    required: 'Please enter your password',
                                    minLength: {
                                        value: 8,
                                        message:
                                            'Password must be at least 8 characters',
                                    },
                                    pattern: {
                                        value: /(?=.*[0-9])/,
                                        message:
                                            'Password must contain a number',
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger('password');
                                }}
                            />
                            {errors.password ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>
                        {errors.password && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.password.message}
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <label htmlFor="password2" className="mb-2">
                                Confirm Password{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <div>
                                {isPassword2Visible ? (
                                    <EyeOffIcon
                                        className="h-6 w-6 text-gray-400"
                                        onClick={() => {
                                            setPassword2Visible(false);
                                        }}
                                    />
                                ) : (
                                    <EyeIcon
                                        className="h-6 w-6 text-gray-400"
                                        onClick={() => {
                                            setPassword2Visible(true);
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                className={`px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none ${
                                    errors.password2
                                        ? 'focus:ring-2 focus:ring-red-500'
                                        : 'focus:ring-2 focus:ring-green-500'
                                }`}
                                type={isPassword2Visible ? 'text' : 'password'}
                                name="password2"
                                placeholder="Retype your password"
                                {...register('password2', {
                                    required: 'Please enter your password',
                                    validate: (value) =>
                                        value ===
                                            getValues([
                                                'password',
                                            ]).toString() ||
                                        'Passwords do not match',
                                })}
                                onKeyUp={() => {
                                    trigger('password2');
                                }}
                            />
                            {errors.password2 ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>
                        {errors.password2 && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.password2.message}
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
