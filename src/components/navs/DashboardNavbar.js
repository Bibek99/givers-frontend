import React from 'react';

const DashboardNavbar = ({ isSidebarOpen, setSidebarOpen }) => {
    return (
        <div className="sticky top-o bg-red-200 border-b border-gray-500 z-30">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 -mb-px">
                    {/* Navbar Left Side */}
                    <div className="flex">
                        {/* Sidebar Open Button */}
                        <button
                            className="text-gray-500 hover:text-gray-600"
                            aria-controls="sidebar"
                            aria-expanded={isSidebarOpen}
                            onClick={() => {
                                setSidebarOpen(!isSidebarOpen);
                            }}
                        >
                            Open Sidebar
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
