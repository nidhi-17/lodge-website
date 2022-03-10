import React from 'react';
import '../../styles/rooms.css';
import Lodge from './Lodge';
import Filter from './Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { lodgedata } from './lodgeData';
const Room = () => {
  const [lodgeRoomdata, setlodgeRoomdata] = useState(lodgedata);
  const filterGuest = (button) => {
    const filteredGuest = lodgedata.filter(room => Number(room.guests) <= Number(button));
    setlodgeRoomdata(filteredGuest);
  }
  const filterRoom = (button) => {
    const filteredRoom = lodgedata.filter(room => room.rooms === button)
    setlodgeRoomdata(filteredRoom);
  }

  return (
    <div >
      <div className='heading-rooms'>
        <h2>Rooms</h2>
      </div>
      <div className='room-container'>
        <div className='room-container-filter'>
          <Filter filterGuest={filterGuest} filterRoom={filterRoom} />
        </div>
        <div className='room-container-rooms'>
          <Lodge lodgeRoomdata={lodgeRoomdata} />
        </div>
      </div>
    </div>
  );
}
export default Room;