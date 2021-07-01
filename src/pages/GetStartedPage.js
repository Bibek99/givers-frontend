import React, { useState } from 'react';
import SecNav from '../components/navs/SecNav';
import Stepper from '../components/wizard/Stepper';
import AccountForm from '../components/forms/signup/AccountForm';
import ChooseRole from '../components/forms/signup/ChooseRole';
import { useForm } from 'react-hook-form';
import PersonalInfo from '../components/forms/signup/PersonalInfo';

const GetStartedPage = () => {
    const [formStep, setFormStep] = useState(3);

    const [selectUser, setSelectUser] = useState(true);
    const [selectOrg, setSelectOrg] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        getValues,
        trigger,
    } = useForm();

    const handleUserRoleClick = () => {
        setSelectOrg(false);
        setSelectUser(true);
    };

    const handleOrgRoleClick = () => {
        setSelectOrg(true);
        setSelectUser(false);
    };

    const handleButtonClick = () => {
        console.log('Button clicked');
        setFormStep(formStep + 1);
    };

    const handleButtonClickBack = () => {
        console.log('Button clicked');
        if (formStep !== 0) {
            setFormStep(formStep - 1);
        }
    };

    const submitForm = () => {
        console.log('form submitted');
    };

    const renderButton = () => {
        if (formStep === 4) {
            return (
                <div className="flex justify-center items-center mt-12 space-x-8">
                    <button
                        onClick={() => handleButtonClickBack()}
                        className=" text-purple-500 text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-100"
                    >
                        Back
                    </button>
                    <button
                        disabled={!isValid}
                        onClick={() => submitForm()}
                        className="bg-purple-500 text-white text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-700"
                    >
                        Submit Form
                    </button>
                </div>
            );
        } else if (formStep >= 0 && formStep <= 3) {
            return (
                <div className="flex flex-row justify-center items-center mt-12 space-x-8">
                    <button
                        onClick={() => handleButtonClickBack()}
                        className=" text-purple-500 text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-100"
                    >
                        Back
                    </button>
                    <button
                        disabled={!isValid}
                        onClick={() => handleButtonClick()}
                        className="bg-purple-500 text-white text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Continue
                    </button>
                </div>
            );
        }
        // } else if (formStep === 3) {
        //     return (
        //         <div className="flex justify-center items-center mt-12 space-x-8">
        //             <button
        //                 onClick={() => handleButtonClickBack()}
        //                 className=" text-purple-500 text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-100"
        //             >
        //                 Back
        //             </button>
        //             <button
        //                 disabled={!isValid}
        //                 onClick={() => handleButtonClick()}
        //                 className="bg-purple-500 text-white text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-700"
        //             >
        //                 Submit Form
        //             </button>
        //         </div>
        //     );
        // }
    };

    return (
        <div className="bg-white">
            <div className="min-h-screen py-4 mx-auto lg:max-w-screen-xl">
                <SecNav />
                <div className="flex flex-col justify-center items-center mt-12">
                    <h1 className="text-4xl font-semibold">
                        Welcome to Givers
                    </h1>
                    <p className="text-lg text-gray-400 mt-2">
                        Please fill the form below to get started.
                    </p>
                </div>
                <div className="mt-4">
                    <Stepper formStep={formStep} />
                </div>
                <form onSubmit={handleSubmit}>
                    {formStep === 0 && (
                        <section>
                            <ChooseRole
                                selectUser={selectUser}
                                selectOrg={selectOrg}
                                handleUserRoleClick={handleUserRoleClick}
                                handleOrgRoleClick={handleOrgRoleClick}
                            />
                        </section>
                    )}
                    {formStep === 1 && (
                        <section>
                            <AccountForm
                                register={register}
                                errors={errors}
                                isValid={isValid}
                                handleSubmit={handleSubmit}
                                getValues={getValues}
                                trigger={trigger}
                            />
                        </section>
                    )}
                    {formStep === 2 && (
                        <section>
                            <PersonalInfo
                                register={register}
                                errors={errors}
                                isValid={isValid}
                                handleSubmit={handleSubmit}
                                getValues={getValues}
                                trigger={trigger}
                            />
                        </section>
                    )}
                    {formStep === 3 && <section>Step 4</section>}
                    {formStep === 4 && <section>Step 5</section>}
                    <section>{renderButton()}</section>
                </form>
            </div>
        </div>
    );
};

export default GetStartedPage;
