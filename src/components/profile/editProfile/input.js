import React from 'react';
import { useState, useEffect } from 'react';

import { PencilIcon } from '@heroicons/react/outline';

const Input = ({
    className,
    isMultiline,
    inputRef,
    type,
    register,
    setFocus,
    errors,
    trigger,
    registerOptions,
}) => {
    const [inputDisabled, setInputDisabled] = useState(true);
    const handleClick = () => {
        setInputDisabled(!inputDisabled);
    };
    useEffect(() => {
        setFocus(inputRef);
    });
    return (
        <div className="flex flex-col my-2">
            <div className="flex flex-row items-center">
                {!isMultiline ? (
                    <input
                        className={`resize-none  px-6 py-2 h-14 w-full text-lg bg-white rounded-lg border-2 border-gray-200 focus:bg-gray-50 focus:outline-none focus:ring-2  ${className}`}
                        disabled={inputDisabled}
                        name={inputRef}
                        type={type}
                        {...register(inputRef, registerOptions)}
                        onKeyUp={() => {
                            trigger(inputRef);
                        }}
                        onBlur={() => {
                            setInputDisabled(true);
                        }}
                    />
                ) : (
                    <textarea
                        className={`resize-none px-6 py-2 h-auto max-h-full w-full text-lg bg-white rounded-lg border-2 border-gray-200 focus:bg-gray-50 focus:outline-none focus:ring-2  ${className}`}
                        disabled={inputDisabled}
                        rows="4"
                        maxLength="100"
                        name={inputRef}
                        {...register(inputRef, registerOptions)}
                        onKeyUp={() => {
                            trigger(inputRef);
                        }}
                        onBlur={() => {
                            setInputDisabled(true);
                        }}
                    ></textarea>
                )}
                <button
                    className={`flex-shrink-0 my-2 mx-4 h-10 w-10 rounded-full hover:ring-1 ring-purple-200 hover:ring-inset flex flex-row justify-center items-center transition duration-200 shadow-inner ${
                        inputDisabled ? 'bg-gray-50' : 'bg-purple-200'
                    }`}
                >
                    <PencilIcon
                        className="h-8/12 w-9/12 text-purple-600"
                        onClick={handleClick}
                    />
                </button>
            </div>
            {errors && (
                <div className="text-red-500 text-sm mt-1">
                    {errors.message}
                </div>
            )}
        </div>
    );
};

export default Input;
