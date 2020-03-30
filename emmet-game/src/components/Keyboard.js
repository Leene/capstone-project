import React from "react"
import "../css/Style.css"
import { signs } from "../data/keyboard_symbols.json"
import styled from "styled-components"

export default function Keyboard() {
    function renderLeftKeys() {
        const leftSite = signs.splice(0, 14)
        return leftSite.map(key => (
            <KeysSideDiv key={key.symbol}>{key.symbol}</KeysSideDiv>
        ))
    }
    function renderRightKeys() {
        const rightSite = signs.splice(0, 14)
        return rightSite.map(key => (
            <KeysSideDiv key={key.symbol}>{key.symbol}</KeysSideDiv>
        ))
    }
    return (
        <>
            <KeysSide className="Result5">
                {renderLeftKeys()}

                {/* <KeysSideDiv>{sym1}</KeysSideDiv>
                <KeysSideDiv>{sym2}</KeysSideDiv>
                <KeysSideDiv>{sym3}</KeysSideDiv>
                <KeysSideDiv>{sym4}</KeysSideDiv>
                <KeysSideDiv>{sym5}</KeysSideDiv>
                <KeysSideDiv>{sym6}</KeysSideDiv>
                <KeysSideDiv>{sym7}</KeysSideDiv>
                <KeysSideDiv>{sym8}</KeysSideDiv>
                <KeysSideDiv>{sym9}</KeysSideDiv>
                <KeysSideDiv>{sym10}</KeysSideDiv>
                <KeysSideDiv>{sym11}</KeysSideDiv> */}
            </KeysSide>
            <KeysMiddle>
                <KeysMiddleDiv>m</KeysMiddleDiv>
                <KeysMiddleDiv>g</KeysMiddleDiv>
                <KeysMiddleDiv></KeysMiddleDiv>
                <KeysMiddleDiv></KeysMiddleDiv>
            </KeysMiddle>
            <KeysSide>{renderRightKeys()}</KeysSide>
        </>
    )
}

function createKey(i) {
    const key = signs[i].symbol
    return <KeysSideDiv>{key}</KeysSideDiv>
}

function displayAllKeysOfOneSide(min, max) {
    let amountOfKeys
    for (let y = min; y < max; y++) {
        amountOfKeys += createKey(y)
        console.log("y:" + y)
    }
    return amountOfKeys
}

const KeysSide = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 35vw;
    height: 30vh;
    font-weight: bold;
    font-size: 1.5em;
    color: #566fad;
    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);
`
const KeysSideDiv = styled.div`
    width: 33%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active {
        color: #f2fcfd;
        background: linear-gradient(
            45deg,
            rgb(75, 192, 215) 100%,
            rgb(220, 236, 255) 10%
        );
        box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
        margin-top: -2em;
    }
`

//  color: #f2fcfd;
const KeysMiddle = styled.div`
    width: 30%;
`

const KeysMiddleDiv = styled.div`
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
        color: #f2fcfd;
        background: linear-gradient(
            45deg,
            rgb(75, 192, 215) 100%,
            rgb(220, 236, 255) 10%
        );
        box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
    }
`
