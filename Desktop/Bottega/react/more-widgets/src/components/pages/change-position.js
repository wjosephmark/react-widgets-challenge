import React, { useState } from 'react'

export default function ChangePosition() {

    const [position, setPosition] = useState("Center")
    const [alignment, setAlignment] = useState("flex-end")

    const handleLeftButtonClick = () => {
        setPosition("Left")
        setAlignment("flex-start")
    }

    const handleCenterButtonClick = () => {
        setPosition("Center")
        setAlignment("center")
    }

    const handleRightButtonClick = () => {
        setPosition("Right")
        setAlignment("flex-end")
    }

    const changePositionStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: `${alignment}`,
        backgroundColor: "#FDFAF6"

    }
    
    return(
        <div>
            <div className="change-position-app" style={changePositionStyles}>
                <h1>{position}</h1>
            </div>
            <div className="app" style={{flexDirection: "row"}}>
                <button onClick={() => handleLeftButtonClick()}>Left</button>
                <button onClick={() => handleCenterButtonClick()}>Center</button>
                <button onClick={() => handleRightButtonClick()}>Right</button>
            </div>
        </div>
    )
}