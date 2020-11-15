import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { COLORS } from '../constants';

export default function GameOverDialog(props) {
    const {headline, visible, setVisible, setLife, setScoreState, setFeedback, setOrderNum } = props

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
        <Wrap>
        <Header>
        <HeadLogo alt="sad cloud" src="https://img.icons8.com/dotty/80/000000/sad-cloud.png"/> 
            </Header> 
            <H2>Ohje, leider verloren :-(</H2>
            <P>Spiel beenden oder nochmal spielen?</P>
            {/*  <button onClick={handleNoBtnClick}>Nein, nochmal Spielen</button></> */}
            <BTNdiv>
            <Link to="/">
                <BTN title="Zurück zum Startbereich">Beenden</BTN>
            </Link>
            <Link to="/gamearea">
                <BTN title="Startet neues Spiel" onClick={handleNoBtnClick}>
                    Nochmal
                </BTN>
            </Link>
            </BTNdiv>
        </Wrap>
    )

    let toShow

    if (visible) {
        toShow = <DIV><InsetShadow>{content}</InsetShadow></DIV>
    } else {
        toShow = <DIV hidden><InsetShadow>{content}</InsetShadow></DIV>
    }

    return <>{toShow}</>
}

const BTNdiv = styled.div`
display:flex;
flex-direction: column;
`
const H2 = styled.div`
font-size: 1.2em;
font-weight:bold;
margin-bottom:10px;
`

const P = styled.div`
font-size: 0.8em;
`

const BTN = styled.button`
cursor:pointer;
min-width:60px;

Border-radius:20px;
border:none;
   box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2); 
    margin: 20px  20px 0 ;
    padding: 10px;
    background-color: rgba(${COLORS.violet}, 0.5);


    color: rgb(${COLORS.lightText});
   font-weight:bold;
    letter-spacing: 1px;
    &:hover {
        background-color: rgb(${COLORS.background1_NUM});
    }
`

const Wrap = styled.div`
width:70vw;
`
const Header = styled.header`
margin-top:30px;
`
const HeadLogo = styled.img`
  height: 80px;
  padding: 2px;
  opacity:1;
`
const InsetShadow = styled.div`
box-shadow: inset 1px 1px 2px 0px rgba(${COLORS.light}, 0.8); 
height:100%;
position: absolute;
`

const DIV = styled.div`
height: 47vh;
width: 70vw;
position: absolute;
margin-top: 10vh;
opacity: 1;

border-style: solid;
border-width: 2px;
border-image: 
linear-gradient(
    to bottom, 
    rgba(${COLORS.light},0) 1%,
    rgba(${COLORS.light},0.8) 10%,
    rgba(${COLORS.light},0) 100%
    ) 1 100%;
background-color: rgb(${COLORS.hintfield});
box-shadow: 2px 2px 5px 3px ${COLORS.shadow_RGBA};
`
