import React from "react"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
} from "react-router-dom"

import styled from "styled-components/macro"
import GameArea from "./components/GameArea"
import StartArea from "./components/StartArea"

export default function App() {
    return (
        <>
            <main>
                <Router>
                    <NavigationStyled>
                        {/*<nav> */}
                        <div className="nav__home">
                            <LinkStyled to="/">Home</LinkStyled>
                        </div>
                        <div className="nav__title"></div>

                        <div className="nav__gamearea">
                            <LinkStyled to="/gamearea">Start</LinkStyled>
                        </div>
                    </NavigationStyled>

                    <Switch>
                        <Route path="/" exact component={home} />
                        <Route path="/gamearea" component={gamearea} />
                    </Switch>
                </Router>
            </main>
        </>
    )
}

const home = () => StartArea()

const gamearea = () => GameArea()

const LinkStyled = styled(NavLink)`
    flex-grow: 1;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: gray;
    height: 100%;
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0px 0px 4px 3px rgba(32, 13, 94, 0.2);

    &.active {
        background: purple;
    }
`

const NavigationStyled = styled.nav`
    display: grid;
    grid-auto-flow: column;
    gap: 1px;
`
