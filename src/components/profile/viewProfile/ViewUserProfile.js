import React from "react";
import {
    PencilIcon,
    CalendarIcon,
    HomeIcon,
    MailIcon,
    PhoneIcon,
} from "@heroicons/react/outline";

const ViewUserProfile = ({toggleEditMode}) => {
    return (
        <div className="flex divide-y-2 flex-col w-full border bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row justify-around mx-8 lg:mx-12 my-8 lg:my-12">
                <div className="flex-shrink-0 flex flex-row justify-center ">
                    <img
                        alt="Profile"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU"
                        className="rounded-full w-40 md:w-48 lg:w-56 shadow-xl"
                    />
                </div>
                <div className="flex flex-col-reverse md:flex-col">
                    <div className="flex flex-row justify-center mt-8 md:mt-0 md:justify-end">
                        <div className="flex flex-row justify-center w-36 bg-blue-100 px-2 py-2 text-blue-600 rounded-lg shadow ">
                            <PencilIcon className="h-4 lg:h-5 w-5 lg:w-6 mr-1 lg:mr-2 mt-1" />
                            <button
                                onClick={toggleEditMode}
                                className="text-base lg:text-lg"
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>
                    <div className="md:ml-10 md:mr-20">
                        <div className="flex flex-row justify-center md:justify-start mt-4 md:mt-0 mb-4 text-3xl font-semibold">
                            Jane Doe
                        </div>
                        <div className="text-xm lg:text-lg md:text-base break-words text-gray-500">
                            I am a computer engineering student. I like to help
                            people and make them happy. I often volunteer for
                            the noble cause.
                        </div>
                    </div>
                </div>
            </div>
            <ul className="flex flex-col justify-around space-y-6 font-semibold mx-8 md:mx-16 py-8">
                <li className="inline-flex">
                    <CalendarIcon className=" text-purple-600 h-12 w-10 mr-2" />
                    <ul>
                        <li className="">Date of birth</li>
                        <li className="font-normal">31st December, 1992</li>
                    </ul>
                </li>
                <li className="inline-flex">
                    <HomeIcon className=" text-purple-600 h-12 w-10 mr-2" />
                    <ul>
                        <li className="">Address</li>
                        <li className="font-normal">Kathmandu, Nepal</li>
                    </ul>
                </li>
                <li className="inline-flex">
                    <MailIcon className=" text-purple-600 h-12 w-10 mr-2" />
                    <ul>
                        <li className="">Email</li>
                        <li className="font-normal">janedoe@example.com</li>
                    </ul>
                </li>
                <li className="inline-flex">
                    <PhoneIcon className=" text-purple-600 h-12 w-10 mr-2" />
                    <ul>
                        <li className="">Phone</li>
                        <li className="font-normal">+977 9876543210</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default ViewUserProfile;
