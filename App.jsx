import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './header'
import Footer from './footer';
import Home from './home';
import Login from './login';
import Register from './register';
import Map from './map';
import Dashboard from './dashboard';
import Profile from './profile';
import Bookings from './bookings';
function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/map' element={<Map />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/bookings' element={<Bookings />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
