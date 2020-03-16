import React, { Fragment } from "react"
import EmmetButton from "./EmmetListButton"

const logo = "https://img.icons8.com/windows/128/453267/ant.png"

export default function Startarea() {
    return (
        <Fragment>
            <div className="startarea__main">
                <h1>Emmet Typing Game</h1>
                <div classname="logo__startarea">
                    <img alt="" src={logo} />
                </div>
                {EmmetButton("Emmetbefehle")}
            </div>
        </Fragment>
    )
}
