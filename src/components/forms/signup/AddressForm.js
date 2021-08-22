import React from "react"
import infoNepal from "info-nepal"
import PropTypes from "prop-types"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { useEffect } from "react"

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

const AddressForm = ({
    register,
    trigger,
    errors,
    provinceName,
    setProvinceName,
    districtName,
    setDistrictName,
    districts,
    setDistricts,
    municipalities,
    setMunicipalities,
}) => {
    console.log(infoNepal)

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

    return (
        <div className="flex flex-col max-w-screen-sm mt-20 mx-auto">
            <div className="flex flex-col space-y-8 px-8 ">
                <div>
                    <h1 className="text-3xl font-semibold flex text-center justify-center">
                        Tell us where you live
                    </h1>
                </div>
                <div>
                    <label htmlFor="province">
                        Province{" "}
                        <span className="text-red-500">*</span>
                    </label>
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
                            <option
                                value="Choose a Province"
                                disabled
                            >
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
                    <label htmlFor="district">
                        District{" "}
                        <span className="text-red-500">*</span>
                    </label>
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
                            <option
                                value="Choose a District"
                                disabled
                            >
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
                        Municipality{" "}
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <select
                            name="municipality"
                            defaultValue={"Choose a Municipality"}
                            className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2"
                            {...register("municipality", {
                                required:
                                    "Please choose a Municipality",
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
                    <label htmlFor="ward">
                        Ward No.{" "}
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Ward Number"
                        className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none"
                        {...register("ward", {
                            required: "Please enter ward",
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
                <div>
                    <label htmlFor="address">
                        Tole
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Tole"
                        className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none"
                        {...register("address", {
                            required: "Please enter tole",
                        })}
                        onKeyUp={() => trigger("address")}
                    />
                    {errors.address && (
                        <div className="text-red-500 mt-1 text-sm">
                            {errors.address.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AddressForm

AddressForm.propTypes = {
    register: PropTypes.func.isRequired,
    getValues: PropTypes.func.isRequired,
    trigger: PropTypes.func.isRequired,
    errors: PropTypes.object,
    provinceName: PropTypes.string,
    setProvinceName: PropTypes.func,
    districtName: PropTypes.string,
    setDistrictName: PropTypes.func,
    districts: PropTypes.any,
    setDistricts: PropTypes.func,
    municipalities: PropTypes.any,
    setMunicipalities: PropTypes.func,
}
