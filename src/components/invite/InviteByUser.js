import {
    ArrowLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/outline"
import React from "react"
import { useHistory } from "react-router-dom"
import UserRow from "./partials/UserRow"
import { fakeData } from "./fakeData"
import { useState } from "react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import Filter from "./partials/Filter"

const InviteByUser = () => {
    const history = useHistory()

    const [tableNumber, setTableNumber] = useState(1)
    const [totalTableNumber] = useState(fakeData.length / 10)
    const [filteredList, setFilteredList] = useState([])
    // const [showFilter, setShowFilter] = useState(false)

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm()

    const filterByIndex = (tableNumber) => {
        const outputArray = []
        for (
            let i = (tableNumber - 1) * 10;
            i < tableNumber * 10;
            i++
        ) {
            outputArray.push(fakeData[i])
        }
        setFilteredList(outputArray)
    }

    useEffect(() => {
        filterByIndex(tableNumber)
    }, [tableNumber])

    console.log(filteredList)

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

    return (
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
                    Event Name :
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
                                trigger={trigger}
                                errors={errors}
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
                                                    ID
                                                </th>
                                                <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Gender
                                                </th>
                                                <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Phone Number
                                                </th>
                                                <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Address
                                                </th>
                                                <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Skills
                                                </th>
                                                <th className="group px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {filteredList.map(
                                                (user, index) => {
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
                                                            />
                                                        </React.Fragment>
                                                    )
                                                }
                                            )}
                                        </tbody>
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
                                            {tableNumber}
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
                                        Showing 10 records of{" "}
                                        {totalTableNumber} records
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InviteByUser
