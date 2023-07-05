import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'
import Character from './components/Character';
import Film from './components/Film';
import Planets from './components/Planets';
import Redirect from './components/Redirect';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='character/:id' element={<Character />} />
        <Route path='films/:id' element={<Film />} />
        <Route path='planets/:id' element={<Planets />} />
        <Route path='404' element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
