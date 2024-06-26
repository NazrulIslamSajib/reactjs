import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  
import Card from'./Card.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      <div>   
          <div className="card">
           
           <h1>hello sajib</h1>

          </div>   
          <br />
          <Card/> 
          <Card/>
      </div>
  </React.StrictMode>,
)
/* 
Card.jsx  
/*

function Card()
{
  return <div className="card">
           
          <h1>hello sajib</h1>

        </div>
} 
export default Card;

*/

  */
