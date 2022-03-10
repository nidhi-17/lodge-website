import React from 'react'
import '../../styles/rooms.css';
import { useState } from 'react';
import { Box, FormControl } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import { FormGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
const Confirm = () => {
    const [clean, setClean] = useState(false);
    const [bike, setBike] = useState(false);
    const [parking, setParking] = useState(false);

    const [checkin, setcheckin] = useState('');
    const [checkout, setcheckout] = useState('');
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleBooking = () => {
    setOpen(true);
    setcheckin('');
    setcheckout('');
    setBike(false);
    setClean(false);
    setParking(false);
    document.getElementById("Guests").selectedIndex = 0;
    }
    const handleClose = () => setOpen(false);
    const numgusets = () => {
        var stuser = document.getElementById("Guests").selectedOptions[0].value;
        return stuser;
    }
    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Your Booking is confirmed!!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
            <div className="filter-wrapper">
                <div className="filter-grid-container">
                    <div className='res'>Your Reservation</div><br />
                    <div className="filter-grid-1">
                        <form action="post">
                            <label for="sdate">CHECK-IN</label> <br />
                            <input type="date" id="sdate" name="s-date" value={checkin} onChange={(e) => setcheckin(e.target.value)} />
                        </form>
                    </div>
                    <br />
                    <div className="filter-grid-2">

                        <form action="post">
                            <label for="edate">CHECK-OUT</label> <br />
                            <input type="date" id="edate" name="e-date" value={checkout} onChange={(e) => setcheckout(e.target.value)} />
                        </form>
                    </div>
                    <br />
                    <div className="filter-grid-4">
                        <form action="/action_page.php">
                            <label for="cars">GUESTS:</label><br />
                            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>

                            <select name="cars" id="Guests" onChange={() => numgusets()}>
                                <option value={1}>1 Adult</option>
                                <option value={2}>2 Adults</option>
                                <option value={3}>3 Adults</option>
                                <option value={4}>4 Adults</option>
                                <option value={5}>5 Adults</option>
                                <option value={6}>6 Adults</option>
                            </select>
                        </form>
                    </div>

                    <div className="extra">
                        <div>Extra Services</div><br />
                        <FormControl>
                        <FormGroup>
                        <FormControlLabel 
                        control={
                        <Checkbox checked={clean}  
                        onChange={(e)=> setClean(e.target.checked)}  
                        inputProps={{ 'aria-label': 'controlled' }}
                        classes={{root: 'custom-checkbox-root'}}
                        />
                        }
                        label="Cleaning Fee ........... Rs. 110" 
                        />  
                        <FormControlLabel 
                        control={
                        <Checkbox checked={bike}  
                        onChange={(e)=> setBike(e.target.checked)}  
                        inputProps={{ 'aria-label': 'controlled' }}/>
                        }
                        label="Bike Rental.............. Rs. 200
                        " 
                        />  
                        <FormControlLabel 
                        control={
                        <Checkbox checked={parking}  
                        onChange={(e)=> setParking(e.target.checked)}  
                        inputProps={{ 'aria-label': 'controlled' }}/>
                        }
                        label="Parking.................... free" 
                        />   
                        </FormGroup>
                        </FormControl>
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