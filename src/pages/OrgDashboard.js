import React from 'react';
import { useState } from 'react';
import OrgSidebar from '../components/Sidebars/OrgSidebar';
import DashboardNavbar from '../components/navs/DashboardNavbar';
import { Switch, Route } from 'react-router-dom';
import EventLists from '../components/lists/EventLists';
import OrgProfile from '../components/profile/OrgProfile';

const OrgDashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <OrgSidebar
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
                <div className="relative flex flex-row justify-between overflow-y-auto overflow-x-hidden bg-gray-100">
                    <Switch>
                        <Route path="/org" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <EventLists />
                            </div>
                        </Route>
                        <Route path="/org/profile">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <OrgProfile />
                            </div>
                        </Route>
                        <Route path="/org/history">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Events History
                            </div>
                        </Route>
                        <Route path="/org/dashboard">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Dashboard
                            </div>
                        </Route>
                        <Route path="/org/requests">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Requests
                            </div>
                        </Route>
                        <Route path="/org/settings">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Settings
                            </div>
                        </Route>
                    </Switch>

                    <div className="bg-gray-100 hidden xl:block xl:w-80"></div>
                </div>
            </div>
        </div>
    );
};

export default OrgDashboard;
