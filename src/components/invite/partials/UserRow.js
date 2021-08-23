import React from "react"
import PropTypes from "prop-types"

const UserRow = ({ user, setOpen, setUserId }) => {
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
            <td className="px-6 py-4">{user.district}</td>
            <td className="px-6 py-4">{user.age}</td>
            <td className="px-6 py-4">{user.skills}</td>

            <td
                onClick={() => {
                    setOpen(true)
                    setUserId(user.id)
                }}
                className="cursor-pointer px-6 py-4 text-purple-500 font-medium"
            >
                Invite
            </td>
        </tr>
    )
}

export default UserRow

UserRow.propTypes = {
    user: PropTypes.object,
    inviteUser: PropTypes.func,
    setOpen: PropTypes.func,
    setUserId: PropTypes.func,
}
