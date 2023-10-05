/* eslint-disable */
import * as React from "react";

export default function Plain() {
    const halderZIndexTwo = () => {
        document.getElementById('draggableOne').style.zIndex = 1
        document.getElementById('draggableTwo').style.zIndex = 2
    }

    setInterval(() => {
        // eslint-disable-next-line no-undef
        $('#getPlain').draggable()
    },0)

    return (
        <div onClick={halderZIndexTwo} id='getPlain' style={{
            top: 550,
            left: 600,
            position: "absolute"
        }}>
            <div style={{width: '300px'}} id='draggable' className='react-center-flow'>
                <div className='box-inner'>
                    <div style={{backgroundColor: 'white'}} className="inner">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="reply"
                             className="svg-inline--fa fa-reply fa-w-16 " role="img"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path
                                d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"></path>
                        </svg>
                    </div>
                </div>
                <div>
                    <div className='object-title'>
                        Plain Text Reply
                    </div>
                    <div className='object-description'>
                        Bot replies with a plain text response
                    </div>
                </div>
                <div style={{marginTop: '22%', backgroundColor: 'white'}} className='circle'/>
                <div style={{marginTop: '-5px', backgroundColor: 'white'}} className='circle'/>
            </div>
        </div>
    )
}