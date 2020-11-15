import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants';
//import { exercises } from '../data/exercises.json'
//import CreateOrder from './CreateOrder'
//import CreateScore from './CreateScore'

const life = 'https://img.icons8.com/material/20/000000/hearts--v1.png'
// const life = "https://img.icons8.com/material/20/800080/hearts--v1.png"

export default function GameInterface(props) {
    const { hint, scoreState, life } = props

    // let order = CreateOrder();
    // let hint = exercises[order[0]].emmet;

    const [showText, setShowText] = useState(false)

    //const hint = JSON.stringyfy(test)
    // style = "visibility: collapse;";
    return (
        <>
            <Score>
                <p>{scoreState}</p>
            </Score>
            <Hint>
                <HintButton title="Lösung ein-/ausblenden" onClick={() => setShowText(!showText)}>
                    HINT
                </HintButton>
                <HintTextDiv>
                    {showText && <HintText>{hint}</HintText>}
                </HintTextDiv>
            </Hint>
            <Life>{Lifecon(life)}</Life>
        </>
    )
}

function Lifecon(amount) {
    //const amount = life;
    const rows = []
    for (var i = 0; i < amount; i++) {
        rows.push(<LifeIcon alt="" src={life} key={i} />)
    }
    return <>{rows}</>
}

const HintTextDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
    width: 75%;
    height: 100%;
    background-color: rgb(${COLORS.hintfield});
    border-radius: 0 20px 20px 0;
    box-shadow: 2px 2px 5px 6px ${COLORS.shadow_RGBA};
`

const HintText = styled.p`
font-size: 80%;
    margin: 0;
    padding: 0;
`

const HintButton = styled.button`
box-shadow: 2px 2px 5px 6px ${COLORS.shadow_RGBA};
    cursor: pointer;
    width: 20%;
    height: 100%;
    border: none;
    border-radius: 20px 0 0 20px;

    font-size: 0.6em;
    font-weight: bold;
    letter-spacing: 2px;
    color: rgba(${COLORS.light}, 0.7);
    background-color: rgb(${COLORS.middleviolet});

    &:hover {
        background-color: rgb(${COLORS.background1_NUM});
    }
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

const Score = styled.div`
    grid-area: score;
    letter-spacing: 1px;
    font-size: 1.1em;
    color: ${COLORS.text};
    font-weight: bold;
    min-width: 3em;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    //border: black solid 1px;
`
const Hint = styled.div`
    grid-area: middle;
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
