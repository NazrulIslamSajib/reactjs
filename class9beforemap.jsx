import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Data from './data.json'
function App() {
  
  let items=[];
  for(let i=0;i<Data.length;i++)
  {
      items.push(Data[i].tittle);
  }
    return  <div> 
    <h1>{items}</h1>
    
  </div>
    
  
    
       
     
  
}

export default App
/* 
///  data.json eta file
  [

   {
      "tittle":"sajib I love you",
      "desc":"This is desc1"
   },
   {
    "tittle":"call father 1",
    "desc":"This is desc2"
   }, 
   {
    "tittle":"call mother 2",
    "desc":"This is desc3"
   }
   
    
]
  
   
  */  


/*
///main.jsx
  import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  
import Card from'./Card.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
     <App/> 
     
  </React.StrictMode>,
)
*/
  
