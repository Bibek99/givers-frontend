import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/navs/DashboardNavbar';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/* Dashboard Header Navbar */}
                <DashboardNavbar
                    isSidebarOpen={isSidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                {/* Main Content */}
                <div className="relative flex flex-row justify-between overflow-y-auto overflow-x-hidden bg-green-200">
                    <div className="w-full flex space-y-4 flex-col m-5 p-2">
                        Events
                    </div>
                    <div className="bg-yellow-300 h-screen hidden lg:block lg:w-80">
                        Widgets
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
