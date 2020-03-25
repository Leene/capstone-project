import React, { Fragment } from "react"
import "../css/Style.css"
import { signs } from "../data/keyboard_symbols.json"
import styled from "styled-components"

export default function Keyboard() {
    const sym0 = signs[0].symbol
    const sym1 = signs[1].symbol
    const sym2 = signs[2].symbol
    const sym3 = signs[3].symbol
    const sym4 = signs[4].symbol
    const sym5 = signs[5].symbol
    const sym6 = signs[6].symbol
    const sym7 = signs[7].symbol
    const sym8 = signs[8].symbol
    const sym9 = signs[9].symbol
    const sym10 = signs[10].symbol
    const sym11 = signs[11].symbol
    const sym12 = signs[12].symbol
    const sym13 = signs[13].symbol
    const sym14 = signs[14].symbol
    const sym15 = signs[15].symbol
    const sym16 = signs[16].symbol
    const sym17 = signs[17].symbol
    const sym18 = signs[18].symbol
    const sym19 = signs[19].symbol
    const sym20 = signs[20].symbol
    const sym21 = signs[21].symbol
    const sym22 = signs[22].symbol
    const sym23 = signs[23].symbol
    const sym24 = signs[24].symbol
    const sym25 = signs[25].symbol
    const sym26 = signs[26].symbol
    const sym27 = signs[27].symbol

    return (
        <Fragment>
            <KeysSide>
                <KeysSideDiv>{sym0}</KeysSideDiv>
                <KeysSideDiv>{sym1}</KeysSideDiv>
                <KeysSideDiv>{sym2}</KeysSideDiv>
                <KeysSideDiv>{sym3}</KeysSideDiv>
                <KeysSideDiv>{sym4}</KeysSideDiv>
                <KeysSideDiv>{sym5}</KeysSideDiv>
                <KeysSideDiv>{sym6}</KeysSideDiv>
                <KeysSideDiv>{sym7}</KeysSideDiv>
                <KeysSideDiv>{sym8}</KeysSideDiv>
                <KeysSideDiv>{sym9}</KeysSideDiv>
                <KeysSideDiv>{sym10}</KeysSideDiv>
                <KeysSideDiv>{sym11}</KeysSideDiv>
            </KeysSide>
            <KeysMiddle>
                <KeysMiddleDiv>m</KeysMiddleDiv>
                <KeysMiddleDiv>g</KeysMiddleDiv>
                <KeysMiddleDiv></KeysMiddleDiv>
                <KeysMiddleDiv></KeysMiddleDiv>

                {/* <div>{sym12}</div>
                <div>{sym13}</div>
                <div>{sym14}</div>
                <div>{sym15}</div> */}

                {/* <div>function</div>
                <div>const</div>
                <div>let</div>
                <div>className</div> */}
            </KeysMiddle>
            <KeysSide>
                <KeysSideDiv>{sym16}</KeysSideDiv>
                <KeysSideDiv>{sym17}</KeysSideDiv>
                <KeysSideDiv>{sym18}</KeysSideDiv>
                <KeysSideDiv>{sym19}</KeysSideDiv>
                <KeysSideDiv>{sym20}</KeysSideDiv>
                <KeysSideDiv>{sym21}</KeysSideDiv>
                <KeysSideDiv>{sym22}</KeysSideDiv>
                <KeysSideDiv>{sym23}</KeysSideDiv>
                <KeysSideDiv>{sym24}</KeysSideDiv>
                <KeysSideDiv>{sym25}</KeysSideDiv>
                <KeysSideDiv>{sym26}</KeysSideDiv>
                <KeysSideDiv>{sym27}</KeysSideDiv>
            </KeysSide>
        </Fragment>
    )
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

}
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
