import React from 'react';
import { useForm } from 'react-hook-form';
// import { useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';

const CreateRequestForm = () => {
    // const history = useHistory();
    // const { id } = useParams();
    // const { createdEvent = false } = useSelector((state) => state.createEvent);

    // if (createdEvent) {
    //     if (id !== createdEvent.id) {
    //         history.push('/org/create');
    //     }
    // } else {
    //     history.push('/org/create');
    // }

    const {
        register,
        formState: { isValid, errors },
        trigger,
        handleSubmit,
    } = useForm();

    const createRequestForm = () => {};

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
            <div className="text-lg font-medium">Event : Event name</div>
            <form
                className="space-y-16 my-8"
                onSubmit={handleSubmit(createRequestForm)}
            >
                <div className="flex flex-col space-y-6">
                    <h3 className="text-xl font-medium">Questions</h3>
                    <div className="">
                        <label htmlFor="que1" className="mb-2">
                            Que 1 <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            className={`border-2 mt-2 border-gray-200 px-6 py-2 h-32 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                errors.que1
                                    ? 'focus:ring-red-500'
                                    : 'focus:ring-green-500'
                            }`}
                            type="question"
                            name="que1"
                            placeholder="Please enter your first question"
                            {...register('que1', {
                                required: 'This question is required',
                            })}
                            onKeyUp={() => {
                                trigger('que1');
                            }}
                        />
                        {errors.que1 && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.que1.message}
                            </div>
                        )}
                    </div>
                    <div className="">
                        <label htmlFor="que2" className="mb-2">
                            Que 2
                        </label>
                        <textarea
                            className={`border-2 mt-2 border-gray-200 px-6 py-2 h-32 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                errors.que2
                                    ? 'focus:ring-red-500'
                                    : 'focus:ring-green-500'
                            }`}
                            type="question"
                            name="que2"
                            placeholder="Please enter your second question"
                            {...register('que2')}
                            onKeyUp={() => {
                                trigger('que2');
                            }}
                        />
                        {errors.que2 && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.que2.message}
                            </div>
                        )}
                    </div>
                    <div className="">
                        <label htmlFor="que3" className="mb-2">
                            Que 3
                        </label>
                        <textarea
                            className={`border-2 mt-2 border-gray-200 px-6 py-2 h-32 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                errors.que3
                                    ? 'focus:ring-red-500'
                                    : 'focus:ring-green-500'
                            }`}
                            type="question"
                            name="que3"
                            placeholder="Please enter your third question"
                            {...register('que3')}
                            onKeyUp={() => {
                                trigger('que3');
                            }}
                        />
                        {errors.que1 && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.que3.message}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col space-y-6">
                    <h3 className="text-xl font-medium">Files</h3>
                    <div>
                        <label htmlFor="file1" className="mb-2">
                            File 1
                        </label>
                        <input
                            type="title"
                            className="border-2 mt-2 border-gray-200 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2"
                            placeholder="Please enter the required file to upload"
                            {...register('file1')}
                        />
                    </div>
                    <div>
                        <label htmlFor="file2" className="mb-2">
                            File 2
                        </label>
                        <input
                            type="title"
                            className="border-2 mt-2 border-gray-200 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2"
                            placeholder="Please enter the required file to upload"
                            {...register('file2')}
                        />
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
