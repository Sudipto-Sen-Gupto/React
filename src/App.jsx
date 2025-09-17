import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './count'
import Cricket from './cricket'
import Ball from './Ball'
import Api from './api'
import { Suspense } from 'react'
import Biodata from './UIShowed'
// const detail=fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json());
const data=async()=>{
  const url=await fetch("https://jsonplaceholder.typicode.com/posts");
  const res= url.json();
  return res 
}

const data2=async()=>{
  const url=await fetch("https://jsonplaceholder.typicode.com/users");
  const res=await url.json();
  return res;

}
function App() {
  const detail=data();
  const player=data2();
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

      <Suspense fallback={<span class="loading loading-bars loading-xl"></span>}>
            <Api detail={detail}></Api>
      </Suspense>
      <Suspense fallback={<h1>loading..,</h1>}>
              <Biodata players={player}></Biodata>
      </Suspense>
      
    </>

  )
}

export default App
