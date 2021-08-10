import { Tab } from "@headlessui/react";
import React from "react";
import { ReactComponent as Facebook } from "../../../assets/Socials/facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/Socials/instagram.svg";
import { ReactComponent as Twitter } from "../../../assets/Socials/twitter.svg";
import {
    ExternalLinkIcon,
    GlobeIcon,
} from "@heroicons/react/outline";
import PropTypes from "prop-types";

const SocialTab = ({ user }) => {
    return (
        <Tab.Panel className="rounded-xl focus:outline-none">
            <ul className="flex flex-col items-center space-y-6">
                <li className="text-xl text-center font-medium">
                    Socials
                </li>
                {user.facebook && (
                    <li>
                        <div className="flex flex-row items-center">
                            <Facebook className="h-8 w-8" />
                            <div className="ml-4 inline-flex text-lg border border-gray-300 rounded-lg p-4">
                                {user.facebook}
                            </div>
                            <a
                                href={user.facebook}
                                target="_blank"
                                rel="noreferrer"
                                className="ml-4"
                            >
                                <ExternalLinkIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </li>
                )}
                {user.instagram && (
                    <li>
                        <div className="flex flex-row items-center">
                            <Instagram className="h-8 w-8" />
                            <div className="ml-4 inline-flex text-lg border border-gray-300 rounded-lg p-4">
                                {user.instagram}
                            </div>
                            <a
                                href={user.instagram}
                                target="_blank"
                                rel="noreferrer"
                                className="ml-4"
                            >
                                <ExternalLinkIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </li>
                )}
                {user.twitter && (
                    <li>
                        <div className="flex flex-row items-center">
                            <Twitter className="h-8 w-8" />
                            <div className="ml-4 inline-flex text-lg border border-gray-300 rounded-lg p-4">
                                {user.twitter}
                            </div>
                            <a
                                href={user.twitter}
                                target="_blank"
                                rel="noreferrer"
                                className="ml-4"
                            >
                                <ExternalLinkIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </li>
                )}
                {user.organization && (
                    <li>
                        <div className="flex flex-row items-center">
                            <GlobeIcon className="h-8 w-8" />
                            <div className="ml-4 inline-flex text-lg border border-gray-300 rounded-lg p-4">
                                {user.website}
                            </div>
                            <a
                                href={user.website}
                                target="_blank"
                                rel="noreferrer"
                                className="ml-4"
                            >
                                <ExternalLinkIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </li>
                )}
            </ul>
        </Tab.Panel>
    );
};

export default SocialTab;

SocialTab.propTypes = {
    user: PropTypes.object,
};
