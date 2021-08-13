import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";

/*
 * * Visualizes the form steps and the user position at, in the top of the signup form
 */
const Stepper = ({ formStep }) => {
    return (
        <div>
            <div className="bg-white w-full flex flex-row justify-between items-center p-8 space-x-6 md:space-x-8">
                <div className="flex flex-col items-center relative">
                    <div
                        className={`relative border-2 font-semibold rounded-full h-8 w-8 text-center align-middle ${
                            formStep === 0
                                ? "border-yellow-400 bg-yellow-400 text-white"
                                : formStep > 0
                                ? "border-green-500 bg-green-500"
                                : "border-purple-500 text-white bg-purple-500"
                        }`}
                    >
                        {formStep > 0 ? (
                            <CheckIcon className="h-5 w-5 text-white absolute left-1 top-1" />
                        ) : (
                            <span className="absolute left-2.5 top-0.5">
                                1
                            </span>
                        )}
                    </div>
                    <p
                        className={`absolute mt-5 uppercase top-4 hidden md:block ${
                            formStep === 0
                                ? "text-yellow-400"
                                : formStep > 0
                                ? "text-green-500"
                                : "text-purple-500"
                        }`}
                    >
                        Role
                    </p>
                </div>
                <div
                    className={`w-full border-2 ${
                        formStep > 0
                            ? "border-green-300"
                            : "border-purple-300"
                    }`}
                ></div>
                <div className="flex flex-col items-center relative">
                    <div
                        className={`relative border-2 font-semibold rounded-full h-8 w-8 text-center align-middle ${
                            formStep === 1
                                ? "border-yellow-400 bg-yellow-400 text-white"
                                : formStep > 1
                                ? "border-green-500 bg-green-500"
                                : "border-purple-500 text-white bg-purple-500"
                        }`}
                    >
                        {formStep > 1 ? (
                            <CheckIcon className="h-5 w-5 text-white absolute left-1 top-1" />
                        ) : (
                            <span className="absolute left-2.5 top-0.5">
                                2
                            </span>
                        )}
                    </div>
                    <p
                        className={`absolute mt-5 uppercase top-4 hidden md:block ${
                            formStep === 1
                                ? "text-yellow-400"
                                : formStep > 1
                                ? "text-green-500"
                                : "text-purple-500"
                        }`}
                    >
                        Account
                    </p>
                </div>
                <div
                    className={`w-full border-2 ${
                        formStep > 1
                            ? "border-green-300"
                            : "border-purple-300"
                    }`}
                ></div>
                <div className="flex flex-col items-center relative">
                    <div
                        className={`relative border-2 font-semibold rounded-full h-8 w-8 text-center align-middle ${
                            formStep === 2
                                ? "border-yellow-400 bg-yellow-400 text-white"
                                : formStep > 2
                                ? "border-green-500 bg-green-500"
                                : "border-purple-500 text-white bg-purple-500"
                        }`}
                    >
                        {formStep > 2 ? (
                            <CheckIcon className="h-5 w-5 text-white absolute left-1 top-1" />
                        ) : (
                            <span className="absolute left-2.5 top-0.5">
                                3
                            </span>
                        )}
                    </div>
                    <p
                        className={`absolute mt-5 uppercase top-4 hidden md:block ${
                            formStep === 2
                                ? "text-yellow-400"
                                : formStep > 2
                                ? "text-green-500"
                                : "text-purple-500"
                        }`}
                    >
                        Info
                    </p>
                </div>
                <div
                    className={`w-full border-2 ${
                        formStep > 2
                            ? "border-green-300"
                            : "border-purple-300"
                    }`}
                ></div>
                <div className="flex flex-col items-center relative">
                    <div
                        className={`relative border-2 font-semibold rounded-full h-8 w-8 text-center align-middle ${
                            formStep === 3
                                ? "border-yellow-400 bg-yellow-400 text-white"
                                : formStep > 3
                                ? "border-green-500 bg-green-500"
                                : "border-purple-500 text-white bg-purple-500"
                        }`}
                    >
                        {formStep > 3 ? (
                            <CheckIcon className="h-5 w-5 text-white absolute left-1 top-1" />
                        ) : (
                            <span className="absolute left-2.5 top-0.5">
                                4
                            </span>
                        )}
                    </div>
                    <p
                        className={`absolute mt-5 uppercase top-4 hidden md:block ${
                            formStep === 3
                                ? "text-yellow-400"
                                : formStep > 3
                                ? "text-green-500"
                                : "text-purple-500"
                        }`}
                    >
                        Address
                    </p>
                </div>
                <div
                    className={`w-full border-2 ${
                        formStep > 3
                            ? "border-green-300"
                            : "border-purple-300"
                    }`}
                ></div>
                <div className="flex flex-col items-center relative">
                    <div
                        className={`relative border-2 font-semibold rounded-full h-8 w-8 text-center align-middle ${
                            formStep === 4
                                ? "border-yellow-400 bg-yellow-400 text-white"
                                : formStep > 4
                                ? "border-green-500 bg-green-500"
                                : "border-purple-500 text-white bg-purple-500"
                        }`}
                    >
                        {formStep > 4 ? (
                            <CheckIcon className="h-5 w-5 text-white absolute left-1 top-1" />
                        ) : (
                            <span className="absolute left-2.5 top-0.5">
                                5
                            </span>
                        )}
                    </div>
                    <p
                        className={`absolute mt-5 uppercase top-4 hidden md:block ${
                            formStep === 4
                                ? "text-yellow-400"
                                : formStep > 4
                                ? "text-green-500"
                                : "text-purple-500"
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

Stepper.propTypes = {
    formStep: PropTypes.number.isRequired,
};
