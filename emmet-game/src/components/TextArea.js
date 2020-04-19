import React, { useState } from "react";
import styled from "styled-components";
import { exercises } from "../data/exercises.json";
import CreateOrder from "./CreateOrder";
import { clickedKey, getTypedText, typedText } from "./Keyboard";

let noteText = getTypedText();
export default function TextArea(noteText, inputText, setInputText) {
  const btnDeleteText = "X";
  const btnInputText = "OK";
  const btnText2 = "$";

  const handleClick = () => {
    if (inputText === "Welcher Emmet-Befehl passt?") {
      setInputText(" ");
      setInputText(btnInputText);
    } else if (inputText === "Deine neue Eingabe ...") {
      setInputText(" ");
      setInputText(btnInputText);
    } else {
      setInputText(inputText + btnInputText);
    }

    console.log("clicked");
  };

  const handleDeleteBtnClick = () => {
    setInputText("Deine neue Eingabe ...");
    console.log("Delete is clicked");
  };

  console.log("noteText: " + noteText);

  console.log("rendering...", inputText);

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
  border: none;
  background-color: #393c8060;
  padding: 1vw 2vw 2vw 2vw;
  margin: 1vw 2vw 0 0;
  // resize: none;
`;
