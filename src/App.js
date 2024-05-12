import { useState } from "react";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
/* import Colorpickergfg from "./component/Colorpickergfg"; */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [mode, setMode]=useState('light');

  const toglemode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#0a3d62';
    }
    else{
        setMode('light');
        document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Router>
      <Navbar title={"TextUtils"} about={"About-Us"} mode={mode} toglemode={toglemode}/>
      {/*   */}
      
      <div className="container my-3">
        <Routes>
        <Route path="/about" element={<About/>}>

        </Route>
           <Route path="/" element={<Textform heading="Enter-text-here!" button="Convert Upper Case" mode={mode} lowercase="Convert to Lower Case" clear="Clear" copy="Copy Text" />}>
           </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}
export default App;
