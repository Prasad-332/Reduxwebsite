
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { AddStudents } from './Components/AddStudents';
import { TopLearners } from './Components/TopLearners';
import { Feedback } from './Components/Feedback';
import { Navbar } from './Components/Navbar';
 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddStudents/>}/>
        <Route path="/toplearners" element={<TopLearners/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
      </Routes>
    </div>
  );
}

export default App;
