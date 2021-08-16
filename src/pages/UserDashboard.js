import React from "react"
import { useState } from "react"
import UserSidebar from "../components/Sidebars/UserSidebar"
import DashboardNavbar from "../components/navs/DashboardNavbar"
import { Switch, Route, Redirect } from "react-router-dom"
import EventLists from "../components/lists/EventLists"

import UserProfile from "../components/profile/UserProfile"

import { useSelector } from "react-redux"
import EventDetails from "../components/cards/EventDetails"
import RequestAsVolunteer from "../components/forms/requestForm/RequestAsVolunteer"
import InvitationsList from "../components/lists/InvitationsList"

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    const { isAuthenticated, userInfo = false } = useSelector(
        (state) => state.userLogin
    )

    const { verify = false, active = false } = userInfo

    if (!isAuthenticated || !verify || !active) {
        return <Redirect to="/login" />
    }
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <UserSidebar
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
                        <Route path="/user" exact>
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <EventLists />
                            </div>
                        </Route>
                        <Route path="/user/event/:id">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <EventDetails />
                            </div>
                        </Route>
                        <Route path="/user/request/event/:eId">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <RequestAsVolunteer />
                            </div>
                        </Route>
                        <Route path="/user/profile">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                <UserProfile />
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
                                <InvitationsList />
                            </div>
                        </Route>
                        <Route path="/user/settings">
                            <div className="w-full flex space-y-4 flex-col m-5 p-2">
                                Settings
                            </div>
                        </Route>
                    </Switch>

                    <div className="bg-gray-100 hidden xl:block xl:w-80"></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
