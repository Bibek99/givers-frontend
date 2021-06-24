import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';

const DashboardNavbar = ({ isSidebarOpen, setSidebarOpen }) => {
    return (
        <div className="sticky top-o bg-red-200 border-b border-gray-500 z-30">
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
                    {/* Navbar Right Side */}
                    <div className="flex items-center">Right Content</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;
