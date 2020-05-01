import React, { useState } from 'react'

export default function ChangeSize() {

    const [number, setNumber] = useState(15)

    const handleIncreaseButton = () => {
        setNumber(number + 5)
    }

    const handleDecreaseButton = () => {
        setNumber(number - 5)
    }

    const headerStyles = {
        fontSize: number
    }
    

    return(
        <div className="app">
            <h1 style={headerStyles}>{number}</h1>
            <div className="button-wrapper">
            <button onClick={() => handleIncreaseButton()}>Increase</button>
            <button onClick={() => handleDecreaseButton()}>Decrease</button>
            </div>
        </div>
    )
}