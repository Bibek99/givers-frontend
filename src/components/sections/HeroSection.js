/* Importing Libraries */
import React from "react"
import { Link } from "react-router-dom"
import { ArrowDownIcon } from "@heroicons/react/solid"

import { Link as ScrollLink } from "react-scroll"

/* Renders the hero section of the home page in the application */
const HeroSection = () => {
    return (
        <div className="">
            <div className="flex flex-col text-center justify-center mt-28">
                <div className="relative w-full max-w-screen-lg mx-auto">
                    <div className="animate-blob absolute w-72 h-72 -left-4 top-0 bg-purple-300 rounded-full filter blur-2xl opacity-90"></div>
                    <div className="animate-blob2 absolute w-36 h-36 right-8 bottom-16 bg-teal-300 rounded-full filter blur-2xl opacity-90"></div>
                    <div className="relative">
                        <div className="text-4xl md:text-6xl font-bold text-center px-4 mb-8">
                            Create Impact with larger group of
                            manpower
                        </div>
                        <div className="text-2xl md:text-3xl text-center text-gray-500 px-4 mb-12 sm:mb-8 md:mb-4">
                            Get going with the industry standard tool
                            for managing your event volunteers and
                            create the right impact towards giving to
                            the society.
                        </div>
                        <div className="lg:flex-1 space-x-8 text-center px-4">
                            <Link
                                to="/signup"
                                className="bg-purple-500 py-3 px-12 text-xl text-white rounded-lg"
                            >
                                Get Started
                            </Link>
                            <ScrollLink
                                smooth={true}
                                to="features"
                                className="cursor-pointer py-3 px-12 text-xl text-purple-500 rounded-lg inline-flex mt-8"
                            >
                                See Features
                                <span>
                                    <ArrowDownIcon className="h-6 w-6 ml-4 -mb-3 animate-bounce" />
                                </span>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
