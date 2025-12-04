import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <div className="App">
     <Navbar title="TextUtils" menu="Home"/>
     <div className="container my-3">
      <TextForm headding="Enter the text here"/>
     </div>
     
    </div>
  );
}

export default App;
