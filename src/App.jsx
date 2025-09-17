import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './count'
import Cricket from './cricket'
import Ball from './Ball'
function App() {
  
const button1Click=()=>{
    alert("Button 1 is clicked")
   }

   const button2Click=()=>{
     const input=document.getElementById("input");
     const divi=document.getElementById("divi");
     
     const newChild=document.createElement("h2");
     newChild.innerText=input.value;
     divi.append(newChild)
     input.value=""
   }

   const sum=(a,b)=>{
    alert(`a+b=${a+b}`)
   }
  return (
   
   <> 
      <h1>React</h1>
      <button onClick={button1Click}>Click1</button>
      <input type="text" id='input' />
      <button onClick={button2Click}>Click2</button>
      <div id='divi'></div>
      <button onClick={()=>sum(24,28)}> Click 3</button>
      <Count></Count>

      <Cricket></Cricket>
      <Ball></Ball>
    </>

  )
}

export default App
