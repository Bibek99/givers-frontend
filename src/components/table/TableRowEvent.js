import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants/baseURL';
import { authorizedJSONHeader } from '../../helpers/config';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useCallback } from 'react';

const TableRowEvent = ({ event }) => {
    const {
        userInfo: { access },
    } = useSelector((state) => state.userLogin);

    const [res, setRes] = useState();

    const loadReqNumbers = useCallback(async () => {
        const config = authorizedJSONHeader(access);
        const loadReqNumbersUrl = BASE_URL + `/api/show/number/${event.id}`;
        const { data } = await axios.get(loadReqNumbersUrl, config);
        setRes(data);
    }, [access, event.id]);

    useEffect(() => {
        loadReqNumbers();
    }, [loadReqNumbers]);

    console.log(res);

    return (
        <tr className="group hover:bg-gray-50 text-gray-500">
            <td className="px-6 py-4 whitespace-nowrap">{event.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{event.location}</td>
            <td className="px-6 py-4 whitespace-nowrap">{event.start_date}</td>
            <td className="px-6 py-4 whitespace-nowrap">{event.end_date}</td>
            {res ? (
                <td className="px-6 py-4 whitespace-nowrap">
                    {res.approval}/{res.requested}
                </td>
            ) : (
                <td className="px-6 py-4 whitespace-nowrap"></td>
            )}
            <td>
                <Link
                    className="text-purple-500"
                    to={`/org/requests/event/${event.id}`}
                >
                    View All
                </Link>
            </td>
        </tr>
    );
};

export default TableRowEvent;
