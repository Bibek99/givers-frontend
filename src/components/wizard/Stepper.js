import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const Stepper = ({ step1Complete, step2Complete, step3Complete }) => {
    return (
        <div>
            <div className="bg-white w-full flex flex-row justify-between items-center p-8 space-x-6 md:space-x-8">
                <div className="flex flex-col items-center relative">
                    <div
                        className={`relative border-2 font-semibold rounded-full h-8 w-8 text-center align-middle ${
                            step1Complete
                                ? 'border-green-500 bg-green-500'
                                : 'border-purple-500 text-white bg-purple-500'
                        }`}
                    >
                        {step1Complete ? (
                            <CheckIcon className="h-5 w-5 text-white absolute left-1 top-1" />
                        ) : (
                            <span className="absolute left-2.5 top-0.5">1</span>
                        )}
                    </div>
                    <p
                        className={`absolute mt-5 uppercase top-4 hidden md:block ${
                            step1Complete ? 'text-green-500' : 'text-purple-500'
                        }`}
                    >
                        Role
                    </p>
                </div>
                <div
                    className={`w-full border-2 ${
                        step1Complete ? 'border-green-300' : 'border-purple-300'
                    }`}
                ></div>
                <div className="flex flex-col items-center relative">
                    <div
                        className={`relative border-2 font-semibold rounded-full h-8 w-8 text-center align-middle ${
                            step2Complete
                                ? 'border-green-500 bg-green-500'
                                : 'border-purple-500 text-white bg-purple-500'
                        }`}
                    >
                        {step2Complete ? (
                            <CheckIcon className="h-5 w-5 text-white absolute left-1 top-1" />
                        ) : (
                            <span className="absolute left-2.5 top-0.5">2</span>
                        )}
                    </div>
                    <p
                        className={`absolute mt-5 uppercase top-4 hidden md:block ${
                            step2Complete ? 'text-green-500' : 'text-purple-500'
                        }`}
                    >
                        Account
                    </p>
                </div>
                <div className="w-full border-2 border-purple-300"></div>
                <div className="flex flex-col items-center relative">
                    <div
                        className={`relative border-2 font-semibold rounded-full h-8 w-8 text-center align-middle ${
                            step3Complete
                                ? 'border-green-500 bg-green-500'
                                : 'border-purple-500 text-white bg-purple-500'
                        }`}
                    >
                        {step3Complete ? (
                            <CheckIcon className="h-5 w-5 text-white absolute left-1 top-1" />
                        ) : (
                            <span className="absolute left-2.5 top-0.5">3</span>
                        )}
                    </div>
                    <p
                        className={`absolute mt-5 uppercase top-4 hidden md:block ${
                            step3Complete ? 'text-green-500' : 'text-purple-500'
                        }`}
                    >
                        Info
                    </p>
                </div>
                <div className="w-full border-2 border-purple-300"></div>
                <div className="flex flex-col items-center relative">
                    <div
                        className={`relative border-2 font-semibold rounded-full h-8 w-8 text-center align-middle ${
                            step3Complete
                                ? 'border-green-500 bg-green-500'
                                : 'border-purple-500 text-white bg-purple-500'
                        }`}
                    >
                        {step3Complete ? (
                            <CheckIcon className="h-5 w-5 text-white absolute left-1 top-1" />
                        ) : (
                            <span className="absolute left-2.5 top-0.5">4</span>
                        )}
                    </div>
                    <p
                        className={`absolute mt-5 uppercase top-4 hidden md:block ${
                            step3Complete ? 'text-green-500' : 'text-purple-500'
                        }`}
                    >
                        Socials
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Stepper;
