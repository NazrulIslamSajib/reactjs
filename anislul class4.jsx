import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
var sajib=5+6;
const dat="6/23/2024";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      <div>
        <h1>
          hello parba tui are a good boy .  
        </h1>  
        <h1>{sajib}</h1>
        <h1>eta string unijai likchi : {dat}</h1> 
        <h1>tarik eta likhchi html er vitore javaScript:{new Date().getDate()}</h1>
        <h1>eta new Date method unijai likhci : {new Date().getDate()} / {new Date().getMonth()}/ {new Date().getFullYear()}</h1>
        <h2> Rifat is a fuck boy. </h2>
        <img src="avatar1499450488 (7).jpg" alt="" />
      </div>
  </React.StrictMode>,
)
