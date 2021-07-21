import axios from 'axios';
import { BASE_URL } from '../constants/baseURL';
import { JSONHeader } from './config';

export const categoryFetch = async () => {
    const categoryUrl = BASE_URL + '/api/events_category/';

    const config = JSONHeader();

    const { data } = await axios.get(categoryUrl, config);

    return data;
};
