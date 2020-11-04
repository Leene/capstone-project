import React from "react";
import styled from "styled-components";

export default function GameOverDialog(props) {
  ////////////////////
const handleYesBtnClick = () => {
    console.log("jA geklickt")
}

const handleNoBtnClick = () => {
    console.log("NO geklickt")
}






//////////////////////

    const {visible} = props

    console.log("visible: " + props.visible)

    const content =  <>
    <h2>Ohje, verloren :-( </h2>
    <p>Möchtest du das Spiel beenden?</p>
    <button onClick={handleYesBtnClick}>Ja, beenden</button>
    <button onClick={handleNoBtnClick}>Nein, nochmal Spielen</button></>


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
