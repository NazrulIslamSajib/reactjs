import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*
const heading ={ 
  background:"blue",
  color:"white",
  fontSize:"50px",
  margin:"10px",
  padding:"40px" 

} 
  */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      <div>   
          <h1 className="headingStyle">HI</h1>  
          <h1 className="headingStyle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas vel magni impedit possimus atque. Quasi dolor dolore natus sequi?</h1>
      </div>
  </React.StrictMode>,
)
