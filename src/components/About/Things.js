import React from 'react';
 import {things } from '../../aboutData.js';
 import '../../styles/about.css'
const Things = () => {
  return (
  <div  className='Things'>
{things.map((thing) => (
    <div key={thing.id}>
        <div><img src={thing.icon} height={40} width={40}/></div>
        <div style={{fontFamily:"Roboto",fontWeight:'bold',fontSize:'16px'}}>{thing.name}</div>
        <div style={{fontFamily:'Open Sans,sans-serif',fontWeight:'light',color:"gray",fontSize:'14px'}}>{thing.description}</div>
    </div>
))}
  </div>
  );
};

export default Things;
