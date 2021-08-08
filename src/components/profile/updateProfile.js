import axios from 'axios';
import { BASE_URL } from '../../constants/baseURL';
import { authorizedMultiPartHeader } from '../../helpers/config';

export const updateProfile = async (
    setUser,
    setLoading,
    setSuccess,
    setError,
    access,
    id,
    postData
) => {
    try {
        setLoading(true);
        const config = authorizedMultiPartHeader(access);

        const updateProfileUrl = BASE_URL + `/api/user/update/${id}/`;

        const { data } = await axios.put(updateProfileUrl, postData, config);

        setLoading(false);
        setSuccess(true);
        setUser(data);
    } catch (error) {
        setError(error);
    }
};
