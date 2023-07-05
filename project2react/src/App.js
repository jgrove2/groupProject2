import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'
import Character from './components/Character';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='character/:id' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
