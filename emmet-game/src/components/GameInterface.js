import React, { Fragment } from "react"
import "../css/Style.css"
import styled from "styled-components"
const life = "https://img.icons8.com/material/20/ffffff/hearts--v1.png"
// const life = "https://img.icons8.com/material/20/800080/hearts--v1.png"
export default function GameInterface() {
    return (
        <Fragment>
            <Score>
                <p>260</p>
            </Score>

            <Life>
                <LifeIcon alt="" src={life} />
                <LifeIcon alt="" src={life} />
                <LifeIcon alt="" src={life} />
            </Life>
        </Fragment>
    )
}

const Score = styled.div`
    grid-area: score;
    letter-spacing: 1px;
    font-size: 1.1em;
    color: white;
    font-weight: bold;
    min-width: 4em;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Life = styled.div`
    grid-area: life;
    color: white;
    font-weight: bold;
    min-width: 4em;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LifeIcon = styled.img`
    padding: 2px;
`
