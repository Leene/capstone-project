import React from "react"
import "../css/Style.css"
import styled from "styled-components"

export default function GameField() {
    return (
        <Boxarea>
            <Box>
                <Textbox>
                    <code>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nesciunt doloremque corrupti aperiam impedit
                        orrupti aperiam impedit
                    </code>
                </Textbox>
            </Box>

            <Box>
                <Textbox>
                    <code>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nesciunt doloremque corrupti aperiam impedit
                        laudantium aut vero ipsa at adipisci sit cum officia
                        molestiae, eligendi ea repellendus ducimus esse tenetur
                        ut.
                    </code>
                </Textbox>
            </Box>
            <Box>
                <Textbox>
                    <code>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nesciunt doloremque corrupti aperiam impedit
                        orrupti aperiam impedit
                    </code>
                </Textbox>
            </Box>
        </Boxarea>
    )
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
