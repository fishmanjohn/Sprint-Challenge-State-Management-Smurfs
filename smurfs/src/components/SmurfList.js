import React,{useContext} from 'react';
import {smurfContext} from '../contexts/contexts'
//components
import {Smurf} from './smurf'

export const SmurfList =()=>{
    const smurfData = useContext(smurfContext)

    console.log(`this is in list ${smurfData}`)
    return(
        <div className='smurfList'>
            {smurfData.map(smurf=>(
                <Smurf key ={smurf.id} smurf={smurf}/>
            ))}

        </div>
    )
} 