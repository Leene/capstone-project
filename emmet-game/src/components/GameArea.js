import React, { Fragment } from "react"
import "../css/Style.css"
import GameInterface from "./GameInterface"
import GameField from "./GameField"
import Keyboard from "./Keyboard"
import styled from "styled-components"

export default function GameArea() {
    return (
        <Fragment>
            <Gamefield>
                {GameField()}
                <Gameinterface>
                    {GameInterface()}
                    <KeyboardStyle>{Keyboard()}</KeyboardStyle>
                </Gameinterface>
            </Gamefield>
        </Fragment>
    )
}

const Gamefield = styled.section`
    height: 90vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    margin-top: -40px;
`

const Gameinterface = styled.div`
    display: grid;
    grid-template-areas:
        "score middle life"
        "keyboard keyboard keyboard";
    grid-template-rows: 1fr 5fr;
    grid-template-columns: 1fr 6fr 1fr;
    position: fixed;
    width: 100vw;
    bottom: 0px;
`

const KeyboardStyle = styled.section`
    margin-top: -1vh;
    user-select: none;
    grid-area: keyboard;
    background-color: gainsboro;
    width: 100vw;
    display: flex;
    font-size: calc(10px + 2vmin);
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);

    & div {
        list-style: none;
        background: linear-gradient(
            45deg,
            rgba(75, 192, 215, 1) 9%,
            rgb(220, 236, 255) 100%
        );
        font-weight: bold;
        font-size: 1.3em;
        color: #566fad;
        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);
    }
`
