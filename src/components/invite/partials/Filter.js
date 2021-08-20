import { ChevronDownIcon } from "@heroicons/react/outline"
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import infoNepal from "info-nepal"
import { FilterIcon } from "@heroicons/react/solid"

const provinces = [
    {
        id: 1,
        name: "Province 1",
    },
    {
        id: 2,
        name: "Province 2",
    },
    {
        id: 3,
        name: "Bagmati Province",
    },
    {
        id: 4,
        name: "Gandaki Province",
    },
    {
        id: 5,
        name: "Lumbini Province",
    },
    {
        id: 6,
        name: "Karnali Province",
    },
    {
        id: 7,
        name: "Sudurpashchim Province",
    },
]

const Filter = ({ register, trigger, errors }) => {
    const [provinceName, setProvinceName] = useState("")
    const [districtName, setDistrictName] = useState("")
    const [districts, setDistricts] = useState("")
    const [municipalities, setMunicipalities] = useState("")

    const computeDistrictForProvince = (provinceName) => {
        if (!provinceName) {
            setDistricts(infoNepal.allDistricts)
        } else {
            provinces.map((province) => {
                if (province.name === provinceName) {
                    const id = province.id
                    setDistricts(
                        infoNepal.districtsOfProvince[id.toString()]
                    )
                }
            })
        }
    }

    const computeLocalBodiesForDistrict = (districtName) => {
        setMunicipalities(infoNepal.localBodies[districtName])
    }

    useEffect(() => {
        computeDistrictForProvince(provinceName)
        computeLocalBodiesForDistrict(districtName)
    }, [provinceName, districtName])

    console.log(districts)
    console.log(municipalities)

    return (
        <div className="flex flex-col space-y-4 pt-4 py-8">
            <div>
                <label htmlFor="gender">Gender</label>
                <div className="relative">
                    <select
                        name="gender"
                        defaultValue=""
                        className="mt-2 px-6 py-2 h-12 w-full appearance-none border-2 border-gray-200 bg-gray-50 rounded-lg focus:outline-none"
                        {...register("gender")}
                    >
                        <option value="" disabled>
                            Choose a gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div className="pointer-events-none absolute top-6 right-0 flex items-center px-3 text-gray-700">
                        <ChevronDownIcon className="h-5 w-5" />
                    </div>
                </div>
            </div>
            <hr className="border-2 border-dashed" />
            <h1 className="font-medium">Address</h1>
            <div>
                <label htmlFor="province">Province</label>
                <div className="relative">
                    <select
                        name="province"
                        defaultValue={"Choose a Province"}
                        className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2"
                        {...register("province", {
                            required: "Please choose a province",
                        })}
                        onChange={(e) => {
                            trigger("province")
                            setProvinceName(e.target.value)
                        }}
                    >
                        <option value="Choose a Province" disabled>
                            Choose a Province
                        </option>
                        {provinces &&
                            provinces.map((province) => {
                                return (
                                    <option
                                        key={province.id}
                                        value={province.name}
                                    >
                                        {province.name}
                                    </option>
                                )
                            })}
                    </select>
                    <div className="pointer-events-none absolute top-6 right-0 flex items-center px-3 text-gray-700">
                        <ChevronDownIcon className="h-5 w-5" />
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="district">District</label>
                <div className="relative">
                    <select
                        name="district"
                        defaultValue={"Choose a District"}
                        className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2"
                        {...register("district", {
                            required: "Please choose a district",
                        })}
                        onChange={(e) => {
                            trigger("district")
                            setDistrictName(e.target.value)
                        }}
                    >
                        <option value="Choose a District" disabled>
                            Choose a District
                        </option>
                        {districts &&
                            districts.map((district, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={district}
                                    >
                                        {district}
                                    </option>
                                )
                            })}
                    </select>
                    <div className="pointer-events-none absolute top-6 right-0 flex items-center px-3 text-gray-700">
                        <ChevronDownIcon className="h-5 w-5" />
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="municipality">
                    Municipality or VDC
                </label>
                <div className="relative">
                    <select
                        name="municipality"
                        defaultValue={"Choose a Municipality"}
                        className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2"
                        {...register("municipality", {
                            required: "Please choose a Municipality",
                        })}
                        onChange={(e) => {
                            trigger("municipality")
                        }}
                    >
                        <option
                            value="Choose a Municipality"
                            disabled
                        >
                            Choose a Municipality
                        </option>
                        {municipalities &&
                            municipalities.map(
                                (municipality, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={municipality}
                                        >
                                            {municipality}
                                        </option>
                                    )
                                }
                            )}
                    </select>
                    <div className="pointer-events-none absolute top-6 right-0 flex items-center px-3 text-gray-700">
                        <ChevronDownIcon className="h-5 w-5" />
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="ward">Ward No.</label>
                <input
                    type="number"
                    placeholder="Ward Number"
                    className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none"
                    {...register("ward", {
                        required: "Please enter ward number",
                        validate: (value) =>
                            value < 1
                                ? "Please enter a valid ward number"
                                : "",
                    })}
                    onKeyUp={() => trigger("ward")}
                />
                {errors.ward && (
                    <div className="text-red-500 mt-1 text-sm">
                        {errors.ward.message}
                    </div>
                )}
            </div>
            <hr className="border-2 border-dashed" />
            <div>Skills</div>
            <div className="flex flex-row space-x-4 py-4">
                <button className="px-3 py-2 border-2 border-purple-500 text-purple-500 rounded-lg w-1/2 mx-auto">
                    Reset Filter
                </button>
                <button className="px-3 py-2 border-2 border-purple-500 bg-purple-500 text-white rounded-lg w-1/2 mx-auto flex flex-row space-x-2 justify-center items-center">
                    <span>Filter</span>
                    <span>
                        <FilterIcon className="h-5 w-5" />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Filter

Filter.propTypes = {
    register: PropTypes.func,
    trigger: PropTypes.func,
    errors: PropTypes.object,
}
