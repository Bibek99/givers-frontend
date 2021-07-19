import { BASE_URL } from '../constants/baseURL';
import axios from 'axios';
import { JSONHeader } from './config';

export const usernameValidator = async (username) => {
    const usernameValidationUrl =
        BASE_URL + `/api/validate/username/${username}`;

    const config = JSONHeader();

    const { data } = await axios.get(usernameValidationUrl, config);

    if (data.available === true) {
        return true;
    } else if (data.available === false) {
        return false;
    }
};

export const emailValidator = async (email) => {
    const emailValidationUrl = BASE_URL + `/api/validate/email/${email}`;

    const config = JSONHeader();

    const { data } = await axios.get(emailValidationUrl, config);

    if (data.available === true) {
        return true;
    } else if (data.available === false) {
        return false;
    }
};
