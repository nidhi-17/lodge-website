import * as React from 'react';
import { Box } from '@material-ui/core';
import { data } from '../../data';
import Roomdet from './Roomdet';
import {useState} from 'react';
import Form from './Form';
import '../../styles/cards.css';
export default function Rooms() {
    const [RoomDetails, setroomDetails] = useState(data);
    const filterguest = (button) => {
        const filtered = data.filter(item => item.guests === button);
        setroomDetails(filtered);
    }
    const filterroom = (button) => {
        const filtered = data.filter(item => item.rooms === button)
        setroomDetails(filtered);
    }
    return (
        <Box sx={{ width: '90' }}>
            <div>
                <Form filterguest={filterguest} filterroom={filterroom}/>
            </div>
            <div className='romm-det'>
                <Roomdet RoomDetails={RoomDetails}/>
            </div>
        </Box>
    );
}


