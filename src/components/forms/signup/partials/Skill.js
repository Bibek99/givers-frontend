import { CheckIcon } from "@heroicons/react/solid"
import React from "react"
import { useState } from "react"
import PropTypes from "prop-types"

const Skill = ({ appendSkill, selectedSkills, skill }) => {
    const [selectedState, setSelectedState] = useState(
        selectedSkills.includes(skill.skills)
    )

    return (
        <div
            onClick={() => {
                appendSkill(skill.skills)
                setSelectedState(!selectedState)
            }}
            className={`cursor-pointer border border-gray-200 px-3 py-2 rounded-lg flex flex-row justify-between items-center disabled:cursor-not-allowed ${
                selectedState ? "bg-purple-100 text-purple-500" : ""
            }`}
        >
            <span>{skill.skills}</span>
            <CheckIcon
                className={`h-4 w-4  ${
                    selectedState ? "block" : "hidden"
                }`}
            />
        </div>
    )
}

export default Skill

Skill.propTypes = {
    skill: PropTypes.object,
    appendSkill: PropTypes.func,
    selectedSkills: PropTypes.array,
}
