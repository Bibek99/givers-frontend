import React from 'react';
import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constants/baseURL';

const QATab = ({ requestDetail }) => {
    const pdfUrl = BASE_URL + requestDetail.user_details;
    return (
        <Tab.Panel className="rounded-xl focus:outline-none">
            <ul>
                <li className="text-xl font-medium text-center my-6">Q & A</li>
                <li className="p-4 border-2 rounded-xl my-4 flex flex-row w-full">
                    <span className="text-lg font-medium leading-5 mr-2">
                        1.
                    </span>
                    <div>
                        <h3 className="text-lg font-medium leading-5">
                            {requestDetail.ques_1}
                        </h3>
                        <p className="mt-2 text-gray-500">
                            {requestDetail.ans_1}
                        </p>
                    </div>
                </li>
                <li className="p-4 border-2 rounded-xl my-4 flex flex-row w-full">
                    <span className="text-lg font-medium leading-5 mr-2">
                        2.
                    </span>
                    <div>
                        <h3 className="text-lg font-medium leading-5">
                            {requestDetail.ques_2}
                        </h3>
                        <p className="mt-2 text-gray-500">
                            {requestDetail.ans_2}
                        </p>
                    </div>
                </li>
                <li className="p-4 border-2 rounded-xl my-4 flex flex-row w-full">
                    <span className="text-lg font-medium leading-5 mr-2">
                        3.
                    </span>
                    <div>
                        <h3 className="text-lg font-medium leading-5">
                            {requestDetail.ques_3}
                        </h3>
                        <p className="mt-2 text-gray-500">
                            {requestDetail.ans_3}
                        </p>
                    </div>
                </li>
                <li className="p-4 border-2 rounded-xl my-4 flex flex-row w-full">
                    <span className="text-lg font-medium leading-5 mr-2">
                        4.
                    </span>
                    <div>
                        <h3 className="text-lg font-medium leading-5">
                            {requestDetail.file_1}
                        </h3>
                        <p className="mt-2 text-purple-500">
                            <Link to={{ pathname: pdfUrl }} target={'_blank'}>
                                View file
                            </Link>
                        </p>
                    </div>
                </li>
            </ul>
        </Tab.Panel>
    );
};

export default QATab;
