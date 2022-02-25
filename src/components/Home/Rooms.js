import * as React from 'react';
import { Box } from '@material-ui/core';
import { data } from '../../data';
import Roomdet from './Roomdet';
import '../../styles/cards.css';
export default function Rooms() {
    return (
        <Box sx={{ width: '90' }}>
            <div className='romm-det'>
                <Roomdet />
            </div>
        </Box>
    );
}


