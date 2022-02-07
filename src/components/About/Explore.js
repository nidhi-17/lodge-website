import React from 'react';
import '../../styles/about.css';
const Explore = () => {
    return (
        <div className='explore'>
            <div>
                <img src="https://cdn.pixabay.com/photo/2020/02/17/19/06/restaurant-4857484__480.jpg" height="250"
                width="350"/>
                <div className="Explore-info">
                    <h5>Gathering</h5>
                    <button>VIEW MORE</button>
                </div>
            </div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg' height="250"
                width="350"/>
                <div className="Explore-info">
                    <h5>Nice Food</h5>
                    <button>VIEW MORE</button>
                </div>
            </div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731__480.jpg' height="250"
                width="350"/>
                <div className="Explore-info">
                    <h5>Explore</h5>
                    <button>VIEW MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Explore;
