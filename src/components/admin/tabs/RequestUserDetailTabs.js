import { Tab } from "@headlessui/react";
import React from "react";
import DocumentTab from "../tabs/DocumentTab";
import SocialTab from "../tabs/SocialTab";
import UserTab from "../tabs/UserTab";
import PropTypes from "prop-types";

const RequestUserDetailTabs = ({ requestDetail, tabList }) => {
    return (
        <div className="w-full max-w-screen-md mx-auto px-2 py-16">
            <Tab.Group>
                <Tab.List className="flex p-2 space-x-2 rounded-xl bg-purple-100">
                    {tabList.map((tabhead, index) => (
                        <Tab
                            key={index}
                            className={({ selected }) =>
                                `w-full py-2 leading-5 text-lg font-medium text-purple-500 rounded-lg focus:outline-none ${
                                    selected
                                        ? "bg-white"
                                        : "text-purple-300 hover:bg-white hover:bg-opacity-60"
                                }`
                            }
                        >
                            {tabhead}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-4">
                    <UserTab user={requestDetail} />
                    <SocialTab user={requestDetail} />
                    <DocumentTab user={requestDetail} />
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default RequestUserDetailTabs;

RequestUserDetailTabs.propTypes = {
    requestDetail: PropTypes.object,
    tabList: PropTypes.array,
};
