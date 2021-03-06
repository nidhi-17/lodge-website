import React from 'react';
import { Typography } from '@material-ui/core';
import '../../styles/reviews.css';
const Reviews = () => {
    return (
        <div className='reviews'>
            <div>
                <img src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551__480.jpg" alt="dp" height={80} width={80}  />
                <br /> <br />
                <Typography gutterBottom variant="h6" align="center"  component="div" style={{fontFamily:"Arial"}}>"Nice Position"</Typography>
                <Typography  variant="body2" component="div" style={{fontFamily:"sans-serif",fontWeight:"light",color:"grey",padding:"0% 5% 0% 5%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate! Lorem ipsum dolor sit amet.Doloremque, voluptate! Lorem ipsum dolor sit amet</Typography>
                <br />
                <Typography gutterBottom variant="body1" align="center" component="div" style={{color:'brown',marginBottom:"10%",marginRight:"5%"}}>Stefan Marty</Typography>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726__480.jpg" alt="dp" height={80} width={80}  />
                <br /> <br />
                <Typography gutterBottom variant="h6" align="center" component="div" style={{fontFamily:"Arial"}}>"Perfect Stay"</Typography>
                <Typography  variant="body2" component="div" style={{fontFamily:"sans-serif",fontWeight:"light",color:"grey",padding:"0% 5% 0% 5%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate! Lorem ipsum dolor sit amet.Doloremque, voluptate! Lorem ipsum dolor sit amet</Typography>
                <br />
                <Typography gutterBottom variant="body1" align="center" component="div" style={{color:'brown',marginBottom:"10%",marginRight:"5%"}}>Elena Williams</Typography>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761__480.jpg" alt="dp" height={80} width={80}  />
                <br /> <br />
                <Typography gutterBottom variant="h6" align="center" component="div" style={{fontFamily:"Arial"}}>"Best Fit"</Typography>
                <Typography  variant="body2" component="div" style={{fontFamily:"sans-serif",fontWeight:"light",color:"grey",padding:"0% 5% 0% 5%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate! Lorem ipsum dolor sit amet.Doloremque, voluptate! Lorem ipsum dolor sit amet</Typography>
                <br />
                <Typography gutterBottom variant="body1" align="center" component="div" style={{color:'brown',marginBottom:"10%",marginRight:"5%"}}>Emma Jones</Typography>
            </div>
        </div>
    );
};

export default Reviews;
