export const formatDate = (date) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    var dateArr = date.split('-');

    const newDate =
        months[parseInt(dateArr[1])] +
        ' ' +
        dateArr[2].substring(0, 2) +
        ', ' +
        dateArr[0];

    return newDate;
};
