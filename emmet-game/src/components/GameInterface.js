import React, { Fragment } from "react"
import "../css/Style.css"

export default function GameInterface() {
    return (
        <Fragment>
            <div className="gameinterface__score">
                <p>score</p>
            </div>

            <div className="gameinterface__life">
                <p>life</p>
            </div>
        </Fragment>
    )
}
