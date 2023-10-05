/* eslint-disable */
import * as React from "react";

export default function Button() {
    const halderZIndexTwo = () => {
        document.getElementById('draggableOne').style.zIndex = 1
        document.getElementById('draggableTwo').style.zIndex = 2
    }

    setInterval(() => {
        // eslint-disable-next-line no-undef
        $('#getPlain').draggable()
    },0)

    return (
        <div onClick={halderZIndexTwo} className='getButton' id='getButton' style={{
            top: 270,
            left: 633,
            position: "absolute"
        }}>
            <div style={{width: '500px'}} id='draggable' className=' react-center-button'>
                <div className='box-inner'>
                    <div style={{backgroundColor: '#ffc107'}} className="inner">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                             data-icon="hammer" className="svg-inline--fa fa-hammer fa-w-18 "
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path fill="currentColor"
                                  d="M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z"></path>
                        </svg>
                    </div>
                </div>
                <div>
                    <div className='object-title'>
                        /Buttons
                    </div>
                    <div className='object-description'>
                        <div style={{
                            marginTop: '5px'
                        }}>
                            <span className="object-title"></span>
                            <span>Drag and drop different
                            <span style={{
                                color: 'rgb(141, 14, 171)'
                            }}
                            > options</span>,
                            <span style={{
                                color: 'rgb(53, 141, 235)'
                            }}
                            > actions</span> and
                            <span style={{
                                color: 'rgb(40, 167, 69)'
                            }}
                            > conditions</span> to add them to your command. Connect the corresponding colors to create your command.</span>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: '22.5%', backgroundColor: 'white', scale: '150%'}} className='circle'/>
                <div style={{marginTop: '-5px', backgroundColor: 'white', scale: '150%'}} className='circle'/>
            </div>
        </div>
    )
}