import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import SecNav from '../components/navs/SecNav';
import Stepper from '../components/wizard/Stepper';
import AccountForm from '../components/forms/signup/AccountForm';
import ChooseRole from '../components/forms/signup/ChooseRole';
import SocialsForm from '../components/forms/signup/SocialsForm';
import PersonalInfo from '../components/forms/signup/PersonalInfo';
import AcceptTerms from '../components/forms/signup/AcceptTerms';

import { signup } from '../actions/userActions';

const GetStartedPage = () => {
    const [formStep, setFormStep] = useState(0);
    const [selectUser, setSelectUser] = useState(true);
    const [selectOrg, setSelectOrg] = useState(false);
    const [selectFile, setSelectFile] = useState(null);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        getValues,
        setError,
        trigger,
    } = useForm();

    const handleUserRoleClick = () => {
        setSelectOrg(!selectOrg);
        setSelectUser(!selectUser);
    };

    const { loading, error, createdUserInfo, userCreated } = useSelector(
        (state) => state.userCreate
    );

    useEffect(() => {
        if (createdUserInfo && userCreated) {
            const { id } = createdUserInfo;
            history.push(`/otp/activation/${id}`);
        }

        let toastsId = {};
        if (btnClicked) {
            if (loading) {
                toast.remove(toastsId.error);
                const loadingToastId = toast.loading(
                    'Please wait while we create your account. . .'
                );
                toastsId.loading = loadingToastId;
            } else if (error) {
                toast.remove(toastsId.loading);
                const errorToastId = toast.error(`Oops, ${error}`);
                toastsId.error = errorToastId;
            } else if (userCreated) {
                toast.remove(toastsId.loading);
                const successToastId = toast.success(
                    'User Created Successfully!'
                );
                toastsId.success = successToastId;
            }
        }
    }, [
        dispatch,
        history,
        createdUserInfo,
        userCreated,
        loading,
        error,
        btnClicked,
    ]);

    const handleOrgRoleClick = () => {
        setSelectOrg(!selectOrg);
        setSelectUser(!selectUser);
    };

    const handleButtonClick = () => {
        setFormStep(formStep + 1);
    };

    const handleButtonClickBack = () => {
        if (formStep > 0) {
            setFormStep(formStep - 1);
        }
    };

    const submitForm = () => {
        setBtnClicked(true);
        const gender = getValues('gender') ? getValues('gender') : 'Male';

        let data = new FormData();
        data.append('password', getValues('password'));
        data.append('email', getValues('email'));
        data.append('full_name', getValues('full_name'));
        data.append('last_login', '');
        data.append('address', getValues('address'));
        data.append('phone', getValues('phone'));
        data.append('facebook', getValues('facebook'));
        data.append('instagram', getValues('instagram'));
        data.append('twitter', getValues('twitter'));
        data.append('website', getValues('website'));
        data.append('description', getValues('description'));
        data.append('volunteer', selectUser ? 'True' : 'False');
        data.append('organization', selectOrg ? 'True' : 'False');
        data.append('admin', 'False');
        data.append('username', getValues('username'));
        data.append('image', selectFile);
        data.append('gender', gender);
        data.append('active', 'False');
        data.append('staff', 'False');

        dispatch(signup(data));
    };

    const renderButton = () => {
        if (formStep === 4) {
            return (
                <div className="flex justify-center items-center mt-12 space-x-8">
                    <button
                        disabled={acceptTerms}
                        onClick={() => handleButtonClickBack()}
                        className=" text-purple-500 text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-100"
                    >
                        Back
                    </button>
                    <button
                        disabled={!acceptTerms}
                        onClick={() => submitForm()}
                        className="bg-purple-500 text-white text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Submit Form
                    </button>
                </div>
            );
        } else if (formStep >= 1 && formStep <= 3) {
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
        } else if (formStep === 0) {
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
                            setError={setError}
                        />
                    </section>
                )}
                {formStep === 2 && (
                    <section>
                        <PersonalInfo
                            selectOrg={selectOrg}
                            register={register}
                            errors={errors}
                            isValid={isValid}
                            handleSubmit={handleSubmit}
                            getValues={getValues}
                            trigger={trigger}
                        />
                    </section>
                )}
                {formStep === 3 && (
                    <section>
                        <SocialsForm
                            selectUser={selectUser}
                            selectOrg={selectOrg}
                            setSelectFile={setSelectFile}
                            register={register}
                            errors={errors}
                            isValid={isValid}
                            handleSubmit={handleSubmit}
                            getValues={getValues}
                            trigger={trigger}
                        />
                    </section>
                )}
                {formStep === 4 && (
                    <section>
                        <AcceptTerms
                            acceptTerms={acceptTerms}
                            setAcceptTerms={setAcceptTerms}
                        />
                    </section>
                )}
                {renderButton()}
            </div>
        </div>
    );
};

export default GetStartedPage;
