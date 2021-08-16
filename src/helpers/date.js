export const formatDate = (date) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    const dateArr = date.split("-")

    let newDate = ""

    if (dateArr[2].length > 2) {
        const dayArr = dateArr[2].split("T")
        const timeArr = dayArr[1].split(".")
        let hr = timeArr[0].substring(0, 2)
        const min = timeArr[0].substring(3, 5)
        let timeDay = ""

        if (hr >= 12) {
            hr = hr - 12
            timeDay = "PM"
        } else {
            timeDay = "AM"
        }

        newDate =
            months[parseInt(dateArr[1]) - 1] +
            " " +
            dateArr[2].substring(0, 2) +
            ", " +
            dateArr[0] +
            " " +
            hr +
            ":" +
            min +
            " " +
            timeDay
    } else {
        newDate =
            months[parseInt(dateArr[1]) - 1] +
            " " +
            dateArr[2].substring(0, 2) +
            ", " +
            dateArr[0]
    }

    return newDate
}
