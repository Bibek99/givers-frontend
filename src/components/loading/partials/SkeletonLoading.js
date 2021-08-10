import React from "react";
import PropTypes from "prop-types";

const SkeletonLoading = ({ type }) => {
    let style = "";

    switch (type) {
        case "text":
            style = "h-4 w-56 bg-gray-200";
            break;

        case "text-lg":
            style = "h-4 w-80 bg-gray-200";
            break;

        case "avatar":
            style = "bg-gray-200 h-16 w-16 rounded-full";
            break;

        case "avatar-profile":
            style = "bg-gray-200 h-48 w-48 rounded-full";
            break;

        case "title":
            style = "h-8 w-64 bg-gray-200 mb-2";
            break;

        case "title-lg":
            style = "h-8 w-96 bg-gray-200 mb-2";
            break;

        case "button":
            style = "h-12 w-48 bg-gray-200";
            break;

        case "button-expand-sm":
            style = "h-12 w-full md:w-48 bg-gray-200";
            break;

        case "banner":
            style = "bg-gray-200 h-80 w-full my-2";
            break;

        case "icon":
            style = "bg-gray-200 h-10 w-10 rounded-full";
            break;

        default:
            style = "";
            break;
    }

    return <div className={style}></div>;
};

export default SkeletonLoading;

SkeletonLoading.propTypes = {
    type: PropTypes.string,
};
