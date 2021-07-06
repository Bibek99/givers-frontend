import React from 'react';
import { useForm } from 'react-hook-form';
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/outline';

const CreateEvent = () => {
    const {
        register,
        formState: { errors },
        trigger,
    } = useForm();

    return (
        <div className="flex flex-col w-full bg-white rounded-lg px-4 py-8 space-y-8">
            <div className="text-center text-4xl font-medium">Create Event</div>
            <div className="max-w-screen-sm w-full mx-auto space-y-8">
                {/* For Title  */}
                <div className="">
                    <label htmlFor="title" className="mb-2">
                        Title <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            className={`border-2 border-gray-300 mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                errors.title
                                    ? 'focus:ring-red-500'
                                    : 'focus:ring-green-500'
                            }`}
                            type="name"
                            name="title"
                            placeholder="Enter your event title"
                            {...register('title', {
                                required: 'Please enter event title',
                            })}
                            onKeyUp={() => {
                                trigger('title');
                            }}
                        />
                        {errors.title ? (
                            <div className="absolute right-3 bottom-3">
                                <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                            </div>
                        ) : (
                            <div className="absolute right-3 bottom-3">
                                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                            </div>
                        )}
                    </div>
                    {errors.title && (
                        <div className="text-red-500 text-sm mt-2">
                            {errors.title.message}
                        </div>
                    )}
                </div>
                {/* End Title */}

                {/* For Description */}
                <div className="">
                    <label htmlFor="description" className="mb-2">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <textarea
                            className={`border-2 border-gray-300 mt-2 px-6 py-2 h-24 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                errors.description
                                    ? 'focus:ring-red-500'
                                    : 'focus:ring-green-500'
                            }`}
                            type="name"
                            name="description"
                            placeholder="Enter your event description"
                            {...register('description', {
                                required: 'Please enter event description',
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
                {/* End Description */}

                {/* For Location */}
                <div className="">
                    <label htmlFor="location" className="mb-2">
                        Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            className={`border-2 border-gray-300 mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                errors.location
                                    ? 'focus:ring-red-500'
                                    : 'focus:ring-green-500'
                            }`}
                            type="name"
                            name="location"
                            placeholder="Enter your event location"
                            {...register('location', {
                                required: 'Please enter event location',
                            })}
                            onKeyUp={() => {
                                trigger('location');
                            }}
                        />
                        {errors.location ? (
                            <div className="absolute right-3 bottom-3">
                                <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                            </div>
                        ) : (
                            <div className="absolute right-3 bottom-3">
                                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                            </div>
                        )}
                    </div>
                    {errors.location && (
                        <div className="text-red-500 text-sm mt-2">
                            {errors.location.message}
                        </div>
                    )}
                </div>
                {/* End Location */}

                {/* For Event Date */}
                <div className="flex flex-row items-center">
                    {/* Start Date */}
                    <div></div>
                    {/* End Date */}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
