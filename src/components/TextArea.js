import React, { useState } from "react";
import styled from "styled-components";
import { exercises } from "../data/exercises.json";
import CreateOrder from "./CreateOrder";
import CreateScore from "./CreateScore";


export default function TextArea(props) {
//export default function TextArea(noteText, inputText, setInputText, hint) {
  const {hint, inputText, setInputText} = props  

const btnDeleteText = "X";
  const btnInputText = "OK";


  const handleClick = () => {
    CreateScore(inputText, hint);

    console.log("clicked");
  };

  const handleDeleteBtnClick = () => {
    setInputText("Deine neue Eingabe ...");
    console.log("Delete is clicked");
  };

  

  console.log("inputText: ", inputText);

  return (
    <>
      <Textarea>{inputText}</Textarea>
      <button onClick={handleDeleteBtnClick}>{btnDeleteText}</button>
      <button onClick={handleClick}>{btnInputText}</button>
    </>
  );
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
