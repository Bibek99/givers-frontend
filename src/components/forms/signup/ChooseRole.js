import React from "react"
import { ReactComponent as IndividualIcon } from "../../../assets/individual.svg"
import { ReactComponent as OrgIcon } from "../../../assets/org.svg"
import { CheckIcon } from "@heroicons/react/outline"
import PropTypes from "prop-types"

/*
 * * User role choose during the signup for a new account
 */
const ChooseRole = ({
    selectUser,
    selectOrg,
    handleUserRoleClick,
    handleOrgRoleClick,
}) => {
    return (
        <div className="mt-10 bg-white p-8">
            <div className="flex flex-col text-center">
                <h1 className="text-3xl font-semibold mb-8">
                    Choose Your Role
                </h1>
                <div className="flex flex-col md:flex-row text-center justify-center space-y-10 md:space-x-10 md:space-y-0">
                    <div>
                        <div
                            className={`relative border-4 rounded-xl flex flex-col justify-center items-center w-80 h-80 mx-auto md:mx-0 cursor-pointer ${
                                selectUser ? "border-green-500" : ""
                            }`}
                            onClick={() => handleUserRoleClick()}
                        >
                            <IndividualIcon />
                            <span className="text-lg font-medium text-gray-500 mt-6">
                                Volunteer
                            </span>
                            {selectUser && (
                                <div className="absolute left-36 top-73 bg-green-500 text-white rounded-full p-2">
                                    <CheckIcon className="h-6 w-6" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <div
                            className={`relative border-4 rounded-xl flex flex-col justify-center items-center w-80 h-80 mx-auto md:mx-0 cursor-pointer ${
                                selectOrg ? "border-green-500" : ""
                            }`}
                            onClick={() => handleOrgRoleClick()}
                        >
                            <OrgIcon />
                            <span className="text-lg font-medium text-gray-500 mt-6">
                                Organization
                            </span>
                            {selectOrg && (
                                <div className="absolute left-36 top-73 bg-green-500 text-white rounded-full p-2">
                                    <CheckIcon className="h-6 w-6" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseRole

ChooseRole.propTypes = {
    selectUser: PropTypes.bool,
    selectOrg: PropTypes.bool,
    handleUserRoleClick: PropTypes.func,
    handleOrgRoleClick: PropTypes.func,
}
