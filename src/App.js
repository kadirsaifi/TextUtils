import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
// import TextForm from './component/TextForm';

function App() {
  return (
    <div className="App">
     <Navbar title="TextUtils" menu="Home"/>
     <div className="container my-3">
      {/* <TextForm headding="Enter the text here"/> */}
      <About/>
     </div>
     
    </div>
  );
}

export default App;
