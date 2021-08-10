import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "./input";
import InputLink from "./inputLink";
import ImageInput from "./ImageInput";
import { GlobeIcon } from "@heroicons/react/outline";
import { ReactComponent as FacebookLogo } from "../../../assets/Socials/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/Socials/instagram.svg";
import { ReactComponent as TwitterLogo } from "../../../assets/Socials/twitter.svg";
import PropTypes from "prop-types";

const EditOrgProfile = ({ org, toggleEditMode }) => {
    // const [saveState, setSaveState] = useState(false);
    // const [cancelState, setCancelState] = useState(false);
    const {
        register,
        setFocus,
        formState: { errors },
        trigger,
        getValues,
    } = useForm({
        defaultValues: {
            name: org.full_name,
            email: org.email,
            bio: org.description,
            phone: org.phone,
            address: org.address,
            website: org.website,
            facebook: org.facebook,
            twitter: org.twitter,
            instagram: org.instagram,
        },
    });

    useEffect(() => {
        // console.log(
        //     'Make use of Save and Cancel buttons:',
        //     saveState,
        //     cancelState
        // );
    });

    const registerOptions = {
        name: {
            required: "Please enter the name",
            pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: "Please enter valid name",
            },
        },
        bio: {
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

    return (
        <div className="px-6 md:px-8 flex flex-col w-full border bg-white rounded-lg shadow-xl">
            <div className="flex flex-row justify-center md:justify-start">
                <p className="font-medium ml-4 text-2xl lg:text-3xl mt-4 lg:mt-8 mb-4 lg:mb-0">
                    Edit Profile
                </p>
            </div>
            <ImageInput src={org.images} />
            <div className="flex flex-col items-center my-4 md:mt-8 lg:mt-12 ">
                <div className="flex flex-row w-full justify-center mb-4">
                    <div className=" w-128 md:w-176 lg:w-192 flex flex-col">
                        <p className="font-medium text-base lg:text-lg">
                            {" "}
                            Name
                        </p>
                        <Input
                            className=""
                            register={register}
                            setFocus={setFocus}
                            errors={errors.name}
                            trigger={trigger}
                            inputRef="name"
                            isMultiline={false}
                            registerOptions={registerOptions.name}
                        />
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center mb-4">
                    <div className="flex-shrink w-128 md:w-176 lg:w-192 flex flex-col">
                        <p className="font-medium text-base md:text-lg lg:text-lg">
                            {" "}
                            Bio
                        </p>
                        <Input
                            className=""
                            register={register}
                            setFocus={setFocus}
                            errors={errors.bio}
                            trigger={trigger}
                            isMultiline={true}
                            inputRef="bio"
                            registerOptions={registerOptions.bio}
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
                            />
                        </div>
                        <div className="w-full mb-4 md:w-1/2 flex flex-col">
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
                                registerOptions={
                                    registerOptions.email
                                }
                                isMultiline={false}
                                inputRef="email"
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
                        />
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center mb-4">
                    <div className=" w-128 md:w-176 lg:w-192 flex flex-col ">
                        <p className="font-medium text-base lg:text-lg mb-2">
                            {" "}
                            Socials
                        </p>
                        {org.website && (
                            <div className="flex items-center mb-4">
                                <GlobeIcon className="h-10 w-10" />
                                <div className="w-full md:w-2/3 ml-4">
                                    <InputLink
                                        register={register}
                                        setFocus={setFocus}
                                        getValues={getValues}
                                        errors={errors.website}
                                        trigger={trigger}
                                        registerOptions={
                                            registerOptions.url
                                        }
                                        inputRef="website"
                                    />
                                </div>
                            </div>
                        )}
                        {org.facebook && (
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
                                    />
                                </div>
                            </div>
                        )}
                        {org.instagram && (
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
                                    />
                                </div>
                            </div>
                        )}
                        {org.twitter && (
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
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center mt-12 mb-16">
                <button
                    className="flex flex-row justify-center items-center w-36 bg-purple-500 px-2 py-2 font-medium text-base lg:text-lg text-white rounded-lg shadow hover:bg-purple-600 "
                    onClick={() => console.log("Update")}
                >
                    Update
                </button>
                <button
                    className="flex flex-row justify-center w-36 ring-2 ring-inset ring-red-600 bg-white px-2 py-2 font-medium text-base lg:text-lg text-red-600 rounded-lg shadow hover:bg-gray-50"
                    onClick={() => toggleEditMode(false)}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditOrgProfile;

EditOrgProfile.propTypes = {
    org: PropTypes.object,
    toggleEditMode: PropTypes.func,
    access: PropTypes.string,
    id: PropTypes.number,
    setUser: PropTypes.func,
};
