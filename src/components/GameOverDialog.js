import React from "react";
import styled from "styled-components";
import { Router, Link } from '@reach/router'
import Home from './Home'
import GameArea from "./GameArea"

export default function GameOverDialog(props) {
    const {visible, setVisible, setLife, setScoreState, setFeedback } = props

    console.log("visible: " + props.visible)

  ////////////////////
const handleYesBtnClick = () => {
    console.log("jA geklickt")
// zum Startbildschirm zurück

 

}

const handleNoBtnClick = () => {
    console.log("NO geklickt")
// Gameoverdialog ausblenden 
    setVisible(false)
// und alle States auf Initialwerte zurücksetzen
setLife(3) 
setScoreState(0)
setFeedback("")

}


//////////////////////

   

const content =  <>
    <h2>Ohje, verloren :-( </h2>
    <p>Möchtest du das Spiel beenden?</p>
   {/*  <button onClick={handleNoBtnClick}>Nein, nochmal Spielen</button></> */}
    <Link to ="/">
    <button >Ja, beenden</button>
    </Link>
    <Link to ="/gamearea">
        <button onClick={handleNoBtnClick}>Nein, nochmal Spielen</button>
    </Link>
    
</>


let toShow

if(visible) { 
     toShow = <DIV>{content}</DIV>
}else {
     toShow = <DIV hidden>{content}</DIV>
}





return <> 
{toShow}
</>

}





const DIV = styled.div`

  background-color: peachpuff;
  height: 60vh;
  width: 80vw;
  position: absolute;
  margin: 0 10%;
  opacity: 1;
`;
