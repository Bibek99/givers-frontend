import React, { useState } from "react"
import PropTypes from "prop-types"
import { LinkIcon, GlobeAltIcon } from "@heroicons/react/outline"
import { ReactComponent as Facebook } from "../../../assets/fb-icon.svg"
import { ReactComponent as Instagram } from "../../../assets/insta-icon.svg"
import { ReactComponent as Twitter } from "../../../assets/twitter-icon.svg"

import maleAvatar from "../../../assets/maleplaceholder.jpg"
import femaleAvatar from "../../../assets/femaleplaceholder.jpg"
import orgAvatar from "../../../assets/orgplaceholder.png"
import { useEffect } from "react"
import Skill from "./partials/Skill"

/*
 * * Component handles the social side of the user
 * * Choosing an avatar for display
 * * Entering all the social handles
 */

const SocialsForm = ({
    selectOrg,
    setSelectFile,
    register,
    getValues,
    trigger,
    skillsList,
    setSkillsList,
    selectedSkillsList,
    setSelectedSkillsList,
}) => {
    const [imageAvatar, setImageAvatar] = useState()
    const [skList] = useState(skillsList)
    const [selectedSkills, setSelectedSkills] = useState(
        selectedSkillsList
    )

    const handleChange = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImageAvatar(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])

        const file = e.target.files[0]
        setSelectFile(file)
    }

    console.log("selectedSkills", selectedSkills)

    const appendSkill = (skill) => {
        const preArray = selectedSkills

        if (preArray.includes(skill)) {
            for (let i = 0; i < preArray.length; i++) {
                if (preArray[i] === skill) {
                    preArray.splice(i, 1)
                }
            }
        } else {
            preArray.push(skill)
        }

        setSelectedSkillsList(preArray)
        setSkillsList(skList)
    }

    console.log("selectedSkillsList", selectedSkillsList)

    useEffect(() => {
        setSelectedSkills(selectedSkillsList)

        if (selectedSkills.length > 3) {
            console.log("more than three")
        }
    }, [selectedSkillsList, selectedSkills])

    return (
        <div className="flex flex-col max-w-screen-sm mt-20 mx-auto">
            <div className="flex flex-col space-y-8 px-8 ">
                <div>
                    <h1 className="text-3xl font-semibold flex text-center justify-center">
                        Add more personality to your profile
                    </h1>
                </div>
                <div className="p-4 border border-gray-300 rounded-xl">
                    <h1 className="text-lg mb-5">
                        Avatar <span className="text-red-500">*</span>
                    </h1>
                    <div className="flex flex-row items-center space-x-12">
                        <img
                            className="object-cover rounded-full border-2 w-36 h-36"
                            src={
                                imageAvatar
                                    ? imageAvatar
                                    : selectOrg
                                    ? orgAvatar
                                    : getValues("gender") === "male"
                                    ? maleAvatar
                                    : femaleAvatar
                            }
                            alt="avatar"
                        />
                        <div className="relative">
                            <div className="absolute px-4 py-2 bg-purple-100 text-purple-500 justify-center rounded-lg">
                                Upload Profile Image
                            </div>
                            <input
                                className="w-full h-full opacity-0"
                                type="file"
                                name="image"
                                onInput={(e) => {
                                    handleChange(e)
                                    trigger("avatar")
                                }}
                                {...register("avatar", {
                                    required:
                                        "Please upload an avatar",
                                })}
                                required
                            />
                        </div>
                    </div>
                </div>
                {!selectOrg && (
                    <div className="p-4 border border-gray-300 rounded-xl">
                        <h1 className="text-lg mb-5">
                            Skills{" "}
                            <span className="text-red-500">*</span>
                            <br />
                            <span className="text-sm w-full text-gray-400">
                                User can selected up to three skills.
                                Greater than that will not be
                                registered.
                            </span>
                        </h1>
                        <div className="grid grid-cols-2 gap-2">
                            {skillsList.map((skill, index) => {
                                return (
                                    <Skill
                                        key={index}
                                        appendSkill={appendSkill}
                                        skill={skill}
                                        selectedSkills={
                                            selectedSkills
                                        }
                                    />
                                )
                            })}
                        </div>
                    </div>
                )}

                <div className="space-y-4 border border-gray-300 p-4 rounded-xl">
                    <h1 className="text-lg">Social handles</h1>
                    <div className="flex items-center text-center">
                        <Facebook className="h-8 w-8 mr-8" />
                        <div className="flex-1">
                            <div className="relative">
                                <LinkIcon className="h-6 w-6 absolute left-3 top-5" />
                                <input
                                    type="url"
                                    name="facebook"
                                    className="bg-gray-50 border-2 border-gray-200 py-2 h-12 px-12 mt-2 rounded-lg focus:outline-none w-full"
                                    {...register("facebook")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-8 items-center  text-center">
                        <div>
                            <Instagram className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                            <div className="relative ">
                                <LinkIcon className="h-6 w-6 absolute left-3 top-5" />
                                <input
                                    type="url"
                                    name="instagram"
                                    className="bg-gray-50 border-2 border-gray-200 py-2 h-12 px-12 mt-2 rounded-lg focus:outline-none w-full"
                                    {...register("instagram")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-8 items-center text-center">
                        <div>
                            <Twitter className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <LinkIcon className="h-6 w-6 absolute left-3 top-5" />
                                <input
                                    type="url"
                                    name="twitter"
                                    className="bg-gray-50 border-2 border-gray-200 py-2 h-12 px-12 mt-2 rounded-lg focus:outline-none w-full"
                                    {...register("twitter")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {selectOrg && (
                    <div className="border border-gray-300 p-4 rounded-xl">
                        <h1 className="text-lg mb-4">
                            Organization Website{" "}
                            <span className="text-red-500">*</span>
                        </h1>
                        <div className="flex flex-row space-x-8 items-center text-center">
                            <div>
                                <GlobeAltIcon className="h-8 w-8" />
                            </div>
                            <div className="flex-1">
                                <div className="relative">
                                    <LinkIcon className="h-6 w-6 absolute left-3 top-5" />
                                    <input
                                        type="url"
                                        name="website"
                                        className="bg-gray-50 border-2 border-gray-200 py-2 h-12 px-12 mt-2 rounded-lg focus:outline-none w-full"
                                        {...register("website")}
                                        onKeyUp={() => {
                                            trigger("website")
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SocialsForm

SocialsForm.propTypes = {
    selectUser: PropTypes.bool,
    selectOrg: PropTypes.bool,
    setSelectFile: PropTypes.func,
    register: PropTypes.func,
    errors: PropTypes.object,
    isValid: PropTypes.bool,
    handleSubmit: PropTypes.func,
    getValues: PropTypes.func,
    trigger: PropTypes.func,
    skillsList: PropTypes.array,
    setSkillsList: PropTypes.func,
    selectedSkillsList: PropTypes.array,
    setSelectedSkillsList: PropTypes.func,
}
