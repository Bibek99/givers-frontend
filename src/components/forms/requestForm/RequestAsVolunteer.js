import React, { useState } from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    applyForEventToVolunteer,
    loadRequestForm,
} from '../../../actions/requestEventActions';

const RequestAsVolunteer = () => {
    const { eId } = useParams();
    const dispatch = useDispatch();

    const [file, setFile] = useState(null);

    const {
        userInfo: { access, id },
    } = useSelector((state) => state.userLogin);

    useEffect(() => {
        dispatch(loadRequestForm(access, eId));
    }, [dispatch, access, eId]);

    const {
        loading,
        error,
        requestFormLoaded,
        requestFormData = false,
    } = useSelector((state) => state.requestForm);

    const {
        register,
        formState: { isValid, errors },
        getValues,
        trigger,
        setError,
        clearErrors,
    } = useForm();

    const handleFileChange = (e) => {
        if (!e.target.files[0]) {
            return;
        }
        setFile(e.target.files[0]);

        const name = e.target.files[0].name;
        const ext = name.substring(name.lastIndexOf('.') + 1);

        if (ext !== 'pdf') {
            setError('file_1', {
                type: 'manual',
                message: 'We only accept a pdf file',
            });
        } else {
            clearErrors('file_1');
            trigger('file_1');
        }
    };

    const handleSubmit = () => {
        const postData = new FormData();
        postData.append('ques_1', requestFormData.ques_1);
        postData.append('ques_2', requestFormData.ques_2);
        postData.append('ques_3', requestFormData.ques_3);
        postData.append('ans_1', getValues('ans_1'));
        postData.append('ans_2', getValues('ans_2'));
        postData.append('ans_3', getValues('ans_3'));
        postData.append('request_volunteer', 'True');
        postData.append('approved', 'False');
        postData.append('pending', 'True');
        postData.append('user_details', file);

        dispatch(applyForEventToVolunteer(postData, access, id, eId));
    };

    return (
        <div className="flex flex-col w-full bg-white rounded-lg mb-5">
            {loading && <h1>Loading</h1>}
            {requestFormLoaded && (
                <Fragment>
                    <div className="flex flex-col px-6 pt-6 pb-4">
                        <p className="text-center text-4xl font-medium mb-8">
                            Request Event Form
                        </p>
                        <p className="text-xl font-medium mb-6">
                            Event Name : {requestFormData.event.name}
                        </p>
                        <hr className="bg-gray-400 mb-4 px-6" />
                        {requestFormData.ques_1 && (
                            <div className="flex flex-col space-y-6 mb-6">
                                <label className="text-lg font-medium">
                                    1. {requestFormData.ques_1}{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    type="text"
                                    name="ans_1"
                                    className="border-2 mt-2 border-gray-200 px-6 py-2 h-32 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2"
                                    placeholder="Please answer the question"
                                    {...register('ans_1', {
                                        required: 'Please answer the question',
                                    })}
                                    onKeyUp={() => {
                                        trigger('ans_1');
                                    }}
                                />
                            </div>
                        )}
                        {requestFormData.ques_2 && (
                            <div className="flex flex-col space-y-6 mb-6">
                                <label
                                    htmlFor="ans_2"
                                    className="text-lg font-medium"
                                >
                                    2. {requestFormData.ques_2}{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    type="text"
                                    name="ans_2"
                                    className="border-2 mt-2 border-gray-200 px-6 py-2 h-32 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2"
                                    placeholder="Please answer the question"
                                    {...register('ans_2', {
                                        required: 'Please answer the question',
                                    })}
                                    onKeyUp={() => {
                                        trigger('ans_2');
                                    }}
                                />
                            </div>
                        )}
                        {requestFormData.ques_3 && (
                            <div className="flex flex-col space-y-6 mb-6">
                                <label
                                    htmlFor="ans_3"
                                    className="text-lg font-medium"
                                >
                                    3. {requestFormData.ques_3}{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    type="text"
                                    name="ans_3"
                                    className="border-2 mt-2 border-gray-200 px-6 py-2 h-32 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2"
                                    placeholder="Please answer the question"
                                    {...register('ans_3', {
                                        required: 'Please answer the question',
                                    })}
                                    onKeyUp={() => {
                                        trigger('ans_3');
                                    }}
                                />
                            </div>
                        )}
                        {requestFormData.file_1 && (
                            <>
                                <div className="flex flex-col space-y-4">
                                    <label className="text-lg font-medium">
                                        4. {requestFormData.file_1}{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div>
                                        <p className="text-sm text-gray-400">
                                            Please upload a pdf file
                                        </p>
                                        <input
                                            type="file"
                                            name="file_1"
                                            accept="pdf"
                                            className={`mt-2 border-2 border-gray-200 px-6 py-2 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                                errors.file_1
                                                    ? 'focus:ring-red-500 border-red-500'
                                                    : 'focus:ring-green-500'
                                            }`}
                                            placeholder="Please upload the file"
                                            {...register('file_1', {
                                                required:
                                                    'Please upload the file',
                                            })}
                                            onInput={(e) => {
                                                handleFileChange(e);
                                            }}
                                        />
                                    </div>
                                </div>

                                {errors.file_1 && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.file_1.message}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <button
                            disabled={!isValid}
                            onClick={() => handleSubmit()}
                            className=" mb-8 px-6 py-2 bg-purple-500 text-white rounded-lg disabled:cursor-not-allowed"
                        >
                            Request
                        </button>
                    </div>
                </Fragment>
            )}
        </div>
    );
};

export default RequestAsVolunteer;
