import React from 'react';
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/outline';

const PersonalInfo = ({
    register,
    errors,
    isValid,
    handleSubmit,
    getValues,
    trigger,
}) => {
    return (
        <div className="flex flex-col max-w-screen-sm mt-20 mx-auto">
            <div>
                <div className="flex flex-col space-y-8 px-8 mx-auto">
                    <div>
                        <h1 className="text-3xl font-semibold flex text-center justify-center">
                            Tell Us About Yourself
                        </h1>
                    </div>
                    <div>
                        <label htmlFor="fullName" className="mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                className={`mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.fullName
                                        ? 'focus:ring-red-500'
                                        : 'focus:ring-green-500'
                                }`}
                                type="name"
                                name="fullName"
                                placeholder="Enter your full name"
                                {...register('fullName', {
                                    required: 'Please enter your full name',
                                    pattern: {
                                        value: /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
                                        message: 'Please enter your full name',
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger('fullName');
                                }}
                            />
                            {errors.fullName ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>

                        {errors.fullName && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.fullName.message}
                            </div>
                        )}
                    </div>
                    <div>
                        <h1 className="mb-2">
                            Gender <span className="text-red-500">*</span>
                        </h1>
                        <div className="relative flex">
                            <div className="mr-12 space-x-4">
                                <input type="checkbox" />
                                <label htmlFor="male" className="text-lg">
                                    Male
                                </label>
                            </div>
                            <div className="mr-12 space-x-4">
                                <input type="checkbox" />
                                <label htmlFor="female" className="text-lg">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="mb-2">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                className={`mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.phone
                                        ? 'focus:ring-red-500'
                                        : 'focus:ring-green-500'
                                }`}
                                type="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                {...register('phone', {
                                    required: 'Please enter your phone number',
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message:
                                            'Please enter valid phone number',
                                    },
                                    minLength: {
                                        value: 9,
                                        message:
                                            'Phone numbers are at least 9 digit long',
                                    },
                                    maxLength: {
                                        value: 10,
                                        message:
                                            'Phone numbers are not more than 10 digit long',
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger('phone');
                                }}
                            />
                            {errors.phone ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>

                        {errors.phone && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.phone.message}
                            </div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="address" className="mb-2">
                            Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                className={`mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.address
                                        ? 'focus:ring-red-500'
                                        : 'focus:ring-green-500'
                                }`}
                                type="address"
                                name="address"
                                placeholder="Enter your address"
                                {...register('address', {
                                    required: 'Please enter your address',
                                })}
                                onKeyUp={() => {
                                    trigger('address');
                                }}
                            />
                            {errors.address ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>

                        {errors.address && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.address.message}
                            </div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="bio" className="mb-2">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <textarea
                                className={`mt-2 px-6 py-2 h-36 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.bio
                                        ? 'focus:ring-red-500'
                                        : 'focus:ring-green-500'
                                }`}
                                type="bio"
                                name="bio"
                                placeholder="Tell us about yourself"
                                {...register('bio', {
                                    required: 'Please tell us about yourself',
                                })}
                                onKeyUp={() => {
                                    trigger('bio');
                                }}
                            />
                            {errors.bio ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>

                        {errors.bio && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.bio.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
