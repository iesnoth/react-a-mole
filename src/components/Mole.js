// This will represent a displayed mole. It ultimately will contain a timer determining the lifespan of a mole.
// This component will render when displayMole === true
import React, {useEffect} from "react";
import MolePic from '../mole.png'

function Mole(props){
    useEffect(()=>{
        let randomTime = Math.ceil(Math.random ()* 3452)
        let timer= setTimeout(()=>{
            //taken from MoleContainer
            props.change(false)
        },randomTime)
        //this is a clean up function
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{'width':'30vw'}}
            src={MolePic}
            onClick={props.handleClick}
            alt={'mole'}
           />
        </div>
    )
}

export default Mole