import React, { Fragment } from "react"
import "../css/Style.css"
import GameInterface from "./GameInterface"
import Gamefield from "./Gamefield"
import Keyboard from "./Keyboard"

export default function GameArea() {
    return (
        <Fragment>
            <section className="gamefield">
                {Gamefield()}
                <div className="gameinterface">
                    {GameInterface()}
                    <section className="keyboard">{Keyboard()}</section>
                </div>
            </section>
        </Fragment>
    )
}
