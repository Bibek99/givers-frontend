import React from 'react';
import { useState } from 'react';
import AdminSidebar from '../../components/Sidebars/AdminSidebar';
import DashboardNavbar from '../../components/navs/DashboardNavbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import RequestListAll from '../../components/admin/RequestListAll';
import RequestUserDetails from '../../components/admin/RequestUserDetails';
import ListUserAll from '../../components/admin/ListUserAll';

const OrgDashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const { isAuthenticated, userInfo = false } = useSelector(
        (state) => state.userLogin
    );

    if (!isAuthenticated) {
        const { staff = false } = userInfo;
        if (!staff) {
            return <Redirect to="/login" />;
        }
    }

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <AdminSidebar
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
                        <Route path="/admin" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Dashboard
                            </div>
                        </Route>
                        <Route path="/admin/users" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <ListUserAll />
                            </div>
                        </Route>
                        <Route path="/admin/requests" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <RequestListAll />
                            </div>
                        </Route>
                        <Route path="/admin/requests/:id" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <RequestUserDetails />
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
