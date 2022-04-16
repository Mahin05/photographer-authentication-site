import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Header from './Pages/Header/Header';
import Services from './Pages/Home/Services/Services';
import Service from './Pages/Home/Service/Service';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe></AboutMe>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App;
