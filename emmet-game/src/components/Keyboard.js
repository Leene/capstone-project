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
            <div className="keys_left">
                <div>{sym0}</div>
                <div>{sym1}</div>
                <div>{sym2}</div>
                <div>{sym3}</div>
                <div>{sym4}</div>
                <div>{sym5}</div>
                <div>{sym6}</div>
                <div>{sym7}</div>
                <div>{sym8}</div>
                <div>{sym9}</div>
                <div>{sym10}</div>
                <div>{sym11}</div>
            </div>
            <div className="keys_middle">
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                {/* <div>{sym12}</div>
                <div>{sym13}</div>
                <div>{sym14}</div>
                <div>{sym15}</div> */}

                {/* <div>function</div>
                <div>const</div>
                <div>let</div>
                <div>className</div> */}
            </div>
            <div className="keys_right">
                <div>{sym16}</div>
                <div>{sym17}</div>
                <div>{sym18}</div>
                <div>{sym19}</div>
                <div>{sym20}</div>
                <div>{sym21}</div>
                <div>{sym22}</div>
                <div>{sym23}</div>
                <div>{sym24}</div>
                <div>{sym25}</div>
                <div>{sym26}</div>
                <div>{sym27}</div>
            </div>
        </Fragment>
    )
}

const Container = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-auto-rows: 100px;
    justify-content: ${props => props.justify || "center"};
    background-color: lavender;
`
