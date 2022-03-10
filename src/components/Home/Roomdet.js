import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../styles/cards.css';
import {Link} from 'react-router-dom';
const Roomdet = ({RoomDetails}) => {
   function rightScroll() {
      var container = document.getElementById('card-slide');
      sideScroll(container,'right',25,100,20);
  };
  
 function  leftScroll() {
      var container = document.getElementById('card-slide');
      sideScroll(container,'left',25,100,20);
  };
  
  function sideScroll(element,direction,speed,distance,step){
      var scrollAmount = 0;
      var slideTimer = setInterval(function(){
          if(direction === 'left'){
              element.scrollLeft -= step;
          } else {
              element.scrollLeft += step;
          }
          scrollAmount += step;
          if(scrollAmount >= distance){
              window.clearInterval(slideTimer);
          }
      }, speed);
  }
  return (
    <div className='cards' >
      <div className='cards-wrapper' id="card-slide">
        {RoomDetails.map((room) => (
          <Card style={{ width: '18rem' }} key={room.id}>
            <Card.Img variant="top" src={room.image} />
            <Card.Body>
              <Card.Title>{room.name}</Card.Title>
              <Card.Subtitle >Lorem ipsum dolor sit, amet</Card.Subtitle>
              <Card.Text>
                <div className='dim'><h5>{room.dimensions}</h5>  msqs.</div>
                <div className='people'><h5>{room.no_of_people}</h5>  People</div>
                <div><h5>{room.price}</h5>  Cost</div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className='angle'  >
        <button type="button" id="left-slide" onClick={()=>leftScroll()}><i className="fa fa-angle-left fa-2x" aria-hidden="true"></i></button>
        <button type="button" onClick={()=>rightScroll()}><i className="fa fa-angle-right fa-2x" aria-hidden="true"></i></button>
      </div>
      <div className="rooms-redirect">
      <a href='#'><Link to='/rooms'>View more</Link></a>
      </div>
    </div>
  );
}

export default Roomdet;