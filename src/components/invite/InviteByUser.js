import {
    ArrowLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/outline"
import React, { Fragment } from "react"
import { useHistory, useParams } from "react-router-dom"
import UserRow from "./partials/UserRow"

import { useState } from "react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import Filter from "./partials/Filter"

import { useDispatch, useSelector } from "react-redux"
import { loadUsers } from "../../actions/userActions"
import { BASE_URL } from "../../constants/baseURL"
import { authorizedJSONHeader } from "../../helpers/config"
import axios from "axios"
import ConfirmInviteModal from "../modals/ConfirmInviteModal"

const InviteByUser = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { id: eId } = useParams()

    const {
        userInfo: { access },
    } = useSelector((state) => state.userLogin)

    useEffect(() => {
        dispatch(loadUsers(access))
    }, [])

    const { users, loading } = useSelector((state) => state.usersList)

    const [usersL, setUsers] = useState([])
    const [eventName, setEventName] = useState("")
    const [isOpen, setOpen] = useState(false)
    const [inviteLoading, setInviteLoading] = useState(false)
    const [userId, setUserId] = useState()

    const [tableNumber, setTableNumber] = useState(1)
    const [pageSize] = useState(5)
    const [totalTableNumber, setTotalTableNumber] = useState()

    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        setUsers(users)
        setTableNumber(1)
        setTotalTableNumber(Math.ceil(users.length / pageSize))
    }, [pageSize, users])

    console.log(users)
    const {
        register,
        trigger,
        getValues,
        setValue,
        formState: { errors },
    } = useForm()

    const filterByIndex = (tableNumber) => {
        const outputArray = []
        let to

        if (tableNumber * pageSize < usersL.length) {
            to = tableNumber * pageSize
        } else {
            to = usersL.length
        }

        for (let i = (tableNumber - 1) * pageSize; i < to; i++) {
            outputArray.push(usersL[i])
        }
        setFilteredList(outputArray)
    }

    const getEvent = async () => {
        const getEventUrl = BASE_URL + `/api/events/${eId}/`

        const config = authorizedJSONHeader(access)
        const { data } = await axios.get(getEventUrl, config)

        setEventName(data.name)
    }

    useEffect(() => {
        filterByIndex(tableNumber)
        getEvent()
    }, [tableNumber, usersL])

    const nextTablePage = () => {
        if (tableNumber < totalTableNumber) {
            setTableNumber(tableNumber + 1)
        }
    }

    const previousTablePage = () => {
        if (tableNumber > 1) {
            setTableNumber(tableNumber - 1)
        }
    }

    const inviteUser = async (uId, description) => {
        try {
            setInviteLoading(true)
            const inviteUserUrl =
                BASE_URL + `/api/invite/${uId}/${eId}/`

            const config = authorizedJSONHeader(access)

            const postData = {
                description,
                read: "False",
                created_at: "",
            }

            const { data } = await axios.post(
                inviteUserUrl,
                postData,
                config
            )
            console.log(data)
            if (data) {
                setInviteLoading(false)
                setOpen(false)
            }
        } catch (error) {
            setInviteLoading(false)
            setOpen(false)
        }
    }

    return (
        <Fragment>
            {loading && <h1>Loading</h1>}
            <div className="bg-white rounded-lg">
                <button
                    onClick={() => history.goBack()}
                    className="inline-flex  px-8 mt-8 focus:outline-none"
                >
                    <ArrowLeftIcon className="h-6 w-6" />
                    <span className="ml-1">Go Back</span>
                </button>
                <div className="flex flex-col">
                    <p className="text-center font-medium text-3xl my-8">
                        Showing all Users
                    </p>
                    <p className="px-6 text-lg font-medium">
                        Event Name : {eventName}
                    </p>
                    <div className="px-6 my-6">
                        <hr />
                    </div>
                    <div className="grid grid-cols-8 gap-x-2">
                        <div className="col-span-2 pl-6 pr-2">
                            <div className="flex flex-col space-y-2">
                                <h1 className="text-lg font-medium">
                                    Filters
                                </h1>
                                <hr />
                                <Filter
                                    register={register}
                                    getValues={getValues}
                                    setValue={setValue}
                                    trigger={trigger}
                                    errors={errors}
                                    access={access}
                                />
                            </div>
                        </div>
                        <div className="col-span-6 px-6 mt-2 mb-8 flex flex-col">
                            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>

                                                    <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Name
                                                    </th>
                                                    <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Gender
                                                    </th>

                                                    <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Address
                                                    </th>
                                                    <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Age
                                                    </th>
                                                    <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Skills
                                                    </th>
                                                    <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                                </tr>
                                            </thead>
                                            {usersL && usersL ? (
                                                <tbody className="divide-y divide-gray-200">
                                                    {filteredList.map(
                                                        (
                                                            user,
                                                            index
                                                        ) => {
                                                            return (
                                                                <React.Fragment
                                                                    key={
                                                                        index
                                                                    }
                                                                >
                                                                    <UserRow
                                                                        user={
                                                                            user
                                                                        }
                                                                        inviteUser={
                                                                            inviteUser
                                                                        }
                                                                        isOpen={
                                                                            isOpen
                                                                        }
                                                                        setOpen={
                                                                            setOpen
                                                                        }
                                                                        setUserId={
                                                                            setUserId
                                                                        }
                                                                    />
                                                                </React.Fragment>
                                                            )
                                                        }
                                                    )}
                                                </tbody>
                                            ) : (
                                                <div>Loading</div>
                                            )}
                                        </table>
                                    </div>
                                    <div className="flex flex-row justify-between items-center mt-4">
                                        <div className="flex flex-row space-x-2">
                                            <button
                                                onClick={() =>
                                                    previousTablePage()
                                                }
                                                className="h-8 w-8 border border-gray-300 flex flex-row justify-center items-center rounded-md"
                                            >
                                                <ChevronLeftIcon className="h-4 w-4" />
                                            </button>
                                            <button className="h-8 w-8 border border-purple-500 text-purple-500 font-medium flex flex-row justify-center items-center rounded-md">
                                                {users.length
                                                    ? tableNumber
                                                    : 0}
                                            </button>
                                            <div className="flex flex-row justify-center items-center">
                                                of{" "}
                                            </div>
                                            <button className="h-8 w-8 border border-gray-300 flex flex-row justify-center items-center rounded-md">
                                                {totalTableNumber}
                                            </button>
                                            <button
                                                onClick={() =>
                                                    nextTablePage()
                                                }
                                                className="h-8 w-8 border border-gray-300 flex flex-row justify-center items-center rounded-md"
                                            >
                                                <ChevronRightIcon className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <div>
                                            {/* Showing{" "}
                                            {users.length > pageSize
                                                ? pageSize
                                                : users.length}{" "} */}
                                            Total : {users.length}{" "}
                                            records
                                        </div>
                                        <ConfirmInviteModal
                                            isOpen={isOpen}
                                            setOpen={setOpen}
                                            loading={inviteLoading}
                                            inviteUser={inviteUser}
                                            userId={userId}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default InviteByUser

// InviteByUser.propTypes = {
//     users: PropTypes.array,
//     loadFilteredUser: PropTypes.func,
// }

// const [users] = useState([])

// const loadUsers = async () => {
//     const loadUsersUrl = BASE_URL + "/api/showallvolunteers/"
//     const config = authorizedJSONHeader(access)

//     const { data } = await axios.get(loadUsersUrl, config)

//     if (data) {
//         setUsers(data)
//     }
//     console.log("users", data)
// }

// useEffect(() => {
//     loadUsers()
// }, [])

// const loadFilteredUser = async (
//     gender,
//     province,
//     district,
//     municipality,
//     skills
// ) => {
//     const loadFilteredUserUrl =
//         BASE_URL +
//         `/api/advance_search/?${
//             gender ? `gender=${gender}&` : ""
//         }${province ? `province=${province}&` : ""}${
//             district ? `district=${district}&` : ""
//         }${municipality ? `municipality=${municipality}&` : ""}${
//             skills
//                 ? `skills_1=${skills}&skills_2=${skills}&skills_3=${skills}`
//                 : ""
//         }`

//     console.log(
//         "url",
//         loadFilteredUserUrl.substring(
//             0,
//             loadFilteredUserUrl.length - 1
//         )
//     )

//     const config = authorizedJSONHeader(access)
//     const { data } = await axios.get(
//         loadFilteredUserUrl.substring(
//             0,
//             loadFilteredUserUrl.length - 1
//         ),
//         config
//     )
//     setUsers(data)
//     console.log("filered users", data)
// }

// console.log("users", users)
