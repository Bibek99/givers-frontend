import React, { useState } from "react"

const AgeRangePicker = () => {
    const [slideFirstValue, setSlideFirstValue] = useState(0)
    const [slideSecondValue, setSlideSecondValue] = useState(100)

    const minGap = 5

    const slideFirst = (e) => {
        console.log("fired")

        if (slideSecondValue - slideFirstValue <= minGap) {
            setSlideFirstValue(slideSecondValue - minGap)
        } else {
            setSlideFirstValue(e.target.value)
        }
    }
    const slideSecond = () => {
        if (slideSecondValue - slideFirstValue <= minGap) {
            setSlideSecondValue(slideFirstValue + minGap)
        }
    }
    console.log(slideFirstValue)
    console.log(slideSecondValue)

    return (
        <div>
            <div>Age Range</div>
            <label htmlFor="slider1">{slideFirstValue}</label>
            <input
                type="range"
                name="slider1"
                min="0"
                max="100"
                value="20"
                onInput={(e) => {
                    setSlideFirstValue(e.target.value)
                    slideFirst(e)
                }}
            />
            <br />
            <label htmlFor="slider2">{slideSecondValue}</label>
            <input
                type="range"
                name="slider2"
                min="0"
                max="100"
                value="70"
                onInput={(e) => {
                    setSlideSecondValue(e.target.value)
                    slideSecond()
                }}
            />
        </div>
    )
}

export default AgeRangePicker
