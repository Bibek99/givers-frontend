import React from 'react';
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    ChevronDownIcon,
    LinkIcon,
    GlobeAltIcon,
} from '@heroicons/react/outline';
import { ReactComponent as Facebook } from '../../../assets/fb-icon.svg';
import { ReactComponent as Instagram } from '../../../assets/insta-icon.svg';
import { ReactComponent as Twitter } from '../../../assets/twitter-icon.svg';
import { useState } from 'react';

const SocialsForm = ({
    selectUser,
    selectOrg,
    selectFile,
    setSelectFile,
    register,
    errors,
    isValid,
    handleSubmit,
    getValues,
    trigger,
}) => {
    const [imageAvatar, setImageAvatar] = useState();

    const handleChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImageAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);

        const file = e.target.files[0];
        const image = new FormData();
        image.append('image', file, 'bluehand.png');
        console.log(image.get('image'));
        setSelectFile(image);
    };
    console.log(selectFile);
    return (
        <div className="flex flex-col max-w-screen-sm mt-20 mx-auto">
            <div className="flex flex-col space-y-8 px-8 ">
                <div>
                    <h1 className="text-3xl font-semibold flex text-center justify-center">
                        Add more personality to your profile
                    </h1>
                </div>
                <div className="p-4 border border-gray-300 rounded-xl">
                    <h1 className="text-lg mb-5">Avatar</h1>
                    <div className="flex flex-row items-center space-x-12">
                        <img
                            className="object-cover rounded-full border-2 w-36 h-36"
                            src={
                                imageAvatar
                                    ? imageAvatar
                                    : getValues('gender') === 'male'
                                    ? 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8OEA4OEA8PEBAPEA8NDRAREA0QFREWFxURFRUYHSkgGBolGxUVITEhJSktLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAD0QAQACAAMFAwkECAcAAAAAAAABAgMEEQUSITFRQWFxBiIygZGhscHRQkNSchMjM1NikrLCFBWCk6Lh8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+czdcKNZ4z2VieM/8ASsttq/ZSkeOsgurWiI1mYiOszpDxXHpPK9J8LQ53N5y+LpvaaRyiI0iO9HB1w5OmJavK0x4TMN1c9ixyxLevj8QdMOdptPFidd7XumsaT7FtkdoVxeHo3/DPb4SCYAAAAAAAAAAAAAAAAAAAAqc9tXTzcPjPbfsjw6+LVtbOzMzh1nSscLTH2p6eCsBm1pmZmZmZnnMzrMsAAAAAA9YV921bdJieHi8gL+21sKOW9PdFfq2ZHPRizbhu6aaRNtZmOujnGYmYmJidJjlMc4B1oibNzX6Sms+lXhbv6SlgAAAAAAAAAAAAAANWaxdylrdInTx7Pe2q/bd9MLT8Voj5/IFDMgAC7yHk9e9YtiW/RxPGK7uttO/ozmPJrEj0L1vHS2tZ+cAoxOxNj5iv3Np/LMW+EtX+XY/7jG/27fQEYWGBsTMX+73Y64kxX3c/cnYfkxf7WLWPy0m3xmAUI6G3kxPZjx68LT+5DzOwMenGIriR/BPH2T8gVQzaJidJiYmOcTGkwwCx2HiaYk17LVn2xx+q9c3sudMbD8Zj2xLpAAAAAAAAAAAAAAAFVt+eGHHfafZEfVaqjb/3f+v+0FQuPJvIRiXnEtGtcPTSOy1+z2c/Yp3a7CwdzL4fW0b89+9x+GgJ4AAAAAAAKnyg2dGJh2xIj9ZSNdY+1WOcT6nIvokxrw7J4Pnt6aTMdJmPZIN+zv2uH+Z0rmtmx+uw/wA3ydKAAAAAAAAAAAAAAArNu/s69d/5Ss1Vt/0cPprb26Rp8wU0RrwjnPCH0LDpu1iscqxFY9UaOH2Xh72PhV/jrPqidZ+DugAAAAAAAAHA52umLiR0xLx/yl3ziduYe7mMWOtt72xEg8bLj9dTxn+mXRuf2LXXFjurafl83QAAAAAAAAAAAAAAANebydsbDtERrPOOUedHJsWWXjzK+AOU8nMGf8TGsTE0reZiecTpu/N16vwsrFc1iYkRwxMKP5t6NfhX2rAAAAAAAAABynlVXTGrPXDj3Wl1aFmMhXEx64l4ia4dNIieU2m08Z8PmCg2FgzG9eY56Vr3x2z8FsmZ/lXrx9iGAAAAAAAAAAAAAAAn5O+tdO2OCAkZK2ltOsAm6drIAAAAAAAAAAAg56fOiOkI7bmp1vPqj3NQAAAAAAAAAAAAAAD1h20tE9J9zyAtYtGundr6mUDJTpfxiY/97E8AAAAAAAABqxseK8Oc9G1WY9tbWnv09gPNp1mZ68WAAAAAAAAAAAAAAAAABmltJiek6rSs6xr1VSZksX7M+r6AlAAAAAAAAxa2kaz2KqZbszmt6dyPRjnPWfo0gAAAAAAAAAAAAAAAAAAHhzCAT8tmN7hPpfHvhvV0USMPHmOE8e/tBJHmt4nlL0ADza8RzkHpBzeY11rXl2z17nrGxJtw5R8WrcBHpXR7e7V4PAAAAAAAAAAAAAAAAAAAD1hRrMQjYubpXt1npXikbKzVbzMcr9kTPOvcCXuG43bpug07jMa9Z97bum6DVOvWfexuN26boNO4bjdum6CPiU4SirLdVW1MeuFaIrGszxtHZEdgPYi4WepPPWs9/L2pMTrxjjHcDIAAAAAAAAAAMWtERrMxEdZBkRrZ6kdsz4RKFmc1N+HKvTr4gl42erHCvnT7kLFzFr854dI4Q0sgM1tMTExMxMcYmOcSwAv9nbWrfSuJpW/KLfZt9JWu64pMym0sXC4RbWv4bcY9XQHU7puqvA2/SfTpavfXS0fJKrtbAn7zTxraPkCVum6jztTA/ex/Lb6NV9tYEcrWt4Un5gm7puqjG8oI+xhzPfeYj3Qrc1tPFxOE20j8NOEfWQXG0NqUw9a1mLX7vRr4z8nO4l5tM2tOszOszPa8sgPeFi2pxrOnd2T6ngBZYGeieFvNnr2T9EuJUTZg49qcp4dJ4wC5ETBz1Z4W82fclRIMgAAAAj5rMxThzt06d8g94+PFI1nn2R2yq8bGtedZnwjsh4vebTrM6zLAAAAAAAAAAAAAAAAAAAAADZg49qcp4dJ5S1gLTL5ut+E8LdOyfCUlRJ+RzMz5lufZPXuBOAAU2Z9O/wCaQBrAAABhkAAAGGQAAAAAAAAAAAAAABuyX7Svr/plkBbAA//Z'
                                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwtfHeRZ-AjGa-Yslg8g5MLWGGtAUr9WK2w&usqp=CAU'
                            }
                            alt="avatar"
                        />
                        <input
                            className=""
                            type="file"
                            name="image"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="space-y-4 border border-gray-300 p-4 rounded-xl">
                    <h1 className="text-lg">Social handles</h1>
                    <div className="flex items-center text-center">
                        <Facebook className="h-8 w-8 mr-8" />
                        <div className="relative">
                            <LinkIcon className="h-6 w-6 absolute left-3 top-5" />
                            <input
                                type="url"
                                name="facebook"
                                className="bg-gray-50 border-2 border-gray-200 py-2 h-12 px-12 mt-2 rounded-lg focus:outline-none"
                                {...register('facebook')}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row space-x-8 items-center  text-center">
                        <div>
                            <Instagram className="h-8 w-8" />
                        </div>
                        <div className="relative ">
                            <LinkIcon className="h-6 w-6 absolute left-3 top-5" />
                            <input
                                type="url"
                                name="instagram"
                                className="bg-gray-50 border-2 border-gray-200 py-2 h-12 px-12 mt-2 rounded-lg focus:outline-none"
                                {...register('instagram')}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row space-x-8 items-center  text-center">
                        <div>
                            <Twitter className="h-8 w-8" />
                        </div>
                        <div className="relative ">
                            <LinkIcon className="h-6 w-6 absolute left-3 top-5" />
                            <input
                                type="url"
                                name="twitter"
                                className="bg-gray-50 border-2 border-gray-200 py-2 h-12 px-12 mt-2 rounded-lg focus:outline-none"
                                {...register('twitter')}
                            />
                        </div>
                    </div>
                </div>
                {selectOrg && (
                    <div className="border border-gray-300 p-4">
                        <h1 className="text-lg mb-4">Organization Website</h1>
                        <div className="flex-wrap">
                            <div className="inline-flex items-center">
                                <GlobeAltIcon className="h-8 w-8 mr-8" />
                                <div className="relative ">
                                    <LinkIcon className="h-6 w-6 absolute left-3 top-3" />
                                    <input
                                        type="url"
                                        name="website"
                                        className="self-stretch bg-gray-50 border-2 border-gray-200 py-2 h-12 px-12  rounded-lg focus:outline-none"
                                        {...register('website')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SocialsForm;
