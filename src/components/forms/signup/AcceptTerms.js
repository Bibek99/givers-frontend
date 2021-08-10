import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/*
 * * To agree terms and condition of our application
 */
const AcceptTerms = ({ acceptTerms, setAcceptTerms }) => {
    const [acceptTermsLocal, setAcceptTermsLocal] = useState(false);

    acceptTerms = acceptTermsLocal;

    return (
        <div className="flex flex-col max-w-screen-sm mt-20 mx-auto">
            <h3 className="text-lg text-center text-gray-500">
                Your form details have been registered. Submit the
                form to register yourself as a user.
            </h3>
            <div className="mt-12 text-center">
                <input
                    type="checkbox"
                    name="terms"
                    value={acceptTermsLocal}
                    onChange={() => {
                        setAcceptTermsLocal(!acceptTermsLocal);
                        setAcceptTerms(!acceptTerms);
                    }}
                />
                <label htmlFor="terms" className="ml-4">
                    I agree to Platform’s{" "}
                    <Link
                        to="/terms-conditions"
                        className="text-purple-500"
                    >
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="text-purple-500">
                        Privacy Policy
                    </Link>
                </label>
            </div>
        </div>
    );
};

export default AcceptTerms;

AcceptTerms.propTypes = {
    acceptTerms: PropTypes.bool,
    setAcceptTerms: PropTypes.func,
};
