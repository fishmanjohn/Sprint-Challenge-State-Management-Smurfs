import React,{useState} from 'react';
import axios from 'axios';

export const DeleteForm =()=>{
    const [form, setForm] = useState({
        deleteId: Number
    })
    return (
        <form onSubmit ={()=>{
            axios
            .delete(`http://localhost:3333/smurfs/${form.deleteId}`)
            .then((res)=>{
                console.log(res)
            })
            .catch(function(error) {
            console.log(error);
            });
        }} >
            <input
            name='deleteId'
            placeholder='Input the id of the smurf you want to remove from the village.'
            value = {form.id}
            onChange={(e)=>{
                setForm({
                    ...form,
            [e.target.name]:e.target.value
        })
            }}

            />
            <button type='submit'>Cull Smurf.</button>
        </form>
    )
}
