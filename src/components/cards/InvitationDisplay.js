import React from "react"
import PropTypes from "prop-types"
import { relativeDate } from "../../helpers/date"
import { Link } from "react-router-dom"

const InvitationDisplay = ({ invite }) => {
    return (
        <div className="rounded-lg px-8 hover:bg-gray-50 ">
            <div className="flex flex-col p-6 max-w-screen-lg mx-auto">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row space-x-8 items-center">
                        <img
                            src={invite.event.user.images}
                            className="h-16 w-16 rounded-full border-2 border-gray-300 object-cover"
                        />
                        <div className="flex flex-col space-y-2 max-w-xl">
                            <div className="text-lg">
                                <span className="font-medium">
                                    {invite.event.user.full_name}
                                </span>{" "}
                                invited to join you an event named{" "}
                                <span className="font-medium">
                                    {invite.event.name}.
                                </span>
                            </div>
                            <div className="text-sm text-purple-500">
                                {relativeDate(invite.created_at)}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link
                            to={`/user/event/${invite.event.id}`}
                            className="text-white px-6 py-3 rounded-lg text-lg bg-purple-500"
                        >
                            View Event Details
                        </Link>
                    </div>
                </div>
            </div>
            <hr className="max-w-screen-lg mx-auto" />
        </div>
    )
}

export default InvitationDisplay

InvitationDisplay.propTypes = {
    invite: PropTypes.object,
}
