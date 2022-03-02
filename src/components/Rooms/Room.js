import React from 'react';
import '../../styles/rooms.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lodge from './Lodge';
import Filter from './Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { lodgedata } from './lodgeData';
const Room = () => {
  console.log(lodgedata)
  const [lodgeRoomdata, setlodgeRoomdata] = useState(lodgedata);
  console.log(lodgeRoomdata)
  const filterGuest = (button) => {
    const filteredGuest = lodgedata.filter(room => Number(room.guests) <= Number(button));
    setlodgeRoomdata(filteredGuest);
    console.log(lodgeRoomdata);
  }
  const filterRoom = (button) => {
    const filteredRoom = lodgedata.filter(room => room.rooms === button)
    setlodgeRoomdata(filteredRoom);
    console.log(lodgeRoomdata);
  }
 
  return (
    <div >
      <div className='heading-rooms'>
        <h2>Rooms</h2>
      </div>
      <Container fluid="xs">
        <Row style={{ height: "600px", overflowX: "hidden", overflowY: "hidden" }}>
          <Col xs={4} >
            <Filter filterGuest={filterGuest} filterRoom={filterRoom}/>
          </Col>
          <Col  >
            <div className='Lodge-rooms'>
              <Lodge lodgeRoomdata={lodgeRoomdata}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Room;