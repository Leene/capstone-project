import React from 'react'
import styled from 'styled-components'
import { exercises } from '../data/exercises.json'

export const text = "blöb"

export default function GameField() {
    const text = "blöb"
    //export const text = "blöb"
    //export const text = exercises[0].result

    // const breaks = exercises[0].result

    const newText = text.split('\n').map((item, i) => {
        // return <p key={i}>{item}</p>;
        return <span key={i}>{item}< br /></span>;
    });

    const newText1 = exercises[1].result.split('\n').map((item, i) => {
        // return <p key={i}>{item}</p>;
        return <span key={i}>{item}< br /></span>;
    });

    const newText2 = exercises[2].result.split('\n').map((item, i) => {
        // return <p key={i}>{item}</p>;
        return <span key={i}>{item}< br /></span>;
    });


    return (
        <Boxarea>
            <Box>
                <Textbox>
                    <code>
                        {newText}
                    </code>
                </Textbox>
            </Box>
            <Box>
                <Textbox>
                    <code>
                        {newText1}
                    </code>
                </Textbox>
            </Box>
            <Box>
                <Textbox>
                    <code>
                        {newText2}
                    </code>
                </Textbox>
            </Box>
        </Boxarea>
    )


}
export default function getEmmetOfActiveExercise() {
    text = exercises[0].result
    return text
}
const Boxarea = styled.div`
    height: auto;
    width: 400;
    margin: 60px;
`

const Box = styled.div`
    background-color: rgba(255, 255, 255, 0.338);
    height: auto;
    width: 300px;
    margin: 0 0 20px 0;
    border-radius: 1rem;
    box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.1);
    padding: 10px;
`

const Textbox = styled.div`
    background-color: rgba(27, 24, 87, 0.728);
    margin: 0px 0px;
    color: rgb(152, 236, 255);
    padding: 10px 3px;
`
