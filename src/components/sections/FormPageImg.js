import React from 'react';
import { ReactComponent as FormImg } from '../../assets/form-img.svg';

const FormPageImg = () => {
    return (
        <div className="px-5 hidden lg:flex lg:flex-col mt-20 w-1/2">
            <div className="text-3xl font-semibold mb-5">
                All-in-One Workspace
            </div>
            <div className="text-lg mb-20 w-3/4">
                Give more to community by participating and organizing events
                helpful for community.
            </div>
            <FormImg />
        </div>
    );
};

export default FormPageImg;
