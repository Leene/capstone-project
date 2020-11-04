import React, { useState } from "react";
import styled from "styled-components";
import { exercises } from "../data/exercises.json";
import CreateOrder from "./CreateOrder";
import CreateScore from "./CreateScore";
import GameOverDialog from "./GameOverDialog";


export default function TextArea(props) {
//export default function TextArea(noteText, inputText, setInputText, hint) {
  const {hint, inputText, setInputText, setScoreState, scoreState, 
    setFeedback, life,  setLife, setVisible} = props  

const btnDeleteText = "X";
  const btnInputText = "OK";

  
  
  const handleOKBtnClick = () => {
    if (inputText === hint){
      setScoreState( scoreState+10)
      //Feedback("Richtig")
//>>>>> TODO: nächsteFrage anzeigen lassen 
      setFeedback("Richtig :-D")
    }else {
      setFeedback("Falsch :-(")
      //"FAALSCH!! Punktabzuuccch"
      setLife(life-1)
     
//>>>>> TODO: Bei 0 Leben Gameover, evtl als alert das fragt ob man nochmal will oder nicht
      if (life <= 1){
        setFeedback("Game Over")
        setVisible(true)
       
        
      }
    }

   

    //>>>>> TODO: Die aktuelle Frage bleibt bis zur richtigen antwort oder Leben von 0

   // console.log("clicked ok");
   // console.log("OkBtn inputText: " + inputText);
   // console.log("OkBtn hintTExt: " + hint);
   // console.log("OkBtn score: " + setScoreState); 

  };

  const handleDeleteBtnClick = () => {
    setInputText("Deine neue Eingabe ...");
   // console.log("Delete is clicked");
  };
 
  // console.log("inputText: ", inputText);

  return (
    <>
      <Textarea>{inputText}</Textarea>
      <button onClick={handleDeleteBtnClick}>{btnDeleteText}</button>
      <button onClick={handleOKBtnClick}>{btnInputText}</button>
      <button onClick={GameOverDialog}>heyo</button>
    </>
  );
}


export function Feedback(feedbackText){

  const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    `

  const DIV = styled.div`
    font-size:0.8em;
    color: white;
    font-weight: bold;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    margin:20px 
  `

  return <Wrap><DIV>{feedbackText}</DIV></Wrap>
}

const Textarea = styled.div`
  contenteditable: true;
  overflow-wrap: break-word;
  color: white;
  font-weight: bold;
  width: 96%;

  background-color: #393c8060;
  padding: 1vw 2vw 2vw 2vw;
  margin: 1vw 1vw 3px 8px;
  // resize: none;
`;

