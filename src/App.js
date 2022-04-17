import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Header from './Pages/Header/Header';
import Services from './Pages/Home/Services/Services';
import Service from './Pages/Home/Service/Service';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail'
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut'
import PageNotFound from './Pages/PageNotFound/PageNotFound';

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
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>} />
        <Route path='/checkout' element={
          <RequiredAuth>
            <CheckOut></CheckOut>
          </RequiredAuth>
        } />
        <Route path='*' element={<PageNotFound></PageNotFound>}/>
      </Routes>
    </div>
  );
}

export default App;
