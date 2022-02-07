import * as React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import 'font-awesome/css/font-awesome.min.css';
import { data } from '../../data';
import '../../styles/cards.css';
export default function Roomdet() {
  return (
    <div className='cards' >
      <div className='cards-wrapper'>
        {data.map((room) => (
          <Card sx={{ maxWidth: 505 }} key={room.id} className='card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                width="200"
                image={room.image}
                alt="Romm Photo"
              />
              <CardContent style={{ backgroundColor: 'floralwhite' }}>
                <Typography gutterBottom variant='h5' component="div" style={{ fontFamily: "Roboto" }}>
                  {room.name}
                  <Typography gutterBottom variant="body" component="div" style={{ float: 'right', color: 'brown', fontFamily: "Helvetica" }}>${room.price}</Typography>
                </Typography>

                <Typography gutterBottom variant="body" component="div" style={{ color: 'brown', fontFamily: "Helvetica" }}>
                  {room.dimensions} msqs. / {room.no_of_people} people
                </Typography>
                <Typography variant="body2" style={{ backgroundColor: 'floralwhite', fontFamily: "Veranda", padding: "1px" }}>
                  {room.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="brown">
                Book Now +
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <div className='angle' style={{marginLeft:"45%"}} >
      <i className="fa fa-angle-left fa-3x" aria-hidden="true" style={{marginRight:"15%"}}></i>
      <i className="fa fa-angle-right fa-3x" aria-hidden="true"></i>
      </div>
    </div>
  );
}