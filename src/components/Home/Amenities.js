import React from 'react';
import '../../styles/amenities.css'

const Amenities = () => {
    return (
        <div>
            <div className="containerAmenities">
                Malmö's B'n'B Amenities
            </div>
            <div className="middle">
                <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</a> <e>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</e>
                <c>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</c>
            </div>
            <div className="container1">
                <div className='container2'>
                    <button ><img src={require('../../images/wifi-router.png')} width="80" height='80' /></button>
                    <div className="title1">Wifi</div>
                </div>
                <div className='container2'>
                    <button ><img src={require('../../images/consult.png')} width="80" height='80' /></button>
                    <div  className="title2">Service</div>
                </div>
                <div className='container2'>
                    <button ><img src={require('../../images/clock.png')} width="80" height='80' /></button>
                    <div  className="title3">Clock</div>
                </div>
                <div className='container2'>
                    <button ><img src={require('../../images/safe-deposit.png')} width="80" height='80' /></button>
                    <div className='title4'>Safe</div>
                </div>
                <div className='container2'>
                    <button ><img src={require('../../images/coffee-cup.png')} width="80" height='80' /></button>
                    <div className="title5" >Coffee</div>
                </div>
                <div className='container2'>
                    <button ><img src={require('../../images/bathtub.png')} width="80" height='80' /></button>
                    <div  className="title6">Bath</div>
                </div>
            </div>
        </div>
    )
}
export default Amenities;
