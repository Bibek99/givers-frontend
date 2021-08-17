import {
    CheckCircleIcon,
    ExclamationCircleIcon,
} from "@heroicons/react/outline"
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"
import axios from "axios"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router"
import { ReactComponent as GiversLogo } from "../../assets/givers-logo.svg"
import { ReactComponent as Spinner } from "../../assets/spinner.svg"
import { BASE_URL } from "../../constants/baseURL"
import { jsonHeader } from "../../helpers/config"

const ResetPasswordConfirm = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false)
    const [isPassword2Visible, setPassword2Visible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [passwordResetOk, setPasswordResetOk] = useState(true)

    const history = useHistory()

    const {
        register,
        formState: { errors, isValid },
        trigger,
        getValues,
    } = useForm()

    const resetPassword = async (token, password) => {
        try {
            setLoading(true)
            const config = jsonHeader()
            const resetPasswordUrl =
                BASE_URL + "/api/password_reset/confirm/"

            await axios.post(
                resetPasswordUrl,
                {
                    token: token,
                    password: password,
                },
                config
            )
            setLoading(false)
            setPasswordResetOk(true)
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen min-w-screen bg-purple-300 flex flex-col justify-center px-4 bg-bgPattern">
            <div className="bg-white rounded-xl px-6 md:px-24 py-6 mx-auto max-w-screen-md">
                <div className="flex flex-col space-y-6 mb-8">
                    <GiversLogo className="mx-auto mb-12" />
                    {!passwordResetOk && (
                        <>
                            <h1 className="text-center text-lg">
                                Enter your new password to reset. If
                                you are having any problem{" "}
                                <a
                                    href="mailto: volunteermanagementsoftware@gmail.com"
                                    className="font-medium"
                                >
                                    contact
                                </a>{" "}
                                us.
                            </h1>
                            <div>
                                <label htmlFor="token">
                                    Token{" "}
                                    <span className="text-red-500">
                                        *
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="token"
                                    placeholder="Enter the token from email"
                                    className={`mt-2 px-6 py-2 h-12 w-full border-2 border-gray-200 focus:border-white bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                        errors.token
                                            ? "focus:ring-red-500"
                                            : "focus:ring-green-500"
                                    }`}
                                    {...register("token", {
                                        required:
                                            "Please enter the token from your email",
                                    })}
                                    onKeyUp={() => {
                                        trigger("token")
                                    }}
                                />
                                {errors.token && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.token.message}
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label
                                        htmlFor="password"
                                        className="mb-2"
                                    >
                                        Password{" "}
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <div>
                                        {isPasswordVisible ? (
                                            <EyeOffIcon
                                                className="h-6 w-6 text-gray-400"
                                                onClick={() => {
                                                    setPasswordVisible(
                                                        false
                                                    )
                                                }}
                                            />
                                        ) : (
                                            <EyeIcon
                                                className="h-6 w-6 text-gray-400"
                                                onClick={() => {
                                                    setPasswordVisible(
                                                        true
                                                    )
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        className={`border-2 border-gray-200 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none ${
                                            errors.password
                                                ? "focus:ring-2 focus:ring-red-500"
                                                : "focus:ring-2 focus:ring-green-500"
                                        }`}
                                        type={
                                            isPasswordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        placeholder="Enter your password"
                                        {...register("password", {
                                            required:
                                                "Please enter your password",
                                            minLength: {
                                                value: 8,
                                                message:
                                                    "Password must be at least 8 characters",
                                            },
                                            pattern: {
                                                value: /(?=.*[0-9])/,
                                                message:
                                                    "Password must contain a number",
                                            },
                                        })}
                                        onKeyUp={() => {
                                            trigger("password")
                                        }}
                                    />
                                    {errors.password ? (
                                        <div className="absolute right-3 bottom-3">
                                            <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                        </div>
                                    ) : (
                                        <div className="absolute right-3 bottom-3">
                                            <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                        </div>
                                    )}
                                </div>
                                {errors.password && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.password.message}
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label
                                        htmlFor="password2"
                                        className="mb-2"
                                    >
                                        Confirm Password{" "}
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>
                                    <div>
                                        {isPassword2Visible ? (
                                            <EyeOffIcon
                                                className="h-6 w-6 text-gray-400"
                                                onClick={() => {
                                                    setPassword2Visible(
                                                        false
                                                    )
                                                }}
                                            />
                                        ) : (
                                            <EyeIcon
                                                className="h-6 w-6 text-gray-400"
                                                onClick={() => {
                                                    setPassword2Visible(
                                                        true
                                                    )
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        className={`border-2 border-gray-200 px-6 py-2 h-12 w-full bg-gray-50 rounded-lg focus:outline-none ${
                                            errors.password2
                                                ? "focus:ring-2 focus:ring-red-500"
                                                : "focus:ring-2 focus:ring-green-500"
                                        }`}
                                        type={
                                            isPassword2Visible
                                                ? "text"
                                                : "password"
                                        }
                                        name="password2"
                                        placeholder="Retype your password"
                                        {...register("password2", {
                                            required:
                                                "Please enter your password",
                                            validate: (value) =>
                                                value ===
                                                    getValues([
                                                        "password",
                                                    ]).toString() ||
                                                "Passwords do not match",
                                        })}
                                        onKeyUp={() => {
                                            trigger("password2")
                                        }}
                                    />
                                    {errors.password2 ? (
                                        <div className="absolute right-3 bottom-3">
                                            <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                                        </div>
                                    ) : (
                                        <div className="absolute right-3 bottom-3">
                                            <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                        </div>
                                    )}
                                </div>
                                {errors.password2 && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.password2.message}
                                    </div>
                                )}
                            </div>{" "}
                        </>
                    )}
                    {passwordResetOk && (
                        <div className="flex flex-col justify-center items-center text-center space-y-8">
                            <h1>
                                Your account password has been
                                successfully reset. Login your account
                                with the new password.
                            </h1>
                            <button
                                onClick={() => history.push("/login")}
                                className="space-x-4 mb-4 md:mb-0 border-2 border-purple-500 text-white text-lg font-medium px-8 py-2 rounded-lg bg-purple-500"
                            >
                                Go to Login Page
                            </button>
                        </div>
                    )}
                </div>
                {!passwordResetOk && (
                    <div className="flex flex-col justify-center items-center">
                        <button
                            disabled={!isValid}
                            className="flex flex-row items-center space-x-4 mb-4 md:mb-0 border-2 border-purple-500 text-white text-lg font-medium px-8 py-2 rounded-lg bg-purple-500"
                            onClick={() =>
                                resetPassword(
                                    getValues("token"),
                                    getValues("password")
                                )
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
                            <span>Reset Password</span>
                        </button>
                    </div>
                )}
                <div className="flex flex-col justify-center items-center mt-10">
                    <button
                        onClick={() => {
                            history.push("/")
                        }}
                        className="text-purple-500 text-center items-center"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordConfirm
