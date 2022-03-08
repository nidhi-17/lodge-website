import React from 'react';
import Confirm from './Confirm';
import '../../styles/rooms.css';
import { useParams } from 'react-router-dom';
import { lodgedata } from './lodgeData'
const Roomdetails = () => {
    var roomid = useParams();
    const filteredRoomsdata = lodgedata.filter(rooms => rooms.id === Number(roomid.roomid));
    return (
        <div>
            <img className='con-img' src={filteredRoomsdata[0].image} width="100%" height='550px' />
            <div className='confirmation'>
                <div className="first">
                    <div className='room-name-single'>{filteredRoomsdata[0].name}</div>
                    <div className='room-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio lorem, iaculis non felis vel, faucibus efficitur dui. Aliquam erat volutpat. Quisque hendrerit massa nec lobortis mollis. Nunc eu eros efficitur, convallis enim ac, ultricies nisi. Lorem ipsum dolor sit amet, consectetur adipiscing.</div><br /><br />
                    <div className='room-txt'>Donec sollicitudin nulla risus, eget luctus ipsum facilisis dictum. Integer ultricies sapien libero, sed congue ligula hendrerit quis. Vivamus dolor mauris, mollis nec accumsan sed, pulvinar id nisl. Aliquam vulputate ante purus, quis sollicitudin augue euismod sit amet. Aliquam vehicula mi sit amet suscipit tincidunt. Quisque sed lobortis metus, vitae efficitur felis.</div><br /><br />
                    <div className="line"></div><br />
                    <h4>Amenities</h4>
                    <div className="left">
                        <div><img src={require("./images/air-conditioner.png")} width="20" /><br /><h6>Air conditioner</h6></div>
                        <div><img src={require("./images/cleaning.png")} width="20" /><br /><h6>Cleaning</h6></div>
                        <div><img src={require("./images/hairdryer.png")} width="20" /><br /><h6>Hairdryer</h6></div>
                        <div><img src={require("./images/cutlery.png")} width="20" /><br /><h6>Kitchen</h6></div>
                        <div><img src={require("./images/single-bed.png")} width="20" /><br /><h6>Single bed</h6></div>
                        <div><img src={require("./images/bathtub.png")} width="20" /><br /><h6>Bathtub</h6></div>
                        <div><img src={require("./images/bed.png")} width="20" /><br /><h6>King size bed</h6></div>
                        <div><img src={require("./images/parking.png")} width="20" /><br /><h6>Parking (on request)</h6></div>
                        <div><img src={require("./images/strongbox.png")} width="20" /><br /><h6>Room safe</h6></div>
                        <div><img src={require("./images/coffee-cup.png")} width="20" /><br /><h6>Tea/Coffee</h6></div>
                    </div> <br />
                    <div className="line-2"></div> <br />
                    <div className='house-rules'>
                        <h4>House Rules</h4>
                        <div>-No smoking, parties or events.</div>
                        <div>-Check-in time from 2 PM, check-out by 10 AM.</div><br />
                    </div>
                    <div className="line-3"></div> <br />
                    <div className='cancel'>
                        <h4>Cancellation</h4>
                        <div>- Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu dolor.</div>
                        <div>- Cancel up to 14 days to get a full refund.</div>
                    </div>
                </div>
                <div class="confirm-book">
                    <Confirm />
                </div>
            </div>
        </div>
    );
}

export default Roomdetails