import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/rooms.css';
const Lodge = ({ Roomdetails }) => {
    return (
        <div style={{marginLeft:'150px'}}>
            {Roomdetails.map((data) => (
                <div className="data-room" key={data.id}>
                    <div><img src={data.image} height={300} width={500} /></div>
                    <div className='room-price'>Rs. {data.price}</div>
                    <div className='room-details'>
                        <h3 className='room-name'>{data.name}</h3>
                        <div className='room-dim'>{data.dimensions} msqs / {data.no_of_people} person</div>
                        <div className='room-desc'>{data.description}</div>
                        <button className='link-room'>
                            <Link to="/room-details">
                                <a href='#'>Book Now</a>
                            </Link>
                        </button>
                    </div>

                    <br />
                </div>
            ))}
        </div>
    )
}

export default Lodge