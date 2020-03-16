import React, { Fragment } from "react"
import "../css/Style.css"
import GameInterface from "./GameInterface"
import Keyboard from "./Keyboard"

export default function GameArea() {
    return (
        <Fragment>
            <section className="gamefield">
                <p>(gamefield)</p>
                <div className="gameinterface">
                    {GameInterface()}
                    <section className="keybord">{Keyboard()}</section>
                </div>
            </section>
        </Fragment>
    )
}
