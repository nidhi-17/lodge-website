import React from 'react'
import '../../styles/rooms.css';
import { useNavigate } from 'react-router-dom';

const Lodge = ({ lodgeRoomdata }) => {
    let navigate = useNavigate();
    function rightScroll() {
        var container = document.getElementById('slide-rooms');
        sideScroll(container, 'right', 25, 100, 18);
    };
    function leftScroll() {
        var container = document.getElementById('slide-rooms');
        sideScroll(container, 'left', 25, 100, 18);
    };

    function sideScroll(element, direction, speed, distance, step) {
        var scrollAmount = 0;
        var slideTimer = setInterval(function () {
            if (direction === 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
    return (
        <>
            <div className='lodge-data-room' id='slide-rooms'>
                {lodgeRoomdata.map((data) => (
                    <div className="data-room" key={data.id}>
                        <img src={data.image} height={300} width={500} />
                        <div className='room-price'>Rs. {data.price}</div>
                        <div className='room-details'>
                            <h3 className='room-name'>{data.name}</h3>
                            <div className='room-dim'>{data.dimensions} msqs / {data.no_of_people} person</div>
                            <div className='room-desc'>{data.description}</div>
                            <button className='link-room' onClick={() => navigate(`/room-details/${data.id}`)} >
                                <a href='#'>
                                    Book Now
                                </a>
                            </button>
                        </div>
                        <br />
                    </div>
                ))}
            </div>
            <div className='scroll-rooms'>
                <button type="button" id="r-left-slide" onClick={() => leftScroll()}><i className="fa fa-angle-left fa-2x" aria-hidden="true"></i></button>
                <button type="button" onClick={() => rightScroll()}><i className="fa fa-angle-right fa-2x" aria-hidden="true"></i></button>
            </div>
        </>
    )
}

export default Lodge