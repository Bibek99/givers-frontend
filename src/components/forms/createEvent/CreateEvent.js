import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
    CheckCircleIcon,
    ChevronDownIcon,
    ExclamationCircleIcon,
    UploadIcon,
    XIcon,
} from "@heroicons/react/outline";
import { createAnEvent } from "../../../actions/eventActions";
import { authorizedJSONHeader } from "../../../helpers/config";
import { BASE_URL } from "../../../constants/baseURL";
import axios from "axios";
import { useEffect } from "react";
import PropTypes from "prop-types";

const CreateEvent = ({ setcreateEventBtnClicked }) => {
    const [bannerImage, setBannerImage] = useState(null);
    const [banner, setBanner] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);
    const [categoryData, setCategoryData] = useState();

    const dispatch = useDispatch();

    const {
        register,
        formState: { isValid, errors },
        trigger,
        handleSubmit,
        setValue,
    } = useForm();

    const { userInfo } = useSelector((state) => state.userLogin);
    const { username, access } = userInfo;

    const handleImageChange = (e) => {
        setBanner(e.target.files[0]);

        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.onload = (e) => {
                setBannerImage(e.target.result);
                setIsUploaded(true);
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setBannerImage(null);
        }
    };

    const categoryFetch = useCallback(async () => {
        const config = authorizedJSONHeader(access);

        const categoryFetchUrl = BASE_URL + "/api/events_category/";
        const { data } = await axios.get(categoryFetchUrl, config);

        if (data) {
            setCategoryData(data);
        }
    }, [access]);

    const formSubmit = (data) => {
        setcreateEventBtnClicked(true);

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("location", data.location);
        formData.append("start_date", data.start_date);
        formData.append("end_date", data.end_date);
        formData.append("banner", banner);
        formData.append("description", data.description);
        formData.append("username", username);
        formData.append("category", data.category);
        formData.append("completed", "False");

        dispatch(createAnEvent(formData, access));
    };

    useEffect(() => {
        categoryFetch();
    }, [categoryFetch]);

    console.log(categoryData);

    return (
        <div className="flex flex-col bg-white rounded-lg px-4 py-8 space-y-8">
            <div className="text-center text-4xl font-medium">
                Create Event
            </div>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="max-w-screen-sm mx-auto space-y-8">
                    {/* For Name  */}
                    <div className="">
                        <label htmlFor="name" className="mb-2">
                            Name{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                className={`border-2 border-gray-200 mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                    errors.name
                                        ? "focus:ring-red-500"
                                        : "focus:ring-green-500"
                                }`}
                                type="name"
                                name="name"
                                placeholder="Enter your event Name"
                                {...register("name", {
                                    required:
                                        "Please enter event Name",
                                })}
                                onKeyUp={() => {
                                    trigger("name");
                                }}
                            />
                            {errors.name ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>
                        {errors.name && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.name.message}
                            </div>
                        )}
                    </div>
                    {/* End Name */}

                    {/* For Location */}
                    <div className="">
                        <label htmlFor="location" className="mb-2">
                            Location{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                className={`border-2 border-gray-200 mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                    errors.location
                                        ? "focus:ring-red-500"
                                        : "focus:ring-green-500"
                                }`}
                                type="name"
                                name="location"
                                placeholder="Enter your event location"
                                {...register("location", {
                                    required:
                                        "Please enter event location",
                                })}
                                onKeyUp={() => {
                                    trigger("location");
                                }}
                            />
                            {errors.location ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>
                        {errors.location && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.location.message}
                            </div>
                        )}
                    </div>
                    {/* End Location */}

                    {/* For Event Date */}
                    <div className="flex flex-row justify-between items-center w-full">
                        {/* Start Date */}
                        <div className="mr-4">
                            <label
                                htmlFor="start_date"
                                className="mb-2"
                            >
                                Start Date{" "}
                                <span className="text-red-500">
                                    *
                                </span>
                            </label>
                            <input
                                type="date"
                                name="start_date"
                                className={`border-2 border-gray-200 mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                    errors.start_date
                                        ? "focus:ring-red-500 border-red-500"
                                        : "focus:ring-green-500 "
                                }`}
                                {...register("start_date", {
                                    required:
                                        "Please enter the event start date",
                                })}
                                onBlur={() => {
                                    trigger("start_date");
                                }}
                            />
                            {errors.start_date && (
                                <div className="text-red-500 text-sm mt-2">
                                    {errors.start_date.message}
                                </div>
                            )}
                        </div>
                        {/* End Date */}
                        <div>
                            <label
                                htmlFor="end_date"
                                className="mb-2"
                            >
                                End Date{" "}
                                <span className="text-red-500">
                                    *
                                </span>
                            </label>
                            <input
                                type="date"
                                name="end_date"
                                className={`border-2 border-gray-200 mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                    errors.end_date
                                        ? "focus:ring-red-500 border-red-500"
                                        : "focus:ring-green-500 "
                                }`}
                                {...register("end_date", {
                                    required:
                                        "Please enter the event end date",
                                })}
                                onBlur={() => {
                                    trigger("end_date");
                                }}
                            />
                            {errors.end_date && (
                                <div className="text-red-500 text-sm mt-2">
                                    {errors.end_date.message}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* End Event Date */}

                    {/* For Event Banner */}
                    <div>
                        <label htmlFor="banner" className="mb-2">
                            Add Image{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2 flex items-center justify-center">
                            <div className="bg-gray-50 relative flex flex-col rounded-lg w-full border-4 border-dashed border-gray-200 h-60 group justify-center items-center">
                                {isUploaded ? (
                                    bannerImage ? (
                                        <>
                                            <img
                                                src={bannerImage}
                                                alt="banner"
                                                className="object-cover py-8 md:py-0 max-h-60"
                                            />
                                            <div className="absolute right-2 top-2">
                                                <XIcon
                                                    className="h-7 w-7 p-0.5 bg-gray-400 rounded-md opacity-70"
                                                    onClick={() => {
                                                        setBannerImage(
                                                            null
                                                        );
                                                        setIsUploaded(
                                                            false
                                                        );
                                                        setValue(
                                                            "banner",
                                                            null
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        ""
                                    )
                                ) : (
                                    <div className="absolute flex flex-col justify-center items-center space-y-4">
                                        <UploadIcon className="h-16 w-16 text-gray-400" />
                                        <p className="text-gray-400 text-lg">
                                            Upload a banner image for
                                            your event
                                        </p>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    name="banner"
                                    className="opacity-0 w-full h-full"
                                    accept="image/*"
                                    onInput={(e) =>
                                        handleImageChange(e)
                                    }
                                    {...register("banner", {
                                        required:
                                            "Please upload an event banner",
                                    })}
                                />
                            </div>
                        </div>
                        <span className="text-gray-400">
                            Optimum Image size is: 1280 x 720 pixels
                        </span>
                    </div>
                    {/* End Event Banner */}

                    {/* Event Category */}
                    <div className="">
                        <h1 className="mb-2">
                            Category{" "}
                            <span className="text-red-500">*</span>
                        </h1>
                        <div className="relative">
                            <select
                                name="category"
                                defaultValue={"select category"}
                                className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2"
                                {...register("category", {
                                    required:
                                        "Please Choose an event category",
                                })}
                                onInput={() => {
                                    trigger("category");
                                }}
                            >
                                <option
                                    value="select category"
                                    disabled
                                >
                                    Select Category
                                </option>
                                {categoryData &&
                                    categoryData.map((cat) => {
                                        return (
                                            <option
                                                key={cat.id}
                                                value={cat.category}
                                            >
                                                {cat.category}
                                            </option>
                                        );
                                    })}
                            </select>

                            <div className="pointer-events-none absolute top-6 right-0 flex items-center px-3 text-gray-700">
                                <ChevronDownIcon className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                    {/* End Event Category */}

                    {/* For Description */}
                    <div className="">
                        <label htmlFor="description" className="mb-2">
                            Description{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <textarea
                                className={`border-2 border-gray-200 mt-2 px-6 py-2 h-32 w-full bg-gray-50 rounded-lg focus:outline-none focus:border-gray-50 focus:ring-2 ${
                                    errors.description
                                        ? "focus:ring-red-500"
                                        : "focus:ring-green-500"
                                }`}
                                type="name"
                                name="description"
                                placeholder="Enter your event description"
                                {...register("description", {
                                    required:
                                        "Please enter event description",
                                })}
                                onKeyDown={() => {
                                    trigger("description");
                                }}
                            />
                            {errors.description ? (
                                <div className="absolute right-3 bottom-3">
                                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                </div>
                            ) : (
                                <div className="absolute right-3 bottom-3">
                                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                </div>
                            )}
                        </div>
                        {errors.description && (
                            <div className="text-red-500 text-sm mt-2">
                                {errors.description.message}
                            </div>
                        )}
                    </div>
                    {/* End Description */}

                    <div className="flex flex-row justify-center items-center">
                        <button
                            disabled={!isValid}
                            className="mx-auto bg-purple-500 py-3 px-8 text-xl text-white rounded-lg disabled:cursor-not-allowed disabled:bg-gray-400"
                            type="submit"
                        >
                            Create Event
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateEvent;

CreateEvent.propTypes = {
    setcreateEventBtnClicked: PropTypes.func,
};
