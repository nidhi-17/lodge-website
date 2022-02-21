import React from 'react';
import '../../styles/rooms.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lodge from './Lodge';
import 'bootstrap/dist/css/bootstrap.min.css';
const Room = () => {
  return (
    <div>
      <div className='heading-rooms'>
        <h2>Rooms</h2>
      </div>
      <Container fluid="xs">
        <Row style={{ height: "600px", overflowX: "hidden", overflowY: "hidden" }}>
          <Col xs={4} >

            <div className="room-wrapper">

              <div className="room-grid-container">
                <div className='availability'>
                  Check Availability
                </div>
                <div className="room-grid-1">
                  <label>CHECK-IN</label>
                  <form amethod="post">
                    <input type="date" name="" value="" />
                  </form>
                </div>
                <div className="room-grid-2">
                  <label>CHECK-OUT</label>
                  <form method="post">
                    <input type="date" name="" value="" />
                  </form>
                </div>
                <div className="room-grid-3">
                  <form action="/action_page.php">
                    <label for="cars">ROOMS</label>
                    <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>

                    <select name="cars" id="cars">
                      <option value="volvo">1 Room</option>
                      <option value="saab">2 Rooms</option>
                      <option value="opel">3 Rooms</option>
                      <option value="audi">4 Rooms</option>
                    </select>
                  </form></div>
                <div className="room-grid-4">
                  <form action="/action_page.php">
                    <label for="cars">GUESTS:</label>
                    <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                    <select name="cars" id="cars">
                      <option value="volvo">1 Adults</option>
                      <option value="saab">2 Adults</option>
                      <option value="opel">3 Adults</option>
                      <option value="audi">4 Adults</option>
                    </select>
                  </form>
                </div>
                <div className="room-grid-5">
                  <button>Check Availability</button>
                </div>
              </div>
            </div>
          </Col>
          <Col  >
            <div className='Lodge-rooms'>
              <Lodge />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Room;