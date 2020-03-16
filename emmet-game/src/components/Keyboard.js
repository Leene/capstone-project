import React, { Fragment } from "react"
import "../css/Style.css"
import { signs } from "../data/keyboard_symbols.json"

export default function Keyboard() {
    const symbol = signs[0].symbol
    const code = signs[0].numeric_code

    console.log(symbol + ": " + code)
    return (
        <Fragment>
            <p>(keyboard) </p>
            <div className="keys_left">
                <li>&#40;</li>
                <li>&lbrace;</li>
                <li>&#91;</li>
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
            </div>
            <div className="keys_middle">
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
            </div>
            <div className="keys_right">
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
            </div>
        </Fragment>
    )
}
