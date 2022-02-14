import React from 'react';
import '../../styles/about.css'
import Things from './Things'
import Explore from './Explore'
const About = () => {
  return (
    <div>
      <div className='img-gradient'>
        <img src='https://cdn.pixabay.com/photo/2015/12/04/14/49/hand-1076597__340.jpg' alt="About" height={600} width={1263} />
      </div>
      <div className="centered">About us</div>
      <div className='below'>Ut condimentum magna ut augue elementum ornare. Fusce posuere massa vitae maximus posuere. Mauris sagittis consectetur vulputate. Curabitur commodo est quis eleifend. Sed efficitur sem mi, et feugiat.</div>
      <div className='about'>
        <h4>Since 2015 year</h4>
        <div> Ut condimentum magna ut augue elementum ornare. Fusce posuere massa vitae maximus posuere. Mauris sagittis consectetur vulputate. Curabitur commodo est quis felis porttitor eleifend. Sed efficitur sem mi, et feugiat lorem scelerisque.</div>
      </div>
      <div>
        <div className='video'>
          <video width="800" height="440" controls>
            <source src={require('../../images/tour.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div>
        <Things />
      </div>
      <div className='about'>
        <h4>Things to do nearby</h4>
        <div> Ut condimentum magna ut augue elementum ornare. Fusce posuere massa vitae maximus posuere. Mauris sagittis consectetur vulputate. Curabitur commodo est quis felis porttitor eleifend. Sed efficitur sem mi, et feugiat lorem scelerisque.</div>
      </div>
      <div>
        <Explore />
      </div>
      <div className='partners'>
        <div><img src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/p1-client-hover-img-01.png" alt="logo" width="200" height='100' /></div>
        <div><img src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/p1-client-hover-img-02.png" alt="logo" width="200" height='100' /></div>
        <div><img src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/p1-client-hover-img-03.png" alt="logo" width="200" height='100' /></div>
        <div><img src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/p1-client-hover-img-04.png" alt="logo" width="200" height='100' /></div>
        <div><img src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/p1-client-hover-img-06.png" alt="logo" width="200" height='100' /></div>
      </div>
    </div>
  );
};

export default About;
