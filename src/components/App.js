/* eslint-disable */

import '../style/App.css'
import '../style/global.css'

import Button from "./blocks/Button";
import Users from "./blocks/Users";
import Plain from "./blocks/Plain";
import FirstLine from "./blocks/Line/FirstLine";
import SecondLine from "./blocks/Line/SecondLine";

import * as React from "react";

export default function App() {


    setInterval(() => {
        $('#nodes-container').draggable()
    }, 0)


    return (
        <div
            className="app"
        >
            <div className="container">
                <div
                    className="nodes-container"
                    id='nodes-container'
                >
                    <FirstLine/>
                    <SecondLine/>
                    <Users/>
                    <Button/>
                    <Plain/>

                    {
                        <div>
                            <div className='react-flow__viewport react-flow__container'>
                                <svg className="react-flow__background react-flow__container">
                                    <pattern id="pattern-84426" x="-3" y="-4" width="18" height="18"
                                             patternUnits="userSpaceOnUse">
                                        <circle cx="0.45" cy="0.45" r="0.45" fill="#81818a"></circle>
                                    </pattern>
                                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-84426)"></rect>
                                </svg>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

