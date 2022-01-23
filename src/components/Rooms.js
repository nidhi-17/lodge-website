import * as React from 'react';
import { Box } from '@material-ui/core';
import Roomdet from './Roomdet';

export default function Rooms() {
    return (
        <Box sx={{ width: '90' }}>
            <div style={{marginLeft:'1%'}}>
                <Roomdet />
            </div>
        </Box>

    );
}


