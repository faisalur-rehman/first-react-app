import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import IntroPara from './IntroPara';

function App({name, age}) {

  return <div> 
         <h1>Hello from <strong>{name}</strong></h1> Age={age - 5}
         <br/>
         <Hello firstName={name}></Hello>
         <br/>
         <IntroPara></IntroPara>
         </div>
}

export default App;
