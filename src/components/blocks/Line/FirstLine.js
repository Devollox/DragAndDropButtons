/* eslint-disable */

import * as React from "react";
import {getArrow} from "curved-arrows";


export default function FirstLine() {
    let getPositionArrayUser = Object.assign({}, $('#getUser').position());
    let getPositionArrayPlain = Object.assign({}, $('#getButton').position());

    // Снизу был баг, оставил на всякий случай
    /*
        let arrayYX = {
            x: clone.left,
            y: clone.top
        }

        let arrayYXTwo = {
            x: cloneTwo.left,
            y: cloneTwo.top
        }
     */

    let p2 = {x: getPositionArrayUser.left + 87 + 30000, y: getPositionArrayUser.top + 70 + 30000}
    let p1 = {x: getPositionArrayPlain.left + 255 + 30000, y: getPositionArrayPlain.top + 30000}
    const arrowHeadSize = 1
    const color = 'white'
    let [sx, sy, c1x, c1y, c2x, c2y, ex, ey, ae] = getArrow(p1.x, p1.y, p2.x, p2.y, {
        padEnd: arrowHeadSize,
    })
    return (
        <div className='svg-line-info' style={{
            position: 'static',

        }}>
            <svg
                style={{
                    width: '100000px',
                    height: '100000px',
                    position: 'absolute',
                    top: '-30000px',
                    left: '-30000px'
                }}

                xmlns="http://www.w3.org/2000/svg">
                <path
                    style={{
                        position: "absolute"
                    }}
                    d={`M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`}
                    stroke={color}
                    strokeWidth={arrowHeadSize / 2}
                    fill="none"
                />

                <polygon
                    style={{
                        position: "absolute"
                    }}
                    points={`0,${-arrowHeadSize} ${arrowHeadSize *
                    2},0, 0,${arrowHeadSize}`}
                    transform={`translate(${ex}, ${ey}) rotate(${ae})`}
                    fill={color}
                />
            </svg>
        </div>
    )
}