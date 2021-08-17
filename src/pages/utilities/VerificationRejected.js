import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as GiversLogo } from "../../assets/givers-logo.svg"

const VerificationRejected = () => {
    return (
        <div className="min-h-screen min-w-screen bg-purple-300 flex flex-col justify-center text-center px-4 bg-bgPattern">
            <div className="max-w-screen-sm bg-white rounded-xl px-20 py-6 mx-auto">
                <div className="flex flex-col justify-center text-center space-y-8">
                    <GiversLogo className="mx-auto" />
                    <p className="text-lg">
                        Your account application has been rejected. If
                        you think it is a mistake,{" "}
                        <a
                            href="mailto: volunteermanagementsoftware@gmail.com"
                            className="font-medium"
                        >
                            contact
                        </a>{" "}
                        our admin.
                    </p>

                    <Link
                        to="/"
                        className="border-2 border-purple-500 text-white text-lg font-medium px-8 py-2 rounded-lg bg-purple-500"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default VerificationRejected
