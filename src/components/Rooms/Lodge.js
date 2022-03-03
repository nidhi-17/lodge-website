import React from 'react'
import '../../styles/rooms.css';
import {useNavigate} from 'react-router-dom';

const Lodge = ({lodgeRoomdata}) => {
    let navigate = useNavigate();
    return (
        <div style={{marginLeft:'150px'}}>
            {lodgeRoomdata.map((data) => (
                <div className="data-room" key={data.id}>
                    <div><img src={data.image} height={300} width={500} /></div>
                    <div className='room-price'>Rs. {data.price}</div>
                    <div className='room-details'>
                        <h3 className='room-name'>{data.name}</h3>
                        <div className='room-dim'>{data.dimensions} msqs / {data.no_of_people} person</div>
                        <div className='room-desc'>{data.description}</div>
                        <button className='link-room' onClick={()=>navigate(`/room-details/${data.id}`)} >             
                                <a href='#'>
                                    Book Now
                                </a>
                      </button>
                    </div>

                    <br />
                </div>
            ))}
        </div>
    )
}

export default Lodge