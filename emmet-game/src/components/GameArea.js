import React, { Fragment } from "react"
import "../css/Style.css"
import GameInterface from "./GameInterface"

export default function GameArea() {
    return (
        <Fragment>
            <section className="gamefield">
                <p>(gamefield)</p>
                <div className="gameinterface">
                    {GameInterface()}
                    <section className="keybord">
                        <p>(keybord)</p>
                    </section>
                </div>
            </section>
        </Fragment>
    )
}
