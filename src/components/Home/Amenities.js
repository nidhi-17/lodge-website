import React from 'react';
import '../../styles/amenities.css'

const Amenities = () => {
    return (
        <div>
            <div className="container">
                <h2>Malmö's B'n'B Amenities</h2>
            </div>
            <div className="middle">
                <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</a> <e>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</e>
                <c>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</c>
            </div>
            <div className="container1">
                <button ><img src={require('../../images/wifi-router.png')} width="80" height='80' /></button>
                <button ><img src={require('../../images/consult.png')} width="80" height='80' /></button>
                <button ><img src={require('../../images/clock.png')} width="80" height='80' /></button>
                <button ><img src={require('../../images/safe-deposit.png')} width="80" height='80' /></button>
                <button ><img src={require('../../images/coffee-cup.png')} width="80" height='80' /></button>
                <button ><img src={require('../../images/bathtub.png')} width="80" height='80' /></button>
                <div className='maintitle'>
                <div className="title">Wifi</div>
                <div className="title1">Service</div>
                <div className="title2">Alarm</div>
                <div className="title3">Safe</div>
                <div className="title4">Coffee</div>
                <div className="title5">Bath</div>
                <div className="qodef-grid-inner"></div>
                </div>
            </div>
            
            
            <div className="effect"></div>
        </div>
    )
    }
export default Amenities;
