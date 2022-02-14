import React from 'react'
import { lodgedata } from './lodgeData';
import '../../styles/rooms.css';

const Lodge = () => {
    return (
        <div>
            {lodgedata.map((data) => (
                <div className="data-room" key={data.id}>
                    <div><img src={data.image} height={400} width={700} /></div>
                    <div className='room-price'>${data.price}</div>
                    <div className='room-details'>
                        <h3 className='room-name'>{data.name}</h3>
                        <div className='room-dim'>{data.dimensions} msqs / {data.no_of_people} person</div>
                        <div className='room-desc'>{data.description}</div>
                    </div>
                    <br />
                </div>
            ))}
        </div>
    )
}

export default Lodge