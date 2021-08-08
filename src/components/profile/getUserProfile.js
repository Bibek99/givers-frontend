import { authorizedJSONHeader } from '../../helpers/config';
import { BASE_URL } from '../../constants/baseURL';
import axios from 'axios';

export const getUserProfile = async (setUser, access, id) => {
    const config = authorizedJSONHeader(access);
    const getUserProfileUrl = BASE_URL + `/api/user/profile/${id}`;

    const { data } = await axios.get(getUserProfileUrl, config);

    setUser(data);
};
