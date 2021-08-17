import axios from "axios"
import React from "react"
import { useCallback } from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ReactComponent as GiversLogo } from "../../assets/givers-logo.svg"
import { BASE_URL } from "../../constants/baseURL"
import { jsonHeader } from "../../helpers/config"
import { ReactComponent as Spinner } from "../../assets/spinner.svg"
import { Redirect, useHistory } from "react-router"

const ResetPassword = () => {
    const [haveToken, setHaveToken] = useState(false)
    const [postError, setPostError] = useState()
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const {
        register,
        formState: { errors, isValid },
        trigger,
        getValues,
    } = useForm()

    const getToken = useCallback(async (email) => {
        try {
            setLoading(true)
            const getTokenUrl = BASE_URL + "/api/password_reset/"
            const config = jsonHeader()

            const {
                data: { status },
            } = await axios.post(
                getTokenUrl,
                {
                    email: email,
                },
                config
            )

            if (status === "OK") {
                setLoading(false)
                setHaveToken(true)
            }
        } catch (error) {
            setPostError("Error validating your email")
            console.log(postError)
        }
    })

    if (haveToken) {
        return <Redirect to="/password_reset/confirm" />
    }

    return (
        <div className="min-h-screen min-w-screen bg-purple-300 flex flex-col justify-center text-center px-4 bg-bgPattern">
            <div className="max-w-screen-sm bg-white rounded-xl px-20 py-6 mx-auto">
                <div className="flex flex-col justify-center text-center">
                    <GiversLogo className="mx-auto mb-12" />

                    {!haveToken && (
                        <div>
                            <p className="mb-2">
                                To Request a password change you
                                should enter your email.
                            </p>
                            <p className="text-purple-500 text-lg font-medium mb-6">
                                Please Enter your Email
                            </p>
                            <div className="mb-8 md:px-8">
                                <input
                                    className={`text-center mt-2 px-6 py-2 h-12 w-full border-2 border-gray-300 focus:border-white bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                        errors.email
                                            ? "focus:ring-red-500"
                                            : "focus:ring-green-500"
                                    }`}
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    {...register("email", {
                                        required:
                                            "Please enter your email",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
                                            message:
                                                "Please enter a valid email address",
                                        },
                                    })}
                                    onKeyUp={() => {
                                        trigger("email")
                                    }}
                                />
                                {errors.email && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.email.message}
                                    </div>
                                )}
                            </div>
                            <div className="w-full flex flex-col justify-center md:flex-row-reverse md:space-y-0 mb-12">
                                <button
                                    disabled={!isValid}
                                    className="flex flex-row items-center space-x-4 mb-4 md:mb-0 border-2 border-purple-500 text-white text-lg font-medium px-8 py-2 rounded-lg bg-purple-500"
                                    onClick={() =>
                                        getToken(getValues("email"))
                                    }
                                >
                                    {loading && (
                                        <Spinner
                                            className={`${
                                                loading
                                                    ? "animate-spin"
                                                    : "hidden"
                                            }`}
                                        />
                                    )}
                                    <span>Proceed</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {haveToken && (
                        <div className="mb-12">
                            <p className="mb-8">
                                We have sent you an email for your
                                password reset. Please check your
                                email for more information.
                            </p>
                        </div>
                    )}
                </div>

                <button
                    onClick={() => {
                        history.push("/")
                    }}
                    className="text-purple-500 text-center"
                >
                    Back to Home
                </button>
            </div>
        </div>
    )
}

export default ResetPassword
