//import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [look,setlook]=useState("light");
  const [alert,setAlert] =useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },900);
  }
  
  const toggleMode = ()=>{
    if(look==="light")
    {
      setlook("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setlook("light");
      document.body.style.backgroundColor="white";
      showAlert("Dark Mode Disabled","success");
    }
  }
  
  return (
    
    <Router>
    <Navbar title="TextUtiles" mode={look} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
     <div className='container my-3'>
       <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Textform heading="Enter Text Here" mode={look}></Textform>
          </Route>
        </Switch>
     </div>
     </Router>
  
  );
}

export default App;
