import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const EventRow = ({ event }) => {
    return (
        <Fragment>
            <tr className="group hover:bg-gray-50 text-gray-500 text-center">
                <td className="px-6 py-4 whitespace-nowrap">
                    {event.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {event.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {event.start_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {event.end_date}
                </td>
                <td>
                    <Link
                        className="text-purple-500"
                        to={`/org/invite/event/${event.id}`}
                    >
                        View All
                    </Link>
                </td>
            </tr>
        </Fragment>
    )
}

export default EventRow

EventRow.propTypes = {
    event: PropTypes.object,
}
