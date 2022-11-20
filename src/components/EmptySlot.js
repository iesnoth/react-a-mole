// This will represent an empty molehill or an invalid location to click. Much like its sister component, it will have an internal timer to cycle the display.
// This component will render when displayMole === false

import React, { useEffect } from "react"
import MoleGone from '../molehill.png'

//A useEffect hook that will start the timer and clean it up afterward
function EmptySlot(props) {
    useEffect(()=>{
        let randomTime = Math.ceil(Math.random ()* 3452)
        let timer= setTimeout(()=>{
            //taken from MoleContainer
            props.change(true)
        },randomTime)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{'width':'30vw'}}
            src={MoleGone}
            alt={'molehill'}
           />
        </div>
    )
}

export default EmptySlot