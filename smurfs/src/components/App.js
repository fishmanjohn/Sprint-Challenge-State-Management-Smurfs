import React, {useState,useEffect} from "react";
import axios from 'axios'
import {smurfContext} from '../contexts/contexts'
import "./App.css";
//components
import {Form} from './Form'
import{SmurfList} from './SmurfList'

function App() {
  const [smurf,setSmurf] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
      console.log(res)
      setSmurf(res.data)
})
  .catch(err=>{
    console.log(err)
  })
  },[])

  console.log(smurf)
  return (
    <smurfContext.Provider value ={smurf}>
    <div className="App">
      <h1>Add yourself as a smurf in the village!</h1>
      <h2>Just fill out this form to become a smurf.</h2>
      <Form/>
      <SmurfList/>
    </div>
    </smurfContext.Provider>
  );
}

export default App;