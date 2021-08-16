import React, { useEffect, useRef } from "react"
import { ReactComponent as GiversLogo } from "../../assets/givers-logo.svg"
import { XIcon } from "@heroicons/react/outline"
import { LogoutIcon } from "@heroicons/react/solid"
import { NavLink } from "react-router-dom"
import { adminNavLinkRoutes } from "../../routes/adminNavLinkRoutes"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../actions/userActions"
import { nameAdjuster } from "../../helpers/nameAdjuster"
import PropTypes from "prop-types"

const AdminSidebar = ({ isSidebarOpen, setSidebarOpen }) => {
    // Mutable Object stores current instance of values
    const trigger = useRef(null)
    const sidebar = useRef(null)

    // Closing the navbar on clicking outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return
            if (
                !isSidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return
            setSidebarOpen(false)
        }
        document.addEventListener("click", clickHandler)
        return () =>
            document.removeEventListener("click", clickHandler)
    })

    // Closing the navbar on pressing the Escape key
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!isSidebarOpen || keyCode !== 27) return
            setSidebarOpen(false)
        }
        document.addEventListener("keydown", keyHandler)
        return () =>
            document.removeEventListener("keydown", keyHandler)
    })

    const dispatch = useDispatch()

    const { userInfo } = useSelector((state) => state.userLogin)

    const {
        refresh,
        access,
        images,
        full_name: fullName,
        username,
    } = userInfo

    const trimmedFullName = nameAdjuster(fullName)

    const avatar = images

    const handleLogOut = () => {
        dispatch(logout(refresh, access))
    }

    return (
        <div className="lg:w-80">
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-white bg-opacity-70 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
                    isSidebarOpen
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
                aria-hidden="true"
            ></div>

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebar}
                className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-80 flex-shrink-0 bg-white py-4 transition-transform duration-200 ease-in-out ${
                    isSidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-80"
                }`}
            >
                {/* Sidebar Header */}
                <div className="flex justify-between px-4">
                    {/* Sidebar Close Button */}
                    <div className="w-full flex flex-row justify-between text-center pb-5 pr-3 sm:px-2 ">
                        <GiversLogo />
                        <button
                            ref={trigger}
                            className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
                            onClick={() => {
                                setSidebarOpen(!isSidebarOpen)
                            }}
                            aria-controls="sidebar"
                            aria-expanded={isSidebarOpen}
                        >
                            <XIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                <hr className="lg:border-gray-500 mt-px" />

                {/* Sidebar Contents */}
                <div className="flex flex-col px-4 py-4 space-y-4">
                    {adminNavLinkRoutes.map((route) => {
                        return (
                            <React.Fragment key={route.index}>
                                {route.hr && (
                                    <hr className="border-gray-300" />
                                )}
                                <NavLink
                                    exact={route.exact}
                                    to={route.path}
                                    activeClassName="bg-purple-100 text-purple-500"
                                    className="rounded-lg text-gray-600"
                                >
                                    <div className="flex flex-row justify-between px-4 py-2 align-middle">
                                        <div className="flex flex-row align-middle">
                                            {route.icon}
                                            <span className="ml-4 font-medium text-lg">
                                                {route.name}
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </React.Fragment>
                        )
                    })}
                </div>
                {/* Org Avatar */}
                <div className="absolute left-0 bottom-0 w-full">
                    <div className="flex flex-row p-1 justify-between items-center border border-gray-200 rounded-lg m-4">
                        <div className="inline-flex items-center hover:bg-gray-200 p-3 rounded-lg flex-1">
                            <img
                                src={avatar}
                                className="h-12 w-12 rounded-full object-cover mr-4"
                                alt="org avatar"
                            />

                            <div className="flex flex-col overflow-hidden">
                                <span className="text font-medium ">
                                    {trimmedFullName}
                                </span>
                                <span className="text-sm text-gray-400 ">
                                    @{username}
                                </span>
                            </div>
                        </div>

                        <div
                            className="px-3 hover:bg-gray-200 rounded-lg py-6"
                            onClick={() => handleLogOut()}
                        >
                            <LogoutIcon className="h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar

AdminSidebar.propTypes = {
    isSidebarOpen: PropTypes.bool,
    setSidebarOpen: PropTypes.func,
}
