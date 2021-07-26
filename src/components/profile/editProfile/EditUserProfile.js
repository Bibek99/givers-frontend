import React,{useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import Input from "./input";
import InputLink from "./inputLink";
import ImageInput from "./ImageInput";
import { ReactComponent as FacebookLogo } from "../../../assets/Socials/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/Socials/instagram.svg";
import { ReactComponent as TwitterLogo } from "../../../assets/Socials/twitter.svg";

const EditUserProfile = () => {
    const [saveState, setSaveState] = useState(false);
    const [cancelState, setCancelState] = useState(false);
    const {
        register,
        setFocus,
        formState: { errors },
        trigger,
        getValues,
    } = useForm({
        defaultValues: {
            full_name: "Jane Doe",
            email: "janedoe@example.com",
            bio: "I am a computer engineering student. I like to help people and make them happy. I often volunteer for the noble cause.",
            phone: "9876543210",
            dob: "2000-01-01",
            address: "Pulchowk, Lalitpur, Nepal",
            facebook: "http://www.facebook.com/janedoe",
            twitter: "http://www.twitter.com/janedoe",
            instagram: "http://www.instagram.com/janedoe",
        },
    });

    useEffect(() => {
        console.log("Make use of Save and Cancel buttons:",saveState, cancelState);
    })

    const registerOptions = {
        full_name: {
            required: "Please enter your full name",
            pattern: {
                value: /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
                message: "Please enter your full name",
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
                message: "Phone numbers are not more than 10 digit long",
            },
        },
        dob: {
            required: "Please enter your Date of birth",
        },
        address: {
            required: "Please enter your address",
        },
        url: {
            pattern:{
                value:/[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi,
                message: "Please enter a valid URL",
            }
        }
    };

    return (
        <div className="px-6 md:px-8 flex flex-col w-full border bg-white rounded-lg shadow-xl">
            <div className="flex flex-row justify-center md:justify-start">
                <p className="underline font-bold text-2xl lg:text-3xl mx-12 lg:mx-16 mt-4 lg:mt-8 mb-4 lg:mb-0">
                    Edit Profile
                </p>
            </div>
            <ImageInput />
            <div className="flex flex-col items-center my-4 md:mt-8 lg:mt-12 ">
                <div className="flex flex-row w-full justify-center mb-4">
                    <div className=" w-128 md:w-176 lg:w-192 flex flex-col">
                        <p className="font-medium text-base lg:text-lg">
                            {" "}
                            Full Name
                        </p>
                        <Input
                            className=""
                            register={register}
                            setFocus={setFocus}
                            errors={errors.full_name}
                            trigger={trigger}
                            inputRef="full_name"
                            isMultiline={false}
                            registerOptions={registerOptions.full_name}
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
                                registerOptions={registerOptions.phone}
                                isMultiline={false}
                                inputRef="phone"
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
                        <div className="flex items-center mb-4">
                            <FacebookLogo className="h-10 w-10" />
                            <div className="w-full md:w-2/3 ml-4">
                                <InputLink
                                    className="text-blue-400 underline"
                                    register={register}
                                    setFocus={setFocus}
                                    getValues={getValues}
                                    errors={errors.facebook}
                                    trigger={trigger}
                                    registerOptions={registerOptions.url}
                                    inputRef="facebook"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <InstagramLogo className="h-10 w-10" />
                            <div className="w-full md:w-2/3 ml-4">
                                <InputLink
                                    className="text-blue-400 underline"
                                    register={register}
                                    setFocus={setFocus}
                                    getValues={getValues}
                                    errors={errors.instagram}
                                    trigger={trigger}
                                    registerOptions={registerOptions.url}
                                    inputRef="instagram"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <TwitterLogo className="h-10 w-10" />
                            <div className="w-full md:w-2/3 ml-4">
                                <InputLink
                                    className="text-blue-400 underline"
                                    register={register}
                                    setFocus={setFocus}
                                    getValues={getValues}
                                    errors={errors.twitter}
                                    trigger={trigger}
                                    registerOptions={registerOptions.url}
                                    inputRef="twitter"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center mt-12 mb-16">
                <button 
                className="flex flex-row justify-center items-center w-36 bg-blue-100 px-2 py-2 font-medium text-base lg:text-lg text-blue-700 rounded-lg shadow hover:bg-blue-200 "
                onClick={()=>setSaveState(true)}
                >
                    Save
                </button>
                <button 
                className="flex flex-row justify-center w-36 bg-red-600 px-2 py-2 font-medium text-base lg:text-lg text-white rounded-lg shadow hover:bg-red-700"
                onClick={()=>setCancelState(true)}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditUserProfile;
