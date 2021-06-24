import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/navs/DashboardNavbar';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <DashboardNavbar
                    isSidebarOpen={isSidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                <div className="relative flex flex-col overflow-y-auto overflow-x-hidden bg-green-200">
                    <div className="min-h-screen">Main Content</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
