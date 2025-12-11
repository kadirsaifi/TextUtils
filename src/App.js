import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("light");

const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "#1B263B";  // or any dark color
    document.body.style.color="white"
  } else {
    setMode("light");
    document.body.style.backgroundColor = "white";  // or any light color
    document.body.style.color="black"
  }
};


  return (
    <div className="App">
     <Router>
      {/* test for */}
      <Navbar title="TextUtils" menu="Home" mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route path='/' element={<TextForm headding="Enter your text here !" mode={mode}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
