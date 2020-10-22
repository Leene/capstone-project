import React, {useState, useReducer } from "react";

export default function Reducer(){
    const input=""

    const [inputText, setInputText] = useState(initialState.input);
    const [scoreState, setScoreState] = useState(0);
  
return inputText, scoreState , setInputText ,setScoreState

}

export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "OK_CHECK":
      return { life: state.life };
    case "LIFE_DECREMENT":
      return { life: state.life - 1 };
    case "DELETE_INPUT":
      return { input: state.input};
    case "SHOW_HINT":
      return { hint: "geht?", life: state.life, score: state.score };
    case "INCREMENT":
      return { score: state.score + 1 };
    case "DECREMENT":
      return { score: state.score - 1 };
    default:
      throw new Error("Unbekannte Action");
  }
};
/* export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "OK_CHECK":
      return { life: state.life };
    case "LIFE_DECREMENT":
      return { life: state.life - 1 };
    case "DELETE_INPUT":
      return { life: state.life - 1 };
    case "SHOW_HINT":
      return { hint: "geht?", life: state.life, score: state.score };
    case "INCREMENT":
      return { score: state.score + 1 };
    case "DECREMENT":
      return { score: state.score - 1 };
    default:
      throw new Error("Unbekannte Action");
  }
}; */

export const initialState = {
    
    score: 0,
    hint: "nix",
    life: 3,
    question: "Frage?",
    answer: "muh",
    input: "Wie lautet der passende Emmetbefehl?"
  };






export const reducerFunction2 = (inputState, action) => {
  switch (action.type) {
    case "OK_CHECK":
        return { input: inputState.input  + Reducer().inputText };
    case "KEY_INPUT":
        return { input: "input geht" }, console.log("input geht");
    default:
      throw new Error("input reducer geht nicht");
  }
};


