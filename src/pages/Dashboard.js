import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/navs/DashboardNavbar';
import { Switch, Route } from 'react-router-dom';

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
                    <Switch>
                        <Route path="/user" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Events
                            </div>
                        </Route>
                        <Route path="/user/dashboard">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Dashboard
                            </div>
                        </Route>
                        <Route path="/user/history">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Events History
                            </div>
                        </Route>
                        <Route path="/user/interested">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Interested Events
                            </div>
                        </Route>
                        <Route path="/user/invitations">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Invitations
                            </div>
                        </Route>
                        <Route path="/user/achievements">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Achievements
                            </div>
                        </Route>
                        <Route path="/user/settings">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Settings
                            </div>
                        </Route>
                    </Switch>

                    <div className="bg-yellow-300 h-screen hidden xl:block xl:w-80">
                        Widgets
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
