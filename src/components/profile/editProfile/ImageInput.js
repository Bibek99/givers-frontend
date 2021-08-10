import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";

const ImageInput = ({ src, image }) => {
    const [imageData, setImageData] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);

    const request = new XMLHttpRequest();
    request.open("GET", src, true);
    request.responseType = "blob";
    request.onload = function () {
        const reader = new FileReader();
        reader.readAsDataURL(request.response);
        reader.onload = function (e) {
            if (!isUploaded) {
                setImageData(e.target.result);
            }
        };
    };
    request.send();

    const { register } = useForm();

    const handleImageChange = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            setIsUploaded(true);
            reader.onload = (e) => {
                setImageData(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
        image(e.target.files[0]);
    };
    return (
        <div className="flex flex-row justify-center">
            <div className="grid grid-cols-1 grid-rows-1 justify-center rounded-full h-36 md:h-44 lg:h-56 w-36 md:w-44 lg:w-56">
                <img
                    src={imageData}
                    alt="Profile"
                    className="z-0 row-start-1 row-end-1 col-start-1 col-end-1 rounded-full w-full h-full shadow-md"
                />
                <div className="z-10 row-start-1 row-end-1 col-start-1 col-end-1 w-full h-full grid grid-cols-3 grid-row-3 lg:opacity-0 transition duration-300 backdrop-filter lg:backdrop-blur-sm hover:opacity-100 rounded-full">
                    <UploadIcon className="invisible lg:visible rounded-full bg-transparent h-full w-full  row-start-2 row-end-3 col-start-2 col-end-3 text-purple-600" />
                    <UploadIcon className="visible lg:invisible h-6 w-6 md:h-8 mr-2 mt-2 md:w-8 rounded-full bg-purple-200 row-start-4 lg:row-start-2 col-start-4 lg:col-start-2 text-purple-600" />
                    <input
                        type="file"
                        name="image"
                        className="h-full w-full row-start-1 row-end-5 lg:row-end-4 col-start-1 col-end-5 lg:col-end-4 opacity-0 rounded-full "
                        accept="image/*"
                        onInput={(e) => handleImageChange(e)}
                        {...register("image")}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageInput;

ImageInput.propTypes = {
    src: PropTypes.string,
    image: PropTypes.func,
    imageFile: PropTypes.object,
};
