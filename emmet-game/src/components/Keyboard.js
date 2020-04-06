import React from 'react'
import '../css/Style.css'
import { signs } from '../data/keyboard_symbols.json'
import { exercises } from '../data/exercises.json'
import styled from 'styled-components'

export default function Keyboard() {

  function renderLeftKeys() {
    const leftSite = signs.splice(0, 12);
    return leftSite.map(key => (
      <KeysSideDiv key={key.symbol}>{key.symbol}</KeysSideDiv>
    ))
  }
  function renderRightKeys() {
    const rightSite = signs.splice(0, 12);

    return rightSite.map(key => (
      < KeysSideDiv
        onClick={() => clickedKey(key.symbol)} key={key.symbol} >
        {key.symbol}
      </KeysSideDiv >
    ))
  }

  return (
    <>
      <KeysSide >{renderLeftKeys()}</KeysSide>
      <KeysMiddle>
        <KeysMiddleDiv onClick={() => clickedKey("!!")} > html</KeysMiddleDiv>
        <KeysMiddleDiv></KeysMiddleDiv>
        <KeysMiddleDiv>ipsum</KeysMiddleDiv>
        <KeysMiddleDiv>amet</KeysMiddleDiv>
      </KeysMiddle>
      <KeysSide>{renderRightKeys()}</KeysSide>
    </>
  );
}

function clickedKey(symbol) {
  // e.preventDefault()
  console.log("symbol: " + symbol);
  //symbol muss verglichen werden mit dem 
  //was auf gamefield angezeigt wird


}

const KeysSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 35vw;
  height: 30vh;
  font-weight: bold;
  font-size: 1.5em;
  color: #566fad;
  text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);
`;
const KeysSideDiv = styled.button`
  cursor: pointer;
  width: 33%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    color: #f2fcfd;
    background: linear-gradient(
      45deg,
      rgb(75, 192, 215) 100%,
      rgb(220, 236, 255) 10%
    );
    box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
    margin-top: -2em;
  }
`;

//  color: #f2fcfd;
const KeysMiddle = styled.div`
  width: 30%;
`;

const KeysMiddleDiv = styled.button`
  height: 25%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    color: #f2fcfd;
    background: linear-gradient(
      45deg,
      rgb(75, 192, 215) 100%,
      rgb(220, 236, 255) 10%
    );
    box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
  }
`;
