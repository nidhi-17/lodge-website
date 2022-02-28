import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Confirm from './Confirm';
import Col from 'react-bootstrap/Col';
import '../../styles/rooms.css';
const Roomdetails = () => {
    return (
        <div>
            <img src={require("./images/rooms.jpg")} width="1600px" />
            <Container>
            <Row>
            <Col >
            <div className="first">
                <div className='room-name-single'>Artistic Loft</div>
                <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio lorem, iaculis non felis vel, faucibus efficitur dui. Aliquam erat volutpat. Quisque hendrerit massa nec lobortis mollis. Nunc eu eros efficitur, convallis enim ac, ultricies nisi. Lorem ipsum dolor sit amet, consectetur adipiscing.</a><br /><br />
                <a>Donec sollicitudin nulla risus, eget luctus ipsum facilisis dictum. Integer ultricies sapien libero, sed congue ligula hendrerit quis. Vivamus dolor mauris, mollis nec accumsan sed, pulvinar id nisl. Aliquam vulputate ante purus, quis sollicitudin augue euismod sit amet. Aliquam vehicula mi sit amet suscipit tincidunt. Quisque sed lobortis metus, vitae efficitur felis.</a><br /><br />
                <div className="line"></div><br />
                <c>Amenities</c><br /><br />
                <div className="left">
                    <div><img src={require("./images/air-conditioner.png")} width="20" /><br/><h6>Air conditioner</h6></div>
                    <div><img src={require("./images/cleaning.png")} width="20" /><br/><h6>Cleaning</h6></div>
                    <div><img src={require("./images/hairdryer.png")} width="20" /><br/><h6>Hairdryer</h6></div>
                    <div><img src={require("./images/cutlery.png")} width="20" /><br/><h6>Kitchen</h6></div>
                    <div><img src={require("./images/single-bed.png")} width="20" /><br/><h6>Single bed</h6></div>
                   <div><img src={require("./images/bathtub.png")} width="20" /><br/><h6>Bathtub</h6></div> 
                   <div><img src={require("./images/bed.png")} width="20" /><br/><h6>King size bed</h6></div> 
                   <div><img src={require("./images/parking.png")} width="20" /><br/><h6>Parking (on request)</h6></div> 
                   <div><img src={require("./images/strongbox.png")} width="20" /><br/><h6>Room safe</h6></div> 
                   <div><img src={require("./images/coffee-cup.png")} width="20" /><br/><h6>Tea/Coffee</h6></div> 
                </div> <br />
                <div className="line-2"></div> <br />
                <div className='house-rules'>
                    <c>House Rules</c>
                    <div>-No smoking, parties or events.</div>
                    <div>-Check-in time from 2 PM, check-out by 10 AM.</div><br />
                </div>
                <div className="line-3"></div> <br />
                <div className='cancel'>
                <c>Cancellation</c>
                <div>- Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor.</div>
                <div>- Cancel up to 14 days to get a full refund.</div>
                </div>
            </div>
            </Col>
            <Col>
                <Confirm/>
            </Col>
            </Row>
            </Container>
        </div>
    );
}

export default Roomdetails