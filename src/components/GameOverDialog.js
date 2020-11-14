import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { COLORS } from '../constants';

//import Home from './Home'
//import GameArea from './GameArea'

export default function GameOverDialog(props) {
    const {headline, visible, setVisible, setLife, setScoreState, setFeedback, setOrderNum } = props

    console.log('visible: ' + props.visible)

    ////////////////////
  

    const handleNoBtnClick = () => {
        console.log('NO geklickt')
        // Gameoverdialog ausblenden
        setVisible(false)
        // und alle States auf Initialwerte zurücksetzen
        setLife(3)
        setScoreState(0)
        setFeedback('')
        setOrderNum(0)
        
    }

    
    const content = (
        <>
            <h2>Ohje, leider verloren :-(</h2>
            <p>Möchtest du das Spiel beenden?</p>
            {/*  <button onClick={handleNoBtnClick}>Nein, nochmal Spielen</button></> */}
            <Link to="/">
                <button>Ja, beenden</button>
            </Link>
            <Link to="/gamearea">
                <button onClick={handleNoBtnClick}>
                    Nein, nochmal Spielen
                </button>
            </Link>
        </>
    )

    let toShow

    if (visible) {
        toShow = <DIV>{content}</DIV>
    } else {
        toShow = <DIV hidden>{content}</DIV>
    }

    return <>{toShow}</>
}

const DIV = styled.div`
background-color: rgb(${COLORS.hintfield});

box-shadow: 2px 2px 5px 3px ${COLORS.shadow_RGBA};
    height: 50vh;
    width: 80vw;
    position: absolute;
    margin: 10% 10%;
    opacity: 1;
`
