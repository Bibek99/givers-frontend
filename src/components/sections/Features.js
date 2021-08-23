import React from "react"
import { featuresList } from "../../constants/featuresList"

const Features = () => {
    return (
        <div className="bg-white w-screen py-28">
            <div className="flex flex-col space-y-12 justify-center items-center">
                <div className="text-center space-y-4 max-w-screen-sm px-12">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Tailor-made features
                    </h1>
                    {/* <p className="text-lg">
                        Lorem ipsum is common placeholder text used to
                        demonstrate the graphic elements of a document
                        or visual presentation.
                    </p> */}
                </div>
                <div className="max-w-screen-lg grid grid-flow-row grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-2 gap-6 w-full text-center p-8 md:p-8 lg:p-0">
                    {featuresList.map((feature, index) => {
                        return (
                            <div
                                key={index}
                                className="p-10 md:px-4 md:py-10 flex flex-col justify-center max-w-sm md:w-full mx-auto break-all"
                            >
                                <div className="flex flex-row justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h1 className="text-xl font-medium mb-2">
                                    {feature.title}
                                </h1>
                                <p>{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Features
