import * as React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import 'font-awesome/css/font-awesome.min.css';
import {useRef} from 'react';
import { data } from '../../data';
import '../../styles/cards.css';
export default function Roomdet() {
  const ref=useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div className='cards' >
      <div className='cards-wrapper'>
        {data.map((room) => (
          <Card sx={{ maxWidth: 505 }} key={room.id} className='card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                width="200"
                image={room.image}
                alt="Romm Photo"
              />
              <CardContent style={{ backgroundColor: 'floralwhite' }}>
                <Typography gutterBottom variant='h5' component="div" style={{ fontFamily: "Roboto" }}>
                  {room.name}
                  <Typography gutterBottom variant="body" component="div" style={{ float: 'right', color: 'brown', fontFamily: "Helvetica" }}>${room.price}</Typography>
                </Typography>

                <Typography gutterBottom variant="body2" component="div" style={{ color: 'brown', fontFamily: "Helvetica"}}>
                  {room.dimensions} msqs. / {room.no_of_people} people
                </Typography>
                <Typography variant="body3" style={{ backgroundColor: 'floralwhite', fontFamily: "Veranda", padding: "1px" }}>
                  {room.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Book Now +
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <div className='angle' style={{marginLeft:"40%"}} >
      <button onClick={() => scroll(-20)}><i className="fa fa-angle-left fa-2x" aria-hidden="true"></i></button>
      <button onClick={() => scroll(20)}><i className="fa fa-angle-right fa-2x" aria-hidden="true"></i></button>
      </div>
    </div>
  );
}