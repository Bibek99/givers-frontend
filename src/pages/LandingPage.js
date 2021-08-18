/* Importing Libraries */
import { ArrowUpIcon } from "@heroicons/react/solid"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import MainNav from "../components/navs/MainNav"
import Features from "../components/sections/Features"
import HeroSection from "../components/sections/HeroSection"
import Stirps from "../components/sections/Stirps"

/*
 * * Main Landing Page of the application
 */
const LandingPage = () => {
    const [isOffSet, setIsOffSet] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const isOffSetDeterminer = () => {
            if (window.pageYOffset > 500) {
                setIsOffSet(true)
            } else {
                setIsOffSet(false)
            }
        }

        window.addEventListener("scroll", isOffSetDeterminer)

        return () =>
            window.removeEventListener("scroll", isOffSetDeterminer)
    }, [])
    return (
        <div className="min-h-screen overflow-x-hidden">
            <MainNav />
            <HeroSection />
            <Stirps />
            <Features />
            {isOffSet && (
                <div
                    onClick={() => scrollToTop()}
                    className="cursor-pointer fixed bottom-8 right-8 w-16 h-16 rounded-full flex flex-col justify-center items-center bg-purple-500"
                >
                    <ArrowUpIcon className="h-6 w-6 animate-bounce text-white -mb-2" />
                </div>
            )}
        </div>
    )
}

export default LandingPage
