//This will be the component that decides which child component is rendered.
//MoleContainer gets its props from App, and sends props to its children, Mole and EmptySlot
import React, { useState } from "react";
import Mole from './Mole';
import EmptySlot from "./EmptySlot";

// A handleClick function that will increment the score by 1 and
//immediately set the clicked-on mole to no longer display (we will pass this down only to Mole components)
// A ternary that will determine which child to render

function MoleContainer(props) {
    let [moleUp, setMoleUp] = useState(false)
    //passed to Mole, adds to player score and sets the Mole to Empty
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setMoleUp(false)
    }

//"change" is not an attribute from react, but a name made by the coder
//this variable is ternary
    let displayMole = moleUp ? <Mole change={setMoleUp} handleClick={handleClick} /> : <EmptySlot change={setMoleUp} />

    return (
        <div style={{ 'display': 'inline-block', 'width': '30vw' }}>
            {displayMole}
        </div>
    )
}

export default MoleContainer