import React from 'react'
import MenuIcon from '@material-ui/icons';
import Button from '@material-ui/core';

const Menu = () => {
    const toggleSidebar = () => {
        document.getElementById("menu").style.visibility = 'visible';
    }
    const closeSidebar = () => {
        document.getElementById("menu").style.visibility = 'hidden';
    }
    return (
        <>
            <Button onClick={() => toggleSidebar()}>
                <MenuIcon sx={{ color: 'white' }} />
            </Button>
            <div id="menu">
                <div className="list">
                    <div className='item'><Button onClick={() => closeSidebar()} style={{ float: 'right' }}><CancelOutlinedIcon /></Button></div>
                </div>
            </div>
        </>

    )
}

export default Menu;