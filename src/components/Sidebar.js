import React, { useEffect, useRef } from 'react';

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
    console.log(isSidebarOpen);

    const trigger = useRef(null);
    const sidebar = useRef(null);

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !isSidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!isSidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });
    return (
        <div className="lg:w-64">
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
                    isSidebarOpen
                        ? 'opacity-100'
                        : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden="true"
            ></div>

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebar}
                className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-64'
                }`}
            >
                {/* Sidebar Header */}
                <div className="flex justify-between mb-10 pr-3 sm:px-2">
                    {/* Sidebar Close Button */}
                    <button
                        ref={trigger}
                        className="lg:hidden text-gray-500 hover:text-gray-400"
                        onClick={() => {
                            setSidebarOpen(!isSidebarOpen);
                        }}
                        aria-controls="sidebar"
                        aria-expanded={isSidebarOpen}
                    >
                        {isSidebarOpen ? 'Close' : 'Open'}
                    </button>
                    {/* Sidebar Contents */}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
