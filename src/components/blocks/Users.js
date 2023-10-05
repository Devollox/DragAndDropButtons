import * as React from "react";


export default function Users() {

    const halderZIndex = () => {
        document.getElementById('draggableOne').style.zIndex = 2
        document.getElementById('draggableTwo').style.zIndex = 1
    }

    setInterval(() => {
        // eslint-disable-next-line no-undef
        $('#getUser').draggable()
    },0)

    return (
        <div onClick={halderZIndex} className='userCoordination' id='getUser' style={{
            top: 100,
            left: 800,
            position: "absolute",
            zIndex: '1',
        }}>
            <div className='react-center-flow'>
                <div className='box-inner'>
                    <div className="inner">
                        <svg
                            data-icon="text-height"
                            className="svg-inline--fa fa-text-height fa-w-18 " role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor"
                                  d="M304 32H16A16 16 0 0 0 0 48v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h56v304H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-40V112h56v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm256 336h-48V144h48c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 0 0-22.62 0l-80 80C379.36 126 384.36 144 400 144h48v224h-48c-14.31 0-21.32 17.31-11.31 27.31l80 80a16 16 0 0 0 22.62 0l80-80C580.64 386 575.64 368 560 368z"></path>
                        </svg>
                    </div>
                </div>
                <div>
                    <div className='object-title'>
                        User
                    </div>
                    <div className='object-description'>
                        User Option
                    </div>
                </div>
                <div className='circle' id='circle'/>
            </div>
        </div>
    )
}