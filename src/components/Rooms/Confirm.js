import React from 'react'
import '../../styles/rooms.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const Confirm = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleBooking = () => {
      setShow(true);
    }
    return (
        <div>
            <Modal show={show} onHide={() => handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your Booking is confirmed !!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="filter-wrapper">
                <div className="filter-grid-container">
                <div className='res'>Your Reservation</div><br />
                    <div className="filter-grid-1"> 
                        <form action="post">
                        <label>CHECK-IN</label> <br />
                            <input type="date" name="" value="" />
                        </form>
                    </div>
                    <br />
                    <div className="filter-grid-2">
                        
                        <form action="post">
                        <label>CHECK-OUT</label> <br />
                            <input type="date" name="" value="" />
                        </form>
                    </div>
                    <br />
                    <div className="filter-grid-4">
                        <form action="/action_page.php">
                            <label for="cars">GUESTS:</label><br />
                            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>

                            <select name="cars" id="cars">
                                <option value="volvo">1 Adult</option>
                                <option value="saab">2 Adults</option>
                                <option value="opel">3 Adults</option>
                                <option value="audi">4 Adults</option>
                            </select>
                        </form>
                    </div>

                    <div className="extra">
                        <div>Extra Services</div><br />
                        <form action="/action_page.php">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Cleaning Fee..........................................    $11</label><br />
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Turin Trip...........................  $17 / per person</label><br />
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                            <label for="vehicle2">Parking..................................................  free</label><br />
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                            <label for="vehicle3">Bike Rental........................  $20 / per person</label><br /><br />
                        </form>
                    </div>

                    <div className="filter-grid-5">
                        <button onClick={() => handleBooking()}>Book Now</button>
                    </div>
                </div>
            </div>

            <div className="offer">
                <img src={require("./images/room-ads.jpg")} width={400} height={200} />
            </div>

        </div>
    )
}

export default Confirm