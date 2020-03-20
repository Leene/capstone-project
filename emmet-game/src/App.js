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

const home_icon = "https://img.icons8.com/material-rounded/24/ffffff/home.png"
const start_icon =
    "https://img.icons8.com/ios-filled/24/ffffff/circled-play.png"

export default function App() {
    return (
        <>
            <main>
                <Router>
                    <NavigationStyled>
                        <div className="nav__home">
                            <LinkStyled to="/">
                                <img alt="" src={home_icon} />
                            </LinkStyled>
                        </div>
                        <div className="nav__title"></div>

                        <div className="nav__gamearea">
                            <LinkStyled2 to="/gamearea">
                                <img alt="" src={start_icon} />
                            </LinkStyled2>
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
const LinkStyled2 = styled(NavLink)`
    flex-grow: 1;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: gray;
    height: 120%;
    border-radius: 0 0 0 100px;

    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0px 0px 4px 3px rgba(32, 13, 94, 0.2);

    &.active {
        background: purple;
    }
`
const LinkStyled = styled(NavLink)`
    flex-grow: 1;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: gray;
    height: 120%;
    border-radius: 0 0 100px 0;

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
