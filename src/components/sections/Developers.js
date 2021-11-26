import React from "react"
import { ReactComponent as Facebook } from "../../assets/dev-socials/fb.svg"
import { ReactComponent as Instagram } from "../../assets/dev-socials/insta.svg"
import { ReactComponent as Github } from "../../assets/dev-socials/github.svg"
import { developers } from "../../constants/developersList"

const Developers = () => {
    return (
        <div className="bg-white w-screen py-24">
            <div className="flex flex-col space-y-12 justify-center items-center">
                <div className="text-center space-y-4 max-w-screen-sm px-12">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Meet the developers
                    </h1>
                    {/* <p className="text-lg">
                        Lorem ipsum is common placeholder text used to
                        demonstrate the graphic elements of a document
                        or visual presentation.
                    </p> */}
                </div>
                <div className="max-w-screen-lg grid grid-flow-row grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-20 w-full text-center p-8 md:p-8 lg:p-0">
                    {developers &&
                        developers.map((developer) => {
                            return (
                                <div
                                    key={developer.id}
                                    className={`max-w-xs md:w-full flex flex-col justify-center space-y-6 mx-auto ${
                                        developer.id === 4
                                            ? "hidden md:block"
                                            : ""
                                    }`}
                                >
                                    {developer.name && (
                                        <div className="flex flex-row -space-x-6 justify-center items-center">
                                            <div className="bg-transparent">
                                                <img
                                                    src={
                                                        developer.avatar
                                                    }
                                                    alt="name"
                                                    className="object-cover rounded-2xl shadow-2xlpurple w-64 h-64"
                                                />
                                            </div>
                                            <div className="flex flex-col space-y-4">
                                                {developer.facebook && (
                                                    <div className="h-12 w-12 rounded-2xl bg-white hover:bg-purple-50 shadow-md flex flex-col justify-center items-center">
                                                        <a
                                                            href={
                                                                developer.facebook
                                                            }
                                                            target="_blank"
                                                            rel="noreferer noreferrer"
                                                            className="fill-current hover:text-purple-600"
                                                        >
                                                            <Facebook className="h-8 w-8" />
                                                        </a>
                                                    </div>
                                                )}
                                                {developer.instagram && (
                                                    <div className="h-12 w-12 rounded-2xl bg-white hover:bg-purple-50 shadow-md flex flex-col justify-center items-center">
                                                        <a
                                                            href={
                                                                developer.instagram
                                                            }
                                                            target="_blank"
                                                            rel="noreferer noreferrer"
                                                            className="fill-current hover:text-purple-600"
                                                        >
                                                            <Instagram className="h-8 w-8" />
                                                        </a>
                                                    </div>
                                                )}
                                                {developer.github && (
                                                    <div className="h-12 w-12 rounded-2xl bg-white hover:bg-purple-50 shadow-md flex flex-col justify-center items-center">
                                                        <a
                                                            href={
                                                                developer.github
                                                            }
                                                            target="_blank"
                                                            rel="noreferer noreferrer"
                                                            className="fill-current hover:text-purple-600"
                                                        >
                                                            <Github className="h-8 w-8" />
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {developer.name && (
                                        <div className="text-left ml-2">
                                            <h1 className="text-xl font-medium text-purple-600 mb-4">
                                                {developer.name}
                                            </h1>
                                            <p className="uppercase text-sm">
                                                <span className="mr-2 border-2 border-purple-500 bg-purple-500"></span>{" "}
                                                {developer.role}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Developers
