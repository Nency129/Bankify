import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Splash from './component/Splash';
import Home from './pages/Home';

function App() {
  return (
    <div className="text-3xl">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Splash/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
