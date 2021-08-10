export const jsonHeader = () => {
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };

    return config;
};

export const multipartHeader = () => {
    const config = {
        headers: {
            "Content-type": "multipart/form-data",
        },
    };

    return config;
};

export const authorizedJSONHeader = (token) => {
    const config = {
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    return config;
};

export const authorizedMultiPartHeader = (token) => {
    const config = {
        headers: {
            "Content-type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    };

    return config;
};
