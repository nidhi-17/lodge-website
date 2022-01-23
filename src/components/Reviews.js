import React from 'react';
import { Typography } from '@material-ui/core';
import '../styles/reviews.css'
const Reviews = () => {
    return (
        <div className='reviews'>
            <div>
                <img src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551__480.jpg" alt="dp" height={130} width={150}  />
                <br />
                <Typography gutterBottom variant="h4" align="center"  component="div">"Wonderful Experience"</Typography>
                <Typography gutterBottom variant="body" component="div">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate! Lorem ipsum dolor sit amet.</Typography>
                <br />
                <Typography gutterBottom variant="body" align="center" component="div" style={{color:'brown'}}>Stefan Marty</Typography>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726__480.jpg" alt="dp" height={130} width={150}  />
                <br />
                <Typography gutterBottom variant="h4" align="center" component="div">"Perfect Stay"</Typography>
                <Typography gutterBottom variant="body" component="div">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate! Lorem ipsum dolor sit amet.</Typography>
                <br />
                <Typography gutterBottom variant="body" align="center" component="div" style={{color:'brown'}}>Elena Williams</Typography>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761__480.jpg" alt="dp" height={130} width={150}  />
                <br />
                <Typography gutterBottom variant="h4" align="center" component="div">"Best Fit"</Typography>
                <Typography gutterBottom variant="body" component="div">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate! Lorem ipsum dolor sit amet.</Typography>
                <br />
                <Typography gutterBottom variant="body" align="center" component="div" style={{color:'brown'}}>Emma Jones</Typography>
            </div>
        </div>
    );
};

export default Reviews;
