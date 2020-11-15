import React from 'react'
import styled from 'styled-components'
//import { exercises } from '../data/exercises.json'
import CreateOrder from './CreateOrder'
//import CreateScore from './CreateScore'
//import {getOrder} from "./GameArea"
import { COLORS } from '../constants';


export default function TextArea(props) {

    //export default function TextArea(noteText, inputText, setInputText, hint) {
    const {
      amountOfQuestions,
        hint,
        inputText,
        setInputText,
        setScoreState,
        scoreState,
        setFeedback,
        life,
        setLife,
        setVisible,
        orderNum,
        setOrderNum,
        setWinnerDialog
    } = props

    const btnDeleteText = 'X'
    const btnInputText = 'OK'

    console.log("vormHandlerorderNum:" + orderNum)
    let i = orderNum

    const handleOKBtnClick = () => {
        if (inputText === hint  ) {
            setScoreState(scoreState + 10)
            setFeedback('Richtig :-D')
            setInputText('Welcher Emmet-Befehl passt?')

            console.log("neue orderNum:" + orderNum)
            
            if(orderNum < amountOfQuestions-1) // -1 da es hier dem höchsten Indexwert von Array "order" entsprechen muss und Indizes bei 0 starten
                {setOrderNum(orderNum +1)}
             else {
              setFeedback('Super, alle Fragen richtig gelöst!')
              setWinnerDialog(true)
            }
        }
        else {
            setFeedback('Falsch :-(')
            setLife(life - 1)
            setInputText('Welcher Emmet-Befehl passt?')

            if (life <= 1 ) {
                setFeedback('Game Over')
                setVisible(true)
                
            }
        }

        //>>>>> TODO: Die aktuelle Frage bleibt bis zur richtigen antwort oder Leben von 0

        // console.log("clicked ok");
        // console.log("OkBtn inputText: " + inputText);
        // console.log("OkBtn hintTExt: " + hint);
        // console.log("OkBtn score: " + setScoreState);
    }

    const handleDeleteBtnClick = () => {
        setInputText('Deine neue Eingabe ...')
        // console.log("Delete is clicked");
    }

    // console.log("inputText: ", inputText);

    return (
        <>
            <Textarea>{inputText}</Textarea>
            <BTN title="Eingabe löschen" onClick={handleDeleteBtnClick}>{btnDeleteText}</BTN>
            <BTN title="Eingabe bestätigen" onClick={handleOKBtnClick}>{btnInputText}</BTN>
        </>
    )
}

export function Feedback(feedbackText) {
    const Wrap = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        margin-bottom: 5px;
    `

    const DIV = styled.div`
        font-size: 0.8em;
        color: rgb(${COLORS.light});
        width: 50%;
        background-color: rgba(${COLORS.light}, 0.2);
        font-weight:bold;
       border-radius: 20px;
        margin: 20px;
    `

    return (
        <Wrap>
            <DIV>{feedbackText}</DIV>
        </Wrap>
    )
}

const Textarea = styled.div`
    contenteditable: true;
    overflow-wrap: break-word;
    color: white;
    font-weight: bold;
    box-shadow: inset 2px 2px 3px 2px rgba(${COLORS.shadow}, 0.2); 
    

    background-color: #393c8060;
    padding: 10px;
   margin-top: 8px;
   
`
const BTN = styled.button`
cursor:pointer;
min-width:60px;
Border-radius:20px;
border:none;
   box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2); 
    margin: 20px  20px 0 ;
    padding: 10px;
    background-color: rgba(${COLORS.violet}, 0.5);


    color: rgb(${COLORS.lightText});
   font-weight:bold;
    letter-spacing: 1px;
    &:hover {
        background-color: rgb(${COLORS.background1_NUM});
    }

`
