import React, { useState } from "react";
import styled from "styled-components";
import { exercises } from "../data/exercises.json";
import CreateOrder from "./CreateOrder";
import { clickedKey, getTypedText, typedText } from "./Keyboard";

let noteText = getTypedText();
export default function TextArea(noteText) {
  
    //preventDefault();
    //const [value, setValue] = useState(props.name);
    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // };

    const btnText = "&";
  const btnText2 = "$";
  //console.log("getTypedText: " + props);
  //console.log(props.keyValue);
  const [counter, setCounter] = useState("0");

    const handleClick = () => {
      setCounter(counter + btnText);
      console.log("clicked");
    };

    console.log("noteText: " + noteText);

  console.log("rendering...", counter);
  
  return (
    <>
      <Textarea>{counter}</Textarea>
      <button onClick={handleClick}>{btnText}</button>
    </>
  );
}

const Textarea = styled.div`
  contenteditable: true;
  width: 96%;
  border: none;
  background-color: #393c8060;
  padding: 1vw 2vw 0 2vw;
  margin: 1vw 2vw 0 0;
  // resize: none;
`;
