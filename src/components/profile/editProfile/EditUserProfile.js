import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    PencilIcon,
    CalendarIcon,
    HomeIcon,
    MailIcon,
    PhoneIcon,
} from '@heroicons/react/outline';
import { useForm } from 'react-hook-form';

const EditUserProfile = ({ toggleEditMode }) => {
    const [fullNameDisable, setFullNameDisable] = useState(true);

    console.log(fullNameDisable);

    const {
        register,
        handleSubmit,

        formState: { errors },
        getValues,
        trigger,
    } = useForm({
        defaultValues: {
            full_name: 'Jane Doe',
        },
    });

    // const [fullName, setfullName] = useState(['Jane Doe']);
    return (
        <div className="flex flex-col w-full border bg-white rounded-lg shadow-xl">
            <div className="flex flex-row justify-start">
                <p className="font-bold text-3xl ml-16 mt-8">Edit Profile</p>
            </div>
            <div className="flex flex-row justify-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU"
                    className="rounded-full w-40 md:w-48 lg:w-56 shadow-xl"
                />
            </div>
            <div className="flex flex-col mx-72 mt-12">
                <div className="flex flex-col mb-36">
                    <p className="font-medium text-xl"> Full Name</p>
                    <div className="flex flex-row justify-between">
                        <div>
                            <input
                                disabled={fullNameDisable}
                                className="mt-2 px-6 py-2 h-14 w-full text-lg bg-gray-50 rounded-lg border-gray-400 focus:outline-none focus:ring-2 shadow-xl"
                                type="name"
                                name="full_name"
                                {...register('full_name', {
                                    required: 'Please enter your full name',
                                    pattern: {
                                        value: /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
                                        message: 'Please enter your full name',
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger('full_name');
                                }}
                            />
                            {errors.full_name && (
                                <div className="text-red-500 text-sm mt-2">
                                    {errors.full_name.message}
                                </div>
                            )}
                        </div>
                        <button>
                            <PencilIcon
                                className="h-8 w-8"
                                onClick={() => {
                                    setFullNameDisable(!fullNameDisable);
                                }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUserProfile;
