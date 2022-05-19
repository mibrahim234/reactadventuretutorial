import './App.css';
import Navbar from './components/Navbar' 
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact />
      </Routes>
    </Router>
    </>

  );
}

export default App;
