import React from 'react';
import { useState } from 'react';
import OrgSidebar from '../components/Sidebars/OrgSidebar';
import DashboardNavbar from '../components/navs/DashboardNavbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import EventLists from '../components/lists/EventLists';


import OrgProfile from '../components/profile/OrgProfile';

import CreateEvent from '../components/forms/createEvent/CreateEvent';

import { useSelector } from 'react-redux';
import EventDetails from '../components/cards/EventDetails';
import EventCreateWrapper from '../components/forms/createEvent/EventCreateWrapper';
import RequestsByEvents from '../components/lists/RequestsByEvents';
import RequestsByUser from '../components/lists/RequestsByUser';
import RequestByUserDetail from '../components/lists/RequestByUserDetail';


const OrgDashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const { isAuthenticated } = useSelector((state) => state.userLogin);

    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }

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
                        <Route path="/org/event/:id" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <EventDetails />
                            </div>
                        </Route>
                        <Route path="/org/create" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <EventCreateWrapper />
                            </div>
                        </Route>
                        <Route path="/org/profile" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <OrgProfile />
                            </div>
                        </Route>
                        <Route path="/org/history" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Events History
                            </div>
                        </Route>
                        <Route path="/org/dashboard" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Dashboard
                            </div>
                        </Route>
                        <Route path="/org/requests" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <RequestsByEvents />
                            </div>
                        </Route>
                        <Route path="/org/requests/event/:id" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <RequestsByUser />
                            </div>
                        </Route>
                        <Route
                            path="/org/requests/event/:eid/detail/:uid"
                            exact
                        >
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <RequestByUserDetail />
                            </div>
                        </Route>
                        <Route path="/org/settings" exact>
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
