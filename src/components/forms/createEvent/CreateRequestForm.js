import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { eventRequestCreate } from '../../../actions/eventActions';

const CreateRequestForm = ({
    createdEvent,
    setcreateEventRequestBtnClicked,
}) => {
    const {
        register,
        formState: { isValid, errors },
        trigger,
        handleSubmit,
    } = useForm();

    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.userLogin);
    const { access } = userInfo;

    const createRequestForm = (data) => {
        setcreateEventRequestBtnClicked(true);
        const { ques_1, ques_2, ques_3 } = data;
        const postData = {
            ques_1,
            ques_2,
            ques_3,
            id: createdEvent.id,
        };

        dispatch(eventRequestCreate(postData, access));
    };

    return (
        <div className="flex flex-col bg-white rounded-lg px-5 py-8 space-y-8">
            <div className="text-center text-4xl font-medium">
                Create Request Form
            </div>
            <div className="text-gray-500">
                To rapidly analyze the legitimacy and the passion of volunteers
                who apply for your event, please create a personalized
                application form. Please add your questions and any file
                sections to upload files if necessary for volunteers. If you
                don't need any of these fields, please leave the field blank.
            </div>
            <div className="text-lg font-medium">
                Event : {createdEvent.name}
            </div>
            <form
                className="space-y-16 my-8"
                onSubmit={handleSubmit(createRequestForm)}
            >
                <div className="flex flex-col space-y-6">
                    <h3 className="text-xl font-medium">Questions</h3>
                    <div className="">
                        <label htmlFor="ques_1" className="mb-2">
                            Que 1 <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            className={`border-2 mt-2 border-gray-200 px-6 py-2 h-32 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                errors.ques_1
                                    ? 'focus:ring-red-500'
                                    : 'focus:ring-green-500'
                            }`}
                            type="question"
                            name="ques_1"
                            placeholder="Please enter your first question"
                            {...register('ques_1', {
                                required: 'This question is required',
                            })}
                            onKeyUp={() => {
                                trigger('ques_1');
                            }}
                        />
                        {errors.ques_1 && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.ques_1.message}
                            </div>
                        )}
                    </div>
                    <div className="">
                        <label htmlFor="ques_2" className="mb-2">
                            Que 2
                        </label>
                        <textarea
                            className={`border-2 mt-2 border-gray-200 px-6 py-2 h-32 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                errors.ques_2
                                    ? 'focus:ring-red-500'
                                    : 'focus:ring-green-500'
                            }`}
                            type="question"
                            name="ques_2"
                            placeholder="Please enter your second question"
                            {...register('ques_2')}
                            onKeyUp={() => {
                                trigger('ques_2');
                            }}
                        />
                        {errors.ques_2 && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.ques_2.message}
                            </div>
                        )}
                    </div>
                    <div className="">
                        <label htmlFor="ques_3" className="mb-2">
                            Que 3
                        </label>
                        <textarea
                            className={`border-2 mt-2 border-gray-200 px-6 py-2 h-32 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                errors.ques_3
                                    ? 'focus:ring-red-500'
                                    : 'focus:ring-green-500'
                            }`}
                            type="question"
                            name="ques_3"
                            placeholder="Please enter your third question"
                            {...register('ques_3')}
                            onKeyUp={() => {
                                trigger('ques_3');
                            }}
                        />
                        {errors.ques_3 && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.ques_3.message}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center">
                    <button
                        disabled={!isValid}
                        type="submit"
                        className="bg-purple-500 text-white mx-auto px-6 py-3 rounded-lg disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                        Create Request Form
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateRequestForm;
