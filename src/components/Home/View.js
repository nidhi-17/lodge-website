import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/view.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const View = () => {
  return (
    <div className='container-fluid p-0' >
        <div className="col-12">
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="First slide"
                height='650px'
                width="100%"
              
              />
              <Carousel.Caption  >
                <div className='welcome'>WELCOME TO LODGE</div>
                <h1>Designed to make your stay magnificient</h1>
                < button className='viewmore' >VIEW MORE</ button>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://cdn.pixabay.com/photo/2022/01/13/07/05/house-6934535__480.jpg"
                alt="Second slide"
                height='650px'
                width="100%"
              />

              <Carousel.Caption  >
              <div className='welcome'>WELCOME TO LODGE</div>
                <h1 >Enjoy the Beautiful and Cozy Ambiance</h1>
                < button>VIEW MORE</ button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://cdn.pixabay.com/photo/2016/11/14/02/28/apartment-1822409__480.jpg"
                alt="Third slide"
                height='650px'
                width="100%"
             
              />

              <Carousel.Caption  >
              <div className='welcome'>WELCOME TO LODGE</div>
                <h1 >Exceptional Care and Precautions taken</h1>
                < button>VIEW MORE</ button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    </div>
  );
};

export default View;

