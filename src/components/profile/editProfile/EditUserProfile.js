import React from "react";
import Input from "./input";
import InputLink from "./inputLink";
import ImageInput from "./ImageInput";
import { ReactComponent as FacebookLogo } from "../../../assets/Socials/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/Socials/instagram.svg";
import { ReactComponent as TwitterLogo } from "../../../assets/Socials/twitter.svg";

const EditUserProfile = ({ toggleEditMode }) => {
    return (
        <div className="px-8 flex flex-col w-full border bg-white rounded-lg shadow-xl">
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
                            defaultValue="Jane Doe"
                            isMultiline={false}
                            inputRef="full_name"
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
                            defaultValue="I am a computer engineering student.
                                        I like to help people and make them happy.
                                        I often volunteer for the noble cause."
                            isMultiline={true}
                            inputRef="bio"
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
                            defaultValue="jane.doe@example.com"
                            isMultiline={false}
                            inputRef="email"
                        />
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center  ">
                    <div className="w-128 md:w-176 lg:w-192 flex flex-col md:flex-row justify-between">
                        <div className="mr-8 mb-4 w-full md:w-1/2 flex flex-col">
                            <p className="font-medium text-base lg:text-lg">
                                {" "}
                                Phone
                            </p>
                            <Input
                                className=""
                                defaultValue="+977 9876543210"
                                isMultiline={false}
                                inputRef="phone"
                            />
                        </div>
                        {/* <div className=" w-64 md:w-88 lg:w-96 flex flex-col"> */}
                        <div className="w-full mb-4 md:w-1/2 flex flex-col">
                            <p className="font-medium text-base lg:text-lg">
                                {" "}
                                Date of birth
                            </p>
                            <Input
                                className=""
                                type="date"
                                defaultValue="2000-1-1"
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
                            defaultValue="Pulchowk, Lalitpur, Nepal"
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
                            <div className=" w-2/3 ml-4">
                                <InputLink
                                    className="text-blue-400 underline"
                                    defaultValue="http://www.facebook.com/janedoe"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <InstagramLogo className="h-10 w-10" />
                            <div className=" w-2/3 ml-4">
                                <InputLink
                                    className="text-blue-400 underline"
                                    defaultValue="http://www.instagram.com/janedoe"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <TwitterLogo className="h-10 w-10" />
                            <div className=" w-2/3 ml-4">
                                <InputLink
                                    className="text-blue-400 underline"
                                    defaultValue="http://www.twitter.com/janedoe"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUserProfile;
