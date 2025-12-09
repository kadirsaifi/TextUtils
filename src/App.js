import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("dark");
  const removeBodyClass =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')

  }

const toggleMode = (cls) => {
  removeBodyClass();
  document.body.classList.add('bg-'+cls )
  // if (mode === "light") {
  //   setMode("dark");
  //   document.body.style.backgroundColor = "#1B263B";  // or any dark color
  //   document.body.style.color="white"
  // } else {
  //   setMode("light");
  //   document.body.style.backgroundColor = "white";  // or any light color
  //   document.body.style.color="black"
  // }
};
  return (
    <div className="App">
     <Router>
      <Navbar title="TextUtils" menu="Home" mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route path='/' element={<TextForm headding="Enter the text here" mode={mode}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
