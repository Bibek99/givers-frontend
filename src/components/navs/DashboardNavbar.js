import React from "react";
import { ReactComponent as GiversLogo } from "../../assets/givers-logo.svg";
import { MenuIcon } from "@heroicons/react/outline";
import { BellIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";

const DashboardNavbar = ({ isSidebarOpen, setSidebarOpen }) => {
    return (
        <div className="sticky top-0 bg-white border-b border-gray-500 z-10">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 -mb-px">
                    {/* Navbar Left Side */}
                    <div className="flex">
                        {/* Sidebar Open Button */}
                        <button
                            className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
                            aria-controls="sidebar"
                            aria-expanded={isSidebarOpen}
                            onClick={() => {
                                setSidebarOpen(!isSidebarOpen);
                            }}
                        >
                            <MenuIcon className="h-6 w-6" />
                        </button>
                    </div>
                    {/* Logo hidden bigger than medium screen size */}
                    <div className="lg:hidden">
                        <GiversLogo />
                    </div>
                    {/* Navbar Right Side */}
                    <div className="flex items-center">
                        <BellIcon className="h-6 w-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;

DashboardNavbar.propTypes = {
    setSidebarOpen: PropTypes.func,
    isSidebarOpen: PropTypes.bool,
};
