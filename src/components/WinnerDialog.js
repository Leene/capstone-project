import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
//import Home from './Home'
//import GameArea from './GameArea'

export default function GameOverDialog(props) {
    const { winnerDialog, setWinnerDialog, setLife, setScoreState, setFeedback, setOrderNum } = props


    const handleNoBtnClick = () => {
        console.log('NO geklickt')
        // Winnerdialog ausblenden
        setWinnerDialog(false)
        // und alle States auf Initialwerte zurücksetzen
        setLife(3)
        setScoreState(0)
        setFeedback('')
        setOrderNum(0)
        ///>>>>>>>>>> TODO neue Fragereihenfolge bei nochmal spielen noch ändern?
    }


    const content = (
        <>
            <h2>Suuuppii ;-D, </h2>
            <p>du hast alle Fragen des Spiels richtig beantwortet!!!</p>
            <p>Möchtest du beenden oder von vorne spielen?</p>
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

    if (winnerDialog) {
        toShow = <DIV>{content}</DIV>
    } else {
        toShow = <DIV hidden>{content}</DIV>
    }

    return <>{toShow}</>
}

const DIV = styled.div`
    background-color: peachpuff;
    height: 60vh;
    width: 80vw;
    position: absolute;
    margin: 0 10%;
    opacity: 1;
`
