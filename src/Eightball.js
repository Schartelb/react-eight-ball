import React, { useState } from "react";
import messages from "./Messages"
import './eightball.css'

const Eightball = () => {
    const [msg, setMsg] = useState("Think of a Question")
    const [color, setColor] = useState("black")
    const [greenCount, setgreenCount] = useState(0)
    const [yellowCount, setyellowCount] = useState(0)
    const [redCount, setredCount] = useState(0)
    const askSpirits = () => {
        let pick = Math.floor(Math.random() * messages.length)
        setMsg(messages[pick].msg)
        setColor(messages[pick].color)
        if (messages[pick].color == 'green') { setgreenCount(greenCount + 1) }
        if (messages[pick].color == 'goldenrod') { setyellowCount(yellowCount + 1) }
        if (messages[pick].color == 'red') { setredCount(redCount + 1) }
    }
    const reset = () => {
        setMsg("Think of a Question");
        setColor("black")
    }
    const status = color != "black"

    /**Should put count in lower component but no, thank you. */
    const buttonact = () => {
        status ? reset() : askSpirits();
    }
    const countReset = () => {
        setgreenCount(0)
        setyellowCount(0)
        setredCount(0)
    }

    return (
        <>
            <div className="circle">
                <p className={color}>{msg}</p>
            </div>
            <button onClick={buttonact}>{status ? "Reset" : "Ask the Spirits"}</button>

            <p>Green: {greenCount}      Yellow: {yellowCount}       Red: {redCount}</p>
            <button onClick={countReset}>Reset Count</button>

        </>
    )
}

export default Eightball    