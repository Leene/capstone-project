import React, { Fragment } from "react"
import "../css/Style.css"

export default function Gamefield() {
    return (
        <Fragment>
            <div className="gamefield__box-area">
                <div className="gamefield__box">
                    <div className="code_box">
                        <code>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nesciunt doloremque corrupti aperiam impedit
                            orrupti aperiam impedit
                        </code>
                    </div>
                </div>

                {/* li*5
                <p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </p> */}
                <div className="gamefield__box">
                    <div className="code_box">
                        <code>
                            {" "}
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nesciunt doloremque corrupti aperiam impedit
                            laudantium aut vero ipsa at adipisci sit cum officia
                            molestiae, eligendi ea repellendus ducimus esse
                            tenetur ut.
                        </code>

                        {/* <p>
                        <code id="output" lang="html5">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </code>
                    </p> */}
                    </div>
                </div>
                <div className="gamefield__box">
                    <div className="code_box">
                        <code>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nesciunt doloremque corrupti aperiam impedit
                            orrupti aperiam impedit
                        </code>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
