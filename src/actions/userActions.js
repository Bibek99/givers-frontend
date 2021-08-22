import axios from "axios"
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    USER_CREATE_CLEAR,
    USERS_LIST_LOAD_REQUEST,
    USERS_LIST_LOAD_SUCCESS,
    USERS_LIST_LOAD_FAIL,
    USERS_FILTER_LOAD_REQUEST,
    USERS_FILTER_LOAD_SUCCESS,
    USERS_FILTER_LOAD_FAIL,
} from "../constants/userConstants"
import { BASE_URL } from "../constants/baseURL"
import {
    authorizedJSONHeader,
    jsonHeader,
    multipartHeader,
} from "../helpers/config"

// function to login the user to request to the backend
export const login = (email, password) => async (dispatch) => {
    try {
        // dispatches the user login request type action
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        // configure variable to store the request header
        const config = jsonHeader()
        const loginUrl = BASE_URL + "/api/users/login/"
        console.log(loginUrl)

        // make request to the backend for user login. The request is a POST request
        const { data } = await axios.post(
            loginUrl,
            {
                email: email,
                password: password,
            },
            config
        )

        // If the request has a valid response from the backend,
        // the action type success is dipatched with the payload
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        // storing the user info in the local storage after stringifying the json response
        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        // if any error response is encountered, a fail action is dispatched
        // with the corresponding error message as payload
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        })
    }
}

export const signup = (postdata) => async (dispatch) => {
    try {
        // dispatches the user login request type action
        dispatch({
            type: USER_CREATE_REQUEST,
        })

        // configure variable to store the request header
        const config = multipartHeader()

        const url = BASE_URL + "/api/register/user/"

        // make request to the backend for user login. The request is a POST request
        const { data } = await axios.post(url, postdata, config)

        // If the request has a valid response from the backend,
        // the action type success is dipatched with the payload
        dispatch({
            type: USER_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        // if any error response is encountered, a fail action is dispatched
        // with the corresponding error message as payload
        dispatch({
            type: USER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const logout = (refresh, token) => async (dispatch) => {
    try {
        localStorage.removeItem("userInfo")
        dispatch({
            type: USER_LOGOUT_REQUEST,
        })

        const config = authorizedJSONHeader(token)

        const logOutUrl = BASE_URL + "/logout/"

        await axios.post(
            logOutUrl,
            {
                refresh_token: refresh,
            },
            config
        )

        dispatch({
            type: USER_LOGOUT_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
        })
    }
}

export const userCreateClear = () => async (dispatch) => {
    dispatch({
        type: USER_CREATE_CLEAR,
    })
}

export const loadUsers = (access) => async (dispatch) => {
    try {
        dispatch({
            type: USERS_LIST_LOAD_REQUEST,
        })
        const loadUsersUrl = BASE_URL + "/api/showallvolunteers/"
        const config = authorizedJSONHeader(access)

        const { data } = await axios.get(loadUsersUrl, config)

        dispatch({
            type: USERS_LIST_LOAD_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USERS_LIST_LOAD_FAIL,
            payload: "Error Loading users list",
        })
    }
}

export const loadFilteredUsers =
    (
        gender,
        province,
        district,
        municipality,
        skills,
        minAge,
        maxAge,
        access
    ) =>
    async (dispatch) => {
        try {
            dispatch({
                type: USERS_FILTER_LOAD_REQUEST,
            })
            console.log(province)
            const loadFilteredUserUrl =
                BASE_URL +
                `/api/advance_search/?volunteer=True&${
                    gender ? `gender=${gender}&` : ""
                }${province ? `province=${province}&` : ""}${
                    district ? `district=${district}&` : ""
                }${
                    municipality
                        ? `municipality=${municipality}&`
                        : ""
                }${skills ? `skills=${skills}&` : ""}${
                    minAge
                        ? `age__gt=${minAge}&age__lt=${maxAge}&`
                        : ""
                }`

            const config = authorizedJSONHeader(access)
            console.log(
                loadFilteredUserUrl.substring(
                    0,
                    loadFilteredUserUrl.length - 1
                )
            )
            const { data } = await axios.get(
                loadFilteredUserUrl.substring(
                    0,
                    loadFilteredUserUrl.length - 1
                ),
                config
            )

            dispatch({
                type: USERS_FILTER_LOAD_SUCCESS,
                payload: data,
            })
        } catch (error) {
            dispatch({
                type: USERS_FILTER_LOAD_FAIL,
                payload: "Error Filtering Users",
            })
        }
    }
