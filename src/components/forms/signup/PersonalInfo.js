import React from 'react';
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    ChevronDownIcon,
} from '@heroicons/react/outline';

/*
 * * Component to enter all the personal information related to the user
 * * Full name / Org name, phone number, address and so on
 */

const PersonalInfo = ({ selectOrg, register, errors, trigger }) => {
    return (
        <div className="flex flex-col max-w-screen-sm mt-20 mx-auto">
            <div className="">
                <div className="flex flex-col space-y-8 px-8 mx-auto">
                    <div className="">
                        <h1 className="text-3xl font-semibold flex text-center justify-center">
                            Tell Us About Yourself
                        </h1>
                    </div>
                    <div className="">
                        <label htmlFor="full_name" className="mb-2">
                            {selectOrg ? 'Organization Name' : 'Full Name'}{' '}
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                className={`mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.full_name
                                        ? 'focus:ring-red-500'
                                        : 'focus:ring-green-500'
                                }`}
                                type="name"
                                name="full_name"
                                placeholder={
                                    selectOrg
                                        ? 'Enter your organization name'
                                        : 'Enter your full name'
                                }
                                {...register('full_name', {
                                    required: selectOrg
                                        ? 'Please enter your organization name'
                                        : 'Please enter your full name',
                                    pattern: {
                                        value: /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
                                        message: selectOrg
                                            ? 'Please enter your organization name'
                                            : 'Please enter your full name',
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger('full_name');
                                }}
                            />
                            {errors.full_name ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>

                        {errors.full_name && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.full_name.message}
                            </div>
                        )}
                    </div>
                    {!selectOrg && (
                        <div className="">
                            <h1 className="mb-2">
                                Gender <span className="text-red-500">*</span>
                            </h1>
                            <div className="relative">
                                <select
                                    name="gender"
                                    className="appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2"
                                    {...register('gender', {
                                        required: 'Please Choose your gender',
                                    })}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="pointer-events-none absolute top-6 right-0 flex items-center px-3 text-gray-700">
                                    <ChevronDownIcon className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="">
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
                    <div className="">
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
                    <div className="">
                        <label htmlFor="description" className="mb-2">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <textarea
                                className={`mt-2 px-6 py-2 h-36 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.description
                                        ? 'focus:ring-red-500'
                                        : 'focus:ring-green-500'
                                }`}
                                type="description"
                                name="description"
                                placeholder="Tell us about yourself"
                                {...register('description', {
                                    required: 'Please tell us about yourself',
                                })}
                                onKeyUp={() => {
                                    trigger('description');
                                }}
                            />
                            {errors.description ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>

                        {errors.description && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.description.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
