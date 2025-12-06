import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     <Router>
      <Navbar title="TextUtils" menu="Home"/>
      <Routes>
        <Route path='/' element={<TextForm headding="Enter the text here"/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
     </Router>
  
     
    </div>
  );
}

export default App;
