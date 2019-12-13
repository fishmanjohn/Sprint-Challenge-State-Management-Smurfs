import React from 'react'


export const Smurf = (props)=>{

    return(
        <div className = 'smurf'>
        <h3>Name: {props.smurf.name}</h3>
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
    <p>Village Identification Number: {props.smurf.id}</p>
        </div>
    )
}