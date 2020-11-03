import React, { useState } from "react";
import GameInterface from "./GameInterface";
import Keyboard, { clickedKey, getTypedText, typedText } from "./Keyboard";
import styled from "styled-components";
import { exercises } from "../data/exercises.json";
import CreateOrder from "./CreateOrder";
import TextArea, {Feedback} from "./TextArea";


export default function GameArea() {
  const [inputText, setInputText] = useState("Welcher Emmet-Befehl passt?");
  const [scoreState, setScoreState] = useState(0);
  const [feedback, setFeedback] = useState(" ");

  
let order = CreateOrder();
  let hint = exercises[order[0]].emmet;

/////////////// Text für Textbox hübsch machen /////////////
const newText = exercises[order[0]].result.split("\n").map((item, i) => {
  // return <p key={i}>{item}</p>;
  return (
    <span key={i}>
      {item}
      <br />
    </span>
  );
});


/////////////////////////


  return (
    <Gamefield>
      
      <Boxarea>
     {Feedback(feedback)}
      <Box>
        <Textbox>
          <code>{newText}</code>
        </Textbox>
        <TextArea hint={hint} inputText={inputText} setInputText={setInputText} scoreState={scoreState} setScoreState={setScoreState} setFeedback={setFeedback} />
        {/* {TextArea(getTypedText(), inputText, setInputText, hint)} */}
      </Box>
    </Boxarea>
      <Gameinterface>
        <GameInterface hint={hint} inputText={inputText} setInputText={setInputText} scoreState={scoreState}/>
        <KeyboardStyle>
          <Keyboard inputText={inputText} setInputText={setInputText} order={order}/>
        </KeyboardStyle>
      </Gameinterface>
    </Gamefield>
  );
}

const Gamefield = styled.section`
  height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  margin-top: -40px;
`;

const Boxarea = styled.div`
 // border: solid 1px pink;
  height: auto;
  width: auto;
  margin-top: 20vh;
`;

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.338);
  height: auto;
  width: 80vw;
  margin: 0 0 20px 0;
  border-radius: 1rem;
  box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.1);
  padding: 10px;
`;

const Textbox = styled.div`
  background-color: rgba(27, 24, 87, 0.728);
  margin: 0px 0px;
  color: rgb(152, 236, 255);
  padding: 10px 3px;
`;



const Gameinterface = styled.div`
  display: grid;
  grid-template-areas:
    "score middle life"
    "keyboard keyboard keyboard";
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 1fr 6fr 1fr;
  position: fixed;
  width: 100vw;
  bottom: 0px;
`;

const KeyboardStyle = styled.section`
  margin-top: -1vh;
  user-select: none;
  grid-area: keyboard;
  background-color: gainsboro;
  width: 100vw;
  display: flex;
  font-size: calc(10px + 2vmin);
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
  & div {
    background: rgba(75, 192, 215, 1) 9%;
  }
  & button {
    border: 0;
    list-style: none;
    background: linear-gradient(
      45deg,
      rgba(75, 192, 215, 1) 9%,
      rgb(220, 236, 255) 100%
    );
    font-weight: bold;
    font-size: 1.3em;
    color: #566fad;
    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);
  }
`;
