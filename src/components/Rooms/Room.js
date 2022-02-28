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
  const [Roomdetails, setRoomdetails] = useState(lodgedata);
  const filterGuest = (button) => {
    const filtered = lodgedata.filter(item => item.guests === button);
    setRoomdetails(filtered);
  }
  const filterRoom = (button) => {
    const filtered = lodgedata.filter(item => item.rooms === button)
    setRoomdetails(filtered);
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
              <Lodge Roomdetails={Roomdetails}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Room;