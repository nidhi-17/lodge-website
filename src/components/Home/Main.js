import React from 'react';
import View from './View';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rooms from './Rooms';
import Reviews from './Reviews';
import Form from './Form';
import Amenities from './Amenities';
import 'font-awesome/css/font-awesome.min.css';
const Main = () => {
  return (
    <div>
      <div>
        <View />
      </div>
      <Rooms/> 
     <br /> <br />
      <div>
      <Amenities/>   
      </div>
      <div>
        <Reviews/>
      </div>
    </div>
  );
};


export default Main;
