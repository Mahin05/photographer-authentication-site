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
import Blogs from './Pages/Home/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer'
import Album from './Pages/Home/Album/Album';

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
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/album' element={<Album></Album>} />
        <Route path='/service/:serviceId' element={
          <RequiredAuth>
            <ServiceDetail></ServiceDetail>
          </RequiredAuth>
        } />
        <Route path='/checkout' element={<CheckOut></CheckOut>} />
        <Route path='*' element={<PageNotFound></PageNotFound>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
