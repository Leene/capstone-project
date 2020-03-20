import React, { Fragment } from "react"
import "../css/Style.css"
const life = "https://img.icons8.com/material/20/ffffff/hearts--v1.png"
// const life = "https://img.icons8.com/material/20/800080/hearts--v1.png"
export default function GameInterface() {
    return (
        <Fragment>
            <div className="gameinterface__score">
                <p>260</p>
            </div>

            <div className="gameinterface__life">
                <img alt="" src={life} />
                <img alt="" src={life} />
                <img alt="" src={life} />
            </div>
        </Fragment>
    )
}
