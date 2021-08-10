import React from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const QATab = ({ requestDetail }) => {
    const pdfUrl = requestDetail.user_details;
    return (
        <Tab.Panel className="rounded-xl focus:outline-none">
            <ul>
                <li className="text-xl font-medium text-center my-6">
                    Q & A
                </li>
                {requestDetail.ques_1 && (
                    <li className="p-4 border-2 rounded-xl my-4  w-full">
                        <div>
                            <h3 className="text-lg font-medium leading-5">
                                {requestDetail.ques_1}
                            </h3>
                            <p className="mt-2 text-gray-500">
                                {requestDetail.ans_1}
                            </p>
                        </div>
                    </li>
                )}
                {requestDetail.ques_2 && (
                    <li className="p-4 border-2 rounded-xl my-4  w-full">
                        <div>
                            <h3 className="text-lg font-medium leading-5">
                                {requestDetail.ques_2}
                            </h3>
                            <p className="mt-2 text-gray-500">
                                {requestDetail.ans_2}
                            </p>
                        </div>
                    </li>
                )}
                {requestDetail.ques_3 && (
                    <li className="p-4 border-2 rounded-xl my-4  w-full">
                        <div>
                            <h3 className="text-lg font-medium leading-5">
                                {requestDetail.ques_3}
                            </h3>
                            <p className="mt-2 text-gray-500">
                                {requestDetail.ans_3}
                            </p>
                        </div>
                    </li>
                )}
                {requestDetail.file_1 && (
                    <li className="p-4 border-2 rounded-xl my-4  w-full">
                        <div>
                            <h3 className="text-lg font-medium leading-5">
                                {requestDetail.file_1}
                            </h3>
                            <p className="mt-2 text-purple-500">
                                <Link
                                    to={{ pathname: pdfUrl }}
                                    target={"_blank"}
                                >
                                    View file
                                </Link>
                            </p>
                        </div>
                    </li>
                )}
            </ul>
        </Tab.Panel>
    );
};

export default QATab;

QATab.propTypes = {
    requestDetail: PropTypes.object,
};
