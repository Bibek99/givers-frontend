import { ChevronDownIcon } from "@heroicons/react/outline"
import React, { useCallback, useEffect, useState } from "react"
import PropTypes from "prop-types"
import infoNepal from "info-nepal"
import { FilterIcon } from "@heroicons/react/solid"
import { BASE_URL } from "../../../constants/baseURL"
import axios from "axios"
import { jsonHeader } from "../../../helpers/config"
import {
    loadFilteredUsers,
    loadUsers,
} from "../../../actions/userActions"
import { useDispatch } from "react-redux"
// import AgeRangePicker from "./AgeRangePicker"
import AgeRange from "./AgeRange"

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

const Filter = ({
    register,
    trigger,
    getValues,
    setValue,
    access,
}) => {
    const [provinceName, setProvinceName] = useState("")
    const [districtName, setDistrictName] = useState("")
    const [municipalityName, setMunicipalityName] = useState("")
    const [districts, setDistricts] = useState("")
    const [municipalities, setMunicipalities] = useState("")
    const [skills, setSkills] = useState([])

    const dispatch = useDispatch()

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

    const loadSkills = useCallback(async () => {
        const loadSkillsUrl = BASE_URL + "/api/skills/"
        const config = jsonHeader()

        const { data } = await axios.get(loadSkillsUrl, config)

        setSkills(data)
    })

    const computeLocalBodiesForDistrict = (districtName) => {
        setMunicipalities(infoNepal.localBodies[districtName])
    }

    useEffect(() => {
        computeDistrictForProvince(provinceName)
        computeLocalBodiesForDistrict(districtName)
        loadSkills()
    }, [provinceName, districtName])

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
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <div className="pointer-events-none absolute top-6 right-0 flex items-center px-3 text-gray-700">
                        <ChevronDownIcon className="h-5 w-5" />
                    </div>
                </div>
            </div>
            <hr className="border-2 border-dashed" />
            <AgeRange register={register} />
            <hr className="border-2 border-dashed" />
            <h1 className="font-medium">Address</h1>
            <div>
                <label htmlFor="province">Province</label>
                <div className="relative">
                    <select
                        name="province"
                        defaultValue={""}
                        className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2"
                        {...register("province")}
                        onChange={(e) => {
                            trigger("province")
                            setProvinceName(e.target.value)
                        }}
                    >
                        <option value="" disabled>
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
                        defaultValue={""}
                        className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2"
                        {...register("district")}
                        onChange={(e) => {
                            trigger("district")
                            setDistrictName(e.target.value)
                        }}
                    >
                        <option value="" disabled>
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
                        defaultValue={""}
                        className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2"
                        {...register("municipality")}
                        onChange={(e) => {
                            trigger("municipality")
                            setMunicipalityName(e.target.value)
                        }}
                    >
                        <option value="" disabled>
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

            <hr className="border-2 border-dashed" />
            <div className="">
                <h1>Skills</h1>
                <div className="relative">
                    <select
                        name="skills"
                        defaultValue={""}
                        className="border-2 border-gray-200 appearance-none mt-2 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none focus:ring-2"
                        {...register("skills")}
                        onChange={(e) => {
                            trigger("skills")
                        }}
                    >
                        <option value="" disabled>
                            Choose a Skill
                        </option>
                        {skills &&
                            skills.map((skill) => {
                                return (
                                    <option
                                        key={skill.id}
                                        value={skill.skills}
                                    >
                                        {skill.skills}
                                    </option>
                                )
                            })}
                    </select>

                    <div className="pointer-events-none absolute top-6 right-0 flex items-center px-3 text-gray-700">
                        <ChevronDownIcon className="h-5 w-5" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-4 py-4">
                <button
                    onClick={() => {
                        setProvinceName("")
                        setDistrictName("")
                        setMunicipalityName("")
                        setValue("gender", "")
                        setValue("province", "")
                        setValue("district", "")
                        setValue("municipality", "")
                        setValue("max_age", "")
                        setValue("min_age", "")
                        setValue("skills", "")
                        dispatch(loadUsers(access))
                    }}
                    className="px-3 py-2 border-2 border-purple-500 text-purple-500 rounded-lg w-1/2 mx-auto"
                >
                    Reset Filter
                </button>
                <button
                    onClick={() =>
                        dispatch(
                            loadFilteredUsers(
                                getValues("gender"),
                                provinceName,
                                districtName,
                                municipalityName,
                                getValues("skills"),
                                getValues("min_age"),
                                getValues("max_age"),
                                access
                            )
                        )
                    }
                    className="px-3 py-2 border-2 border-purple-500 bg-purple-500 text-white rounded-lg w-1/2 mx-auto flex flex-row space-x-2 justify-center items-center"
                >
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
    access: PropTypes.string,
    trigger: PropTypes.func,
    getValues: PropTypes.func,
    setValue: PropTypes.func,
}
