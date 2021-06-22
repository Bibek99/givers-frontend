import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const SecNav = () => {
    return (
        <div className="px-4 py-4 mx-auto lg:max-w-screen-xl flex justify-between">
            <Link
                to="/"
                className="text-3xl font-medium text-center hover:text-purple-500"
            >
                Givers
            </Link>
            <Link
                to="/"
                className="flex items-center text-xl hover:text-purple-500"
            >
                <ArrowLeftIcon className="h-6 w-6 mr-4" /> Go Back
            </Link>
        </div>
    );
};

export default SecNav;
