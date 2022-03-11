import React from 'react';
import Main from './components/Home/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';
import About from './components/About/About';
import Room from './components/Rooms/Room';
import Contact from './components/Contact/Contact';
import ScrollToTop from './ScrollTop';
import Roomdetails from './components/Rooms/Roomdetails';


const App = () => {
  
  return (
    <div>
      <div>
        <BrowserRouter >
          <Navbar />
          <ScrollToTop>
            <Routes>
              <Route path='/lodge-websitw' element={<Main />} exact />
              <Route path='/' element={<Main />} exact />
              <Route path='/about' element={<About />} exact />
              <Route path='/rooms' element={<Room />} exact />
              <Route path='/contact' element={<Contact />} exact />
              <Route path='/room-details/:roomid' element={<Roomdetails />} exact />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};


export default App;
