
import React,{ useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";



//let name="<b>Harry3</b>";

function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const [alert, setAlert] = useState(null); 

    const showAlert=(message,type) =>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(() =>{
         setAlert(null);
      },3000);

      }
    

    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        //setAlert("Dark mode has been enabled","success");

        showAlert("Dark mode has been enabled","success");
        document.title="TextUtils-Dark Mode";

        setInterval(() => {
           document.title='TextUtils is Amazing';
        }, 2000);

        setInterval(() => {
          document.title='Install TextUtils Now';
       }, 1500);

      }

      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
        document.title='TextUtils-Light Mode';
      }
    }

  return (
    <>
     { /* <Navbar title="Textutils4" aboutText="About Textutils" /> */ }

    { /* <Navbar/> */}
    
  
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    {/*<Alert alert={alert}/> */}
    <Alert alert="This is alert"/>
    <div className="container my-3 ">

 
  
         <
             TextForm showAlert={showAlert}  heading="Enter the text to analyze below" mode={mode}/> 
        
 
        </div>

       



     
     {/* <About/> */}
    
    
  </>
  );

}

export default App;
