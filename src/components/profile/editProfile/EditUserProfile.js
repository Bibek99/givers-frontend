import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon, CalendarIcon, HomeIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline';

const EditUserProfile = ({ toggleEditMode }) => {
    const [fullName, setfullName] = useState(['Jane Doe']);
    return (
        <div className="flex flex-col w-full border bg-white rounded-lg shadow-xl">
            <div className="flex flex-row justify-start">
                <p className="font-bold text-3xl ml-16 mt-8">Edit Profile</p>
            </div>
            <div className="flex flex-row justify-center">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU"
                    className ="rounded-full w-40 md:w-48 lg:w-56 shadow-xl"/>
            </div>
            <div className="flex flex-col mx-72 mt-12">
                <div className="flex flex-col mb-36">
                    <p className="font-medium text-xl"> Full Name</p>
                    <input
                        className="mt-2 px-6 py-2 h-14 w-full text-lg bg-gray-50 rounded-lg border-gray-400 focus:outline-none focus:ring-2 shadow-xl"
                        type="text"
                        placeholder="Jane Doe"/>
                </div>
            </div>
        </div>
    );
};

export default EditUserProfile;