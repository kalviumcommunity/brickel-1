import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Learn from './Learn';
import About from './About';
import Teach from './Teach';
import './App.css';
import NavBar from './component/NavBar';
import User from './User';
import Login from './Login';
import Footer from './component/Footer';

function App() {
  return (

    <>
    <NavBar/>
    <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/learn' element={<Learn/>} />
    <Route path='/teach' element={<Teach/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/user' element={<User/>} />
    <Route path='/login' element={<Login/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
