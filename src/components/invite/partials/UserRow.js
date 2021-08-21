import React from "react"
import PropTypes from "prop-types"

const UserRow = ({ user }) => {
    const avatar = user.images
    return (
        <tr className="text-center">
            <td className="px-6 py-4">
                <img
                    src={avatar}
                    alt="avatar"
                    className="h-14 w-14 rounded-full border-2 object-cover mx-auto"
                />
            </td>
            <td className="px-6 py-4">{user.full_name}</td>
            <td className="px-6 py-4">{user.gender}</td>
            <td className="px-6 py-4">{user.address}</td>
            <td className="px-6 py-4">
                {user.skills_1} , {user.skills_2} , {user.skills_3}
            </td>
            <td className="px-6 py-4"></td>

            <td className="px-6 py-4 text-purple-500">Invite</td>
        </tr>
    )
}

export default UserRow

UserRow.propTypes = {
    user: PropTypes.object,
}
