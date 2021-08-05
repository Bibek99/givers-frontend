export const nameAdjuster = (full_name) => {
    let trimmedFullName = '';

    if (full_name.length > 17) {
        trimmedFullName = full_name.substring(0, 14) + '...';
    } else {
        trimmedFullName = full_name;
    }

    return trimmedFullName;
};
