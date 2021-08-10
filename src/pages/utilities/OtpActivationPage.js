import React from "react";
import { ReactComponent as GiversLogo } from "../../assets/givers-logo.svg";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/baseURL";
import { authorizedJSONHeader } from "../../helpers/config";
import { useState } from "react";
import { logout, userCreateClear } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";

const OtpActivationPage = () => {
    const [verified, setVerified] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);
    const [timeOut, setTimeOut] = useState(false);
    const [loading, setLoading] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);

    const { userInfo = false } = useSelector(
        (state) => state.userLogin
    );
    const { refresh, access } = userInfo;
    const token = access;
    // console.log(access);

    const {
        register,
        formState: { errors, isValid },
        trigger,
        getValues,
    } = useForm();

    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const verifyOTP = async () => {
        setBtnClicked(true);
        setLoading(true);
        const otp = getValues("otp");
        const config = authorizedJSONHeader(token);

        const verifyOTPUrl =
            BASE_URL + `/api/register/verify/${id}/${otp}/`;
        const { data } = await axios.post(verifyOTPUrl, config);

        const {
            verified = false,
            error = false,
            timeout = false,
        } = data;
        if (verified) {
            setVerified(true);
            setLoading(false);
        } else if (error) {
            setLoading(false);
            const { message } = data;
            setError(message);
        } else if (timeout) {
            setLoading(false);
            setTimeOut(true);
        }
    };

    const resendOTP = async () => {
        setBtnClicked(true);
        setLoading(true);
        setError(false);

        const config = authorizedJSONHeader(token);
        const verifyOTPUrl =
            BASE_URL + `/api/register/verify/resend/${id}/`;
        const { data } = await axios.post(verifyOTPUrl, config);
        const { sent, message = false } = data;
        if (sent) {
            setLoading(false);
            setSent(true);
        } else if (message) {
            setLoading(false);
            setError(message);
        }
    };

    useEffect(() => {
        const toastsId = {};
        if (btnClicked) {
            if (loading) {
                toast.remove(toastsId.error);
                toast.remove(toastsId.sent);
                const loadingToastId = toast.loading(
                    "Please wait while we process your request . . ."
                );
                toastsId.loading = loadingToastId;
            } else if (error) {
                toast.remove(toastsId.loading);
                const errorToastId = toast.error(`Oops, ${error}`);
                toastsId.error = errorToastId;
            } else if (verified) {
                toast.remove(toastsId.loading);
                const successToastId = toast.success(
                    "Account Activated Successfully!"
                );
                toastsId.success = successToastId;
            } else if (timeOut) {
                toast.remove(toastsId.loading);
                const timeOutToastId = toast.error(
                    "Oops, your OTP has expired"
                );
                toastsId.timeOut = timeOutToastId;
            } else if (sent) {
                toast.remove(toastsId.loading);
                toast.remove(toastsId.error);
                const sentToastId = toast.success(
                    "OTP resend to your email succesfull!"
                );
                toastsId.sent = sentToastId;
            }
        }
    }, [btnClicked, error, verified, timeOut, loading, sent]);

    const backHome = () => {
        dispatch(userCreateClear());
        history.push("/");
    };

    return (
        <div className="min-h-screen min-w-screen bg-purple-300 flex flex-col justify-center text-center px-4 bg-bgPattern">
            <div className="max-w-screen-sm bg-white rounded-xl px-20 py-6 mx-auto">
                <div className="flex flex-col justify-center text-center">
                    <GiversLogo className="mx-auto mb-12" />
                    {!verified && (
                        <div>
                            <p className="mb-2">
                                We have sent you{" "}
                                <span className="text-lg font-medium">
                                    One Time Password (OTP)
                                </span>{" "}
                                to your email.
                            </p>
                            <p className="text-purple-500 text-lg font-medium mb-6">
                                Please Enter OTP
                            </p>
                            <div className="mb-8 md:px-8">
                                <input
                                    className={`text-center mt-2 px-6 py-2 h-12 w-full border-2 border-gray-300 focus:border-white bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                                        errors.otp
                                            ? "focus:ring-red-500"
                                            : "focus:ring-green-500"
                                    }`}
                                    type="otp"
                                    name="otp"
                                    placeholder="*  *  *  *  *  *"
                                    {...register("otp", {
                                        required:
                                            "Please enter your OTP",
                                    })}
                                    onKeyUp={() => {
                                        trigger("otp");
                                    }}
                                />
                                {errors.otp && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.otp.message}
                                    </div>
                                )}
                            </div>
                            <div className="w-full flex flex-col justify-center md:flex-row-reverse md:space-y-0 mb-12">
                                <button
                                    disabled={!isValid}
                                    className="mb-4 md:mb-0 border-2 border-purple-500 text-white text-lg font-medium px-8 py-2 rounded-lg bg-purple-500"
                                    onClick={() => verifyOTP()}
                                >
                                    Verify OTP
                                </button>
                                <button
                                    onClick={() => resendOTP()}
                                    className="md:mr-8 border-2 border-purple-500 text-purple-500 text-lg font-medium px-8 py-2 rounded-lg"
                                >
                                    Resend OTP
                                </button>
                            </div>
                        </div>
                    )}
                    {verified && (
                        <div className="mb-12">
                            <p className="mb-8">
                                Your account is now Successfully
                                activated. Login to your account and
                                enjoy.
                            </p>
                            <Link
                                to="/login"
                                onClick={() =>
                                    dispatch(logout(refresh, access))
                                }
                                className="border-2 border-purple-500 text-white text-lg font-medium px-8 py-2 rounded-lg bg-purple-500"
                            >
                                Go to Login
                            </Link>
                        </div>
                    )}
                </div>

                <button
                    onClick={() => {
                        dispatch(logout(refresh, access));
                        backHome();
                    }}
                    className="text-purple-500 text-center"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default OtpActivationPage;
