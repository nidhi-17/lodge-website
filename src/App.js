import React from 'react';
import Navbar from './components/Navbar';
import View from './components/View';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rooms from './components/Rooms';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Form from './components/Form';
import Amenities from './components/Amenities';
import 'font-awesome/css/font-awesome.min.css';
const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <View />
      </div>
      <div >
        <Form />
      </div>
      <Rooms/> 
      <div>
      <Amenities/>   
      </div>
      <div>
        <Reviews/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};


export default App;
