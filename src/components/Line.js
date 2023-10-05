import * as React from 'react'
import { getArrow } from 'curved-arrows'
let arrayYX = {
    x : 900,
    y : 100
}

export default function Line() {
    const p1 = { x: arrayYX.x + 90, y: arrayYX.y + 70 }
    const p2 = { x: 855, y: 300 }
    const arrowHeadSize = 1
    const color = 'white'
    const [sx, sy, c1x, c1y, c2x, c2y, ex, ey, ae] = getArrow(p1.x, p1.y, p2.x, p2.y, {
        padEnd: arrowHeadSize,
    })

    return (
        <svg
            id='wy'
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d={`M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`}
                stroke={color}
                strokeWidth={arrowHeadSize / 2}
                fill="none"
            />

            <polygon
                points={`0,${-arrowHeadSize} ${arrowHeadSize *
                2},0, 0,${arrowHeadSize}`}
                transform={`translate(${ex}, ${ey}) rotate(${ae})`}
                fill={color}
            />
        </svg>
    )
}