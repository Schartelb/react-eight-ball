import React, { useState } from "react";
import messages from "./Messages"
import './eightball.css'

const Eightball = () => {
    const [msg, setMsg] = useState("Think of a Question")
    const [color, setColor] = useState("black")
    const askSpirits = () => {
        let pick = Math.floor(Math.random() * messages.length)
        setMsg(messages[pick].msg)
        setColor(messages[pick].color)
    }
    const reset = () => {
        setMsg("Think of a Question");
        setColor("black")
    }
    const status = color != "black"
    const buttonact = () => {
        status ? reset() : askSpirits()
    }

    return (
        <div className="circle">
            <p className={color}>{msg}</p>
            <button onClick={buttonact}>{status ? "Reset" : "Ask the Spirits"}</button>
        </div>
    )
}

export default Eightball    