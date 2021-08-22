import PropTypes from "prop-types"
import React from "react"

const AgeRange = ({ register }) => {
    return (
        <div className="flex flex-col space-y-2">
            <span>Age</span>
            <div className="flex flex-row justify-around space-x-2 w-full items-center">
                <input
                    className="w-2/5 border-2 border-gray-200 rounded-lg focus:outline-none h-10 text-center"
                    type="number"
                    name="min_age"
                    placeholder="20"
                    {...register("min_age")}
                ></input>
                <span>to</span>
                <input
                    className="w-2/5 border-2 border-gray-200 rounded-lg focus:outline-none h-10 text-center"
                    type="number"
                    name="max_age"
                    placeholder="40"
                    {...register("max_age")}
                ></input>
            </div>
        </div>
    )
}

export default AgeRange
AgeRange.propTypes = {
    register: PropTypes.func,
}
