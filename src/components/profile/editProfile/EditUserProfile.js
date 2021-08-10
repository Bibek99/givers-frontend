import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./input";
import InputLink from "./inputLink";
import ImageInput from "./ImageInput";
import { ReactComponent as FacebookLogo } from "../../../assets/Socials/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/Socials/instagram.svg";
import { ReactComponent as TwitterLogo } from "../../../assets/Socials/twitter.svg";
import { updateProfile } from "../updateProfile";
import PropTypes from "prop-types";

const EditUserProfile = ({
    user,
    setUser,
    toggleEditMode,
    access,
    id,
}) => {
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [isError, setError] = useState(false);
    const [imageFile, setImageFile] = useState();
    const [inputValues, setInputValues] = useState({
        full_name: user.full_name,
        address: user.address,
        phone: user.phone,
        description: user.description,
        facebook: user.facebook,
        instagram: user.instagram,
        twitter: user.twitter,
    });

    const {
        register,
        setFocus,
        formState: { errors },
        trigger,
        getValues,
    } = useForm({
        defaultValues: {
            full_name: user.full_name,
            email: user.email,
            description: user.description,
            phone: user.phone,
            dob: "2000-01-01",
            address: user.address,
            facebook: user.facebook,
            twitter: user.twitter,
            instagram: user.instagram,
        },
    });

    const registerOptions = {
        full_name: {
            required: "Please enter your full name",
            pattern: {
                value: /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
                message: "Please enter your full name",
            },
        },
        description: {
            required: "Please add your bio",
        },
        email: {
            required: "Please enter your email",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
            },
        },
        phone: {
            required: "Please enter your phone number",
            pattern: {
                value: /^[0-9]+$/,
                message: "Please enter valid phone number",
            },
            minLength: {
                value: 9,
                message: "Phone numbers are at least 9 digit long",
            },
            maxLength: {
                value: 10,
                message:
                    "Phone numbers are not more than 10 digit long",
            },
        },
        dob: {
            required: "Please enter your Date of birth",
        },
        address: {
            required: "Please enter your address",
        },
        url: {
            pattern: {
                value: /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi,
                message: "Please enter a valid URL",
            },
        },
    };

    const postData = new FormData();
    console.log(isLoading);
    console.log(isSuccess);
    console.log(isError);
    const handleUpdateProfile = () => {
        postData.append("full_name", inputValues["full_name"]);
        postData.append("address", inputValues["address"]);
        postData.append("phone", inputValues["phone"]);
        postData.append("facebook", inputValues["facebook"]);
        postData.append("instagram", inputValues["instagram"]);
        postData.append("twitter", inputValues["twitter"]);
        postData.append("description", inputValues["description"]);
        postData.append(
            "images",
            imageFile ? imageFile : user.images
        );
        for (const value of postData.values()) {
            console.log("value:", value);
        }
        updateProfile(
            setUser,
            setLoading,
            setSuccess,
            setError,
            access,
            id,
            postData
        );
    };

    return (
        <div className="px-6 md:px-8 flex flex-col w-full border bg-white rounded-lg shadow-xl">
            <div className="flex flex-row justify-center w-full my-10">
                <p className="font-medium text-3xl">Edit Profile</p>
            </div>
            <ImageInput
                src={user.images}
                image={setImageFile}
                imageFile={imageFile}
            />
            <div className="flex flex-col items-center my-4 md:mt-8 lg:mt-12 ">
                <div className="flex flex-row w-full justify-center mb-4">
                    <div className=" w-128 md:w-176 lg:w-192 flex flex-col">
                        <p className="font-medium text-base lg:text-lg">
                            {" "}
                            {user.volunteer
                                ? "Full Name"
                                : "Organization Name"}
                        </p>
                        <Input
                            className=""
                            register={register}
                            setFocus={setFocus}
                            errors={errors.full_name}
                            trigger={trigger}
                            inputRef="full_name"
                            isMultiline={false}
                            registerOptions={
                                registerOptions.full_name
                            }
                            getValues={getValues}
                            inputValues={inputValues}
                            setInputValues={setInputValues}
                        />
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center mb-4">
                    <div className="flex-shrink w-128 md:w-176 lg:w-192 flex flex-col">
                        <p className="font-medium text-base md:text-lg lg:text-lg">
                            {" "}
                            Description
                        </p>
                        <Input
                            className=""
                            register={register}
                            setFocus={setFocus}
                            errors={errors.description}
                            trigger={trigger}
                            isMultiline={true}
                            inputRef="description"
                            registerOptions={
                                registerOptions.description
                            }
                            getValues={getValues}
                            inputValues={inputValues}
                            setInputValues={setInputValues}
                        />
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center mb-4">
                    <div className=" w-128 md:w-176 lg:w-192 flex flex-col">
                        <p className="font-medium text-base lg:text-lg">
                            {" "}
                            Email
                        </p>
                        <Input
                            className=""
                            register={register}
                            setFocus={setFocus}
                            errors={errors.email}
                            trigger={trigger}
                            registerOptions={registerOptions.email}
                            isMultiline={false}
                            inputRef="email"
                            getValues={getValues}
                            inputValues={inputValues}
                            setInputValues={setInputValues}
                        />
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center">
                    <div className="w-128 md:w-176 lg:w-192 flex flex-col md:flex-row md:justify-between">
                        <div className="md:mr-8 mb-4  md:w-1/2 flex flex-col">
                            <p className="font-medium text-base lg:text-lg">
                                {" "}
                                Phone
                            </p>
                            <Input
                                className=""
                                register={register}
                                setFocus={setFocus}
                                errors={errors.phone}
                                trigger={trigger}
                                registerOptions={
                                    registerOptions.phone
                                }
                                isMultiline={false}
                                inputRef="phone"
                                getValues={getValues}
                                inputValues={inputValues}
                                setInputValues={setInputValues}
                            />
                        </div>
                        <div className="w-full mb-4 md:w-1/2 flex flex-col">
                            <p className="font-medium text-base lg:text-lg">
                                {" "}
                                Date of birth
                            </p>
                            <Input
                                className=""
                                type="date"
                                register={register}
                                setFocus={setFocus}
                                errors={errors.dob}
                                trigger={trigger}
                                registerOptions={registerOptions.dob}
                                isMultiline={false}
                                inputRef="dob"
                                getValues={getValues}
                                inputValues={inputValues}
                                setInputValues={setInputValues}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center mb-4">
                    <div className=" w-128 md:w-176 lg:w-192 flex flex-col">
                        <p className="font-medium text-base lg:text-lg">
                            {" "}
                            Address
                        </p>
                        <Input
                            className=""
                            register={register}
                            setFocus={setFocus}
                            errors={errors.address}
                            trigger={trigger}
                            registerOptions={registerOptions.address}
                            isMultiline={false}
                            inputRef="address"
                            getValues={getValues}
                            inputValues={inputValues}
                            setInputValues={setInputValues}
                        />
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center mb-4">
                    <div className=" w-128 md:w-176 lg:w-192 flex flex-col ">
                        <p className="font-medium text-base lg:text-lg mb-2">
                            {" "}
                            Socials
                        </p>
                        {user.facebook && (
                            <div className="flex items-center mb-4">
                                <FacebookLogo className="h-10 w-10" />
                                <div className="w-full md:w-2/3 ml-4">
                                    <InputLink
                                        register={register}
                                        setFocus={setFocus}
                                        getValues={getValues}
                                        errors={errors.facebook}
                                        trigger={trigger}
                                        registerOptions={
                                            registerOptions.url
                                        }
                                        inputRef="facebook"
                                        inputValues={inputValues}
                                        setInputValues={
                                            setInputValues
                                        }
                                    />
                                </div>
                            </div>
                        )}
                        {user.instagram && (
                            <div className="flex items-center mb-4">
                                <InstagramLogo className="h-10 w-10" />
                                <div className="w-full md:w-2/3 ml-4">
                                    <InputLink
                                        register={register}
                                        setFocus={setFocus}
                                        getValues={getValues}
                                        errors={errors.instagram}
                                        trigger={trigger}
                                        registerOptions={
                                            registerOptions.url
                                        }
                                        inputRef="instagram"
                                        inputValues={inputValues}
                                        setInputValues={
                                            setInputValues
                                        }
                                    />
                                </div>
                            </div>
                        )}
                        {user.twitter && (
                            <div className="flex items-center mb-4">
                                <TwitterLogo className="h-10 w-10" />
                                <div className="w-full md:w-2/3 ml-4">
                                    <InputLink
                                        register={register}
                                        setFocus={setFocus}
                                        getValues={getValues}
                                        errors={errors.twitter}
                                        trigger={trigger}
                                        registerOptions={
                                            registerOptions.url
                                        }
                                        inputRef="twitter"
                                        inputValues={inputValues}
                                        setInputValues={
                                            setInputValues
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center mt-12 mb-16">
                <button
                    className="flex flex-row justify-center items-center w-36 bg-purple-500 px-2 py-2 font-medium text-base lg:text-lg text-white rounded-lg shadow hover:bg-purple-600 focus:outline-none"
                    onClick={() => handleUpdateProfile()}
                >
                    Update
                </button>
                <button
                    className="flex flex-row justify-center w-36 ring-2 ring-inset ring-red-600 bg-white px-2 py-2 font-medium text-base lg:text-lg text-red-600 rounded-lg shadow hover:bg-gray-50 focus:outline-none"
                    onClick={() => toggleEditMode(false)}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditUserProfile;

EditUserProfile.propTypes = {
    user: PropTypes.object,
    toggleEditMode: PropTypes.func,
    access: PropTypes.string,
    id: PropTypes.number,
    setUser: PropTypes.func,
};
