import React from "react"
import { ReactComponent as RightBand1 } from "../../assets/right-band-1.svg"
import { ReactComponent as RightBand2 } from "../../assets/right-band-2.svg"
import { ReactComponent as RightBand3 } from "../../assets/right-band-3.svg"
import { ReactComponent as LeftBand1 } from "../../assets/left-band-1.svg"
import { ReactComponent as LeftBand2 } from "../../assets/left-band-2.svg"

// Renders the 5 tilted colourful rectangles in the landing page below herosection
const Stirps = () => {
    return (
        <div className=" hidden md:block md:mb-20 h-96">
            <div className="hidden md:block relative -mt-8">
                <div className="absolute top-0 -right-96 md:-right-64 lg:-right-44 xl:-right-16">
                    <RightBand1 />
                </div>
                <div className="absolute top-15 -right-96 md:-right-64 lg:-right-44 xl:-right-16">
                    <RightBand2 />
                </div>
                <div className="absolute top-30 -right-96 md:-right-64 lg:-right-44 xl:-right-16">
                    <RightBand3 />
                </div>
                <div className="absolute top-38 md:top-44 lg:top-52 xl:top-60 -left-48 lg:-left-16 xl:left-0">
                    <LeftBand1 />
                </div>
                <div className="absolute top-52 md:top-58 lg:top-68 xl:top-76 -left-32 lg:-left-16 xl:left-0">
                    <LeftBand2 />
                </div>
            </div>
        </div>
    )
}

export default Stirps
