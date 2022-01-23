import * as React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import { data } from '../data';
import '../styles/cards.css';
export default function Roomdet() {
  return (
    <div className='cards'>
      {data.map((room) => (
        <Card sx={{ maxWidth: 505 }} key={room.id} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={room.image}
              alt="green iguana"
            />
            <CardContent style={{backgroundColor:"beige"}}>
              <Typography gutterBottom variant='h5' component="div" style={{fontFamily:"Roboto"}}>
                {room.name}
                <Typography gutterBottom variant="body" component="div" style={{float:'right',color:'brown',fontFamily:"Helvetica"}}>${room.price}</Typography>  
              </Typography>
              
              <Typography gutterBottom variant="h6" component="div" style={{color:'brown',fontFamily:"Helvetica"}}>
                {room.dimensions} msqs. / {room.no_of_people} people
              </Typography>
              <Typography variant="body2" style={{backgroundColor:"beige"}}>
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
  );
}