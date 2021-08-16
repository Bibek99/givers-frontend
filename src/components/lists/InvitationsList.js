import axios from "axios"
import React from "react"
import { useCallback } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { BASE_URL } from "../../constants/baseURL"
import { authorizedJSONHeader } from "../../helpers/config"
import InvitationDisplay from "../cards/InvitationDisplay"

const InvitationsList = () => {
    const {
        userInfo: { id, access },
    } = useSelector((state) => state.userLogin)

    const [invitationsList, setInvitationsList] = useState(null)

    const loadInvitations = useCallback(async () => {
        const loadInvitationsUrl = BASE_URL + `/api/invite/${id}/`

        const config = authorizedJSONHeader(access)
        const { data } = await axios.get(loadInvitationsUrl, config)

        if (data) {
            setInvitationsList(data)
        }
    }, [access, id])

    useEffect(() => {
        loadInvitations()
    }, [])

    console.log(invitationsList)
    return (
        <div className="flex flex-col bg-white rounded-lg">
            <div className="flex flex-col">
                <p className="text-center font-medium text-3xl mt-8">
                    Showing all requests
                </p>
            </div>
            <div className="my-8">
                {invitationsList &&
                    invitationsList.map((invite, index) => {
                        return (
                            <InvitationDisplay
                                key={index}
                                invite={invite}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default InvitationsList
