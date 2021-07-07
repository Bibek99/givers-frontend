import React from 'react';
import { useForm } from 'react-hook-form';
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    UploadIcon,
    XIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';

const CreateEvent = () => {
    const [banner, setBanner] = useState('');
    const [isUploaded, setIsUploaded] = useState(false);

    const {
        register,
        formState: { errors },
        trigger,
    } = useForm();

    const handleImageChange = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.onload = (e) => {
                setBanner(e.target.result);
                setIsUploaded(true);
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setBanner(null);
        }
    };

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
                            className={`border-2 border-gray-200 mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
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
                            className={`border-2 border-gray-200 mt-2 px-6 py-2 h-24 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
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
                            className={`border-2 border-gray-200 mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
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
                {/* End Event Date */}

                {/* For Event Banner */}
                <div>
                    <label htmlFor="banner" className="mb-2">
                        Add Image <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 flex items-center justify-center">
                        <div className="bg-gray-50 relative flex flex-col rounded-lg w-full border-4 border-dashed border-gray-200 h-60 group justify-center items-center">
                            {isUploaded ? (
                                <>
                                    <img
                                        src={banner}
                                        alt="banner"
                                        className="object-cover py-8 md:py-0 max-h-60"
                                    />
                                    <div className="absolute right-2 top-2">
                                        <XIcon
                                            className="h-7 w-7 p-0.5 bg-gray-400 rounded-md opacity-70"
                                            onClick={() => {
                                                setBanner(null);
                                                setIsUploaded(false);
                                            }}
                                        />
                                    </div>
                                </>
                            ) : (
                                <div className="absolute flex flex-col justify-center items-center space-y-4">
                                    <UploadIcon className="h-16 w-16 text-gray-400" />
                                    <p className="text-gray-400 text-lg">
                                        Upload a banner image for your event
                                    </p>
                                </div>
                            )}
                            <input
                                type="file"
                                name="banner"
                                className="opacity-0 w-full h-full bg-gray-300"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <span className="text-gray-400">
                        Optimum Image size is: 1280 x 720 pixels
                    </span>
                </div>
                {/* End Event Banner */}

                {/* For User Volunteer toggle */}
                {/* <div className="flex flex-row space-x-6 items-center">
                    <div>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${
                                enabled ? 'bg-purple-500' : 'bg-gray-200'
                            } transition-all relative inline-flex items-center h-8 rounded-full w-14 focus:outline-none`}
                        >
                            <span
                                className={`${
                                    enabled ? 'translate-x-7' : 'translate-x-1'
                                } transition-all inline-block w-6 h-6 transform bg-white rounded-full`}
                            />
                        </Switch>
                    </div>
                    <p className="text-lg">Can user apply for Volunteers?</p>
                </div> */}
                {/* End User Volunteer toggle */}

                <div className="flex flex-row justify-center items-center">
                    <button
                        className="mx-auto bg-purple-500 py-3 px-8 text-xl text-white rounded-lg disabled:cursor-not-allowed disabled:bg-gray-400"
                        type="submit"
                    >
                        Create Event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
