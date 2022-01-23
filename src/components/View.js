import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/view.css'
const View = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/12/11/18/10/apartment-1899964__480.jpg"
          alt="First slide"
          height='700px'
        />
        <Carousel.Caption  >
          <h3 style={{color:"brown"}}>Designed to make your stay magnificient</h3>
          < button>VIEW MORE</ button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/empty-wooden-table-top-and-green-bokeh-display-montage-for-product-picture-id1005453108?k=20&m=1005453108&s=612x612&w=0&h=fhZiB5Kfh4VWfJhWXJMiojhiL58kG_tg22h8Sf6X07g="
          alt="Second slide"
          height='700px'
        />

        <Carousel.Caption  >
          <h3 style={{color:"blue"}}>Beautiful and Cozy Ambiance</h3>
          < button>VIEW MORE</ button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515__340.jpg"
          alt="Third slide"
          height='700px'
        />

        <Carousel.Caption  >
          <h3 style={{color:"yellow"}}>Exceptional care taken</h3>
          < button>VIEW MORE</ button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default View;

