import React, { useState } from 'react'
import GameInterface from './GameInterface'
import Keyboard from './Keyboard'
import styled from 'styled-components'
import { exercises } from '../data/exercises.json'
import CreateOrder from './CreateOrder'
import TextArea, { Feedback } from './TextArea'
import GameOverDialog from './GameOverDialog'
import WinnerDialog from './WinnerDialog'
import { COLORS } from '../constants';

export default function GameArea() {
    let order = CreateOrder()

    const [inputText, setInputText] = useState('Welcher Emmet-Befehl passt?')
    const [scoreState, setScoreState] = useState(0)
    const [feedback, setFeedback] = useState(' ')
    const [life, setLife] = useState(3)
    const [visible, setVisible] = useState(false)
    const [winnerDialog, setWinnerDialog] = useState(false)
    const [orderNum, setOrderNum] = useState(0)
  
    let hint = exercises[order[orderNum]].emmet

    /////////////// Text für Textbox hübsch machen /////////////

    const newText = exercises[order[orderNum]].result
        .split('\n')
        .map((item, i) => {
            return (
                <span key={i}>
                    {item}
                    <br />
                </span>
            )
        })

    /////////////////////////

    return (
        
        <Gamefield>
            <Header>
            <HeadLogo alt="logo" src="/EmmetGame_Headlogo_Schatten.png"/>
            </Header>
            <WinnerDialog
                winnerDialog={winnerDialog}
                setWinnerDialog={setWinnerDialog}
                setLife={setLife}
                setScoreState={setScoreState}
                setFeedback={setFeedback}
                setOrderNum={setOrderNum}
            />

<GameOverDialog

                visible={visible}
                setVisible={setVisible}
                setLife={setLife}
                setScoreState={setScoreState}
                setFeedback={setFeedback}
                setOrderNum={setOrderNum}

            />
            <Boxarea>
                {Feedback(feedback)}
                <Box>
                    <Textbox>
                        <code>{newText}</code>
                    </Textbox>
                   
                    <TextArea
                        amountOfQuestions={exercises.length}
                        hint={hint}
                        inputText={inputText}
                        setInputText={setInputText}
                        scoreState={scoreState}
                        setScoreState={setScoreState}
                        setFeedback={setFeedback}
                        setLife={setLife}
                        life={life}
                        setVisible={setVisible}
                        orderNum={orderNum}
                        setOrderNum={setOrderNum}
                        setWinnerDialog={setWinnerDialog}
                    />
                    {/* {TextArea(getTypedText(), inputText, setInputText, hint)} */}
                    
                 </Box>
            </Boxarea>
            <Gameinterface>
                <GameInterface
                    hint={hint}
                    scoreState={scoreState}
                    life={life}
                />
                <KeyboardStyle>
                    <Keyboard
                        inputText={inputText}
                        setInputText={setInputText}
                        order={order}
                        orderNum={orderNum}
                    />
                </KeyboardStyle>
            </Gameinterface>
        </Gamefield>
    )
}


const Header = styled.header`
display: flex;
justify-content: center;
 
  position:fixed;
  
  
`
const HeadLogo = styled.img`
  height: 40px;
  opacity:1;
  padding: 2px;
`

const Gamefield = styled.section`
    height: 90vh;
    display: flex;
    
    justify-content: center;
    text-align: center;
    margin-top: -40px;
`

const Boxarea = styled.div`
   // border: solid 1px pink;
    height: auto;
    width: auto;
    margin-top: 10vh;
    
`

const Box = styled.div`
//display:flex;
//align-items:space-around;
//align-content: center;

border-style: solid;
    border-width: 2px;

    background-color: rgba(255, 255, 255, 0.338);
    height: auto;
    width: 80vw;
    box-shadow: 1px 1px 8px 3px ${COLORS.shadow};

    padding: 10px;
    box-shadow: inset 1px 2px 2px 0px ${COLORS.light};
    border-image: 
    linear-gradient(
      to bottom, 
        rgba(255,255,255,0) 1%,
        rgba(255,255,255,0.8) 10%,
        rgba(255,255,255,0) 100%
    ) 1 100%;
    
    
`

const Textbox = styled.div`
    background-color: rgba(27, 24, 87, 0.728);
    margin: 3px 0px;
    color: rgb(152, 236, 255);
    padding: 10px 3px;
    
`

const Gameinterface = styled.div`
    display: grid;
    grid-template-areas:
        'score middle life'
        'keyboard keyboard keyboard';
    grid-template-rows: 1fr 5fr;
    grid-template-columns: 1fr 6fr 1fr;
    position: fixed;
    width: 100vw;
    bottom: 0px;
`

const KeyboardStyle = styled.section`
    margin-top: -1vh;
    user-select: none;
    grid-area: keyboard;
    width: 100vw;
    display: flex;
    font-size: calc(10px + 2vmin);
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
    & div {
        //background: rgba(75, 56, 215, 1) 9%;
    }
    & button {
        border: 0;
        margin:1px;
        list-style: none;
        background: linear-gradient(
            135deg,
            rgba(${COLORS.background2_NUM}, 0.5) 1%,
            rgba(${COLORS.light}, 0.4) 35%,
            rgb(${COLORS.background1_NUM}, 1) 100%
        );
        font-weight: bold;
        font-size: 1.3em;
        color: ${COLORS.text};
        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);
    }
`
