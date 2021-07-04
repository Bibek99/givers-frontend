import React from 'react';
import { ReactComponent as ErrorSVG } from '../assets/error404.svg';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
            <ErrorSVG className="mb-8 w-full" />
            <div className="space-y-4 flex flex-col items-center">
                <h1 className="text-3xl font-semibold">Page Not Found</h1>
                <p className="text-gray-400">
                    Oops, it seems like you have came through a broken link.
                </p>
                <Link
                    to="/"
                    className="px-6 py-3 text-lg rounded-lg text-white bg-purple-500"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default Page404;
