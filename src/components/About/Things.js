import React from 'react';
 import {things } from '../../aboutData.js';
 import '../../styles/about.css'
const Things = () => {
  return (
  <div  className='Things'>
{things.map((thing) => (
    <div key={thing.id}>
        <div><img src={thing.icon} height={40} width={40}/></div>
        <div style={{fontFamily:"Roboto",fontWeight:'bold',fontSize:16}}>{thing.name}</div>
        <div style={{fontFamily:'Cormorant,serif',fontWeight:'light',color:"gray"}}>{thing.description}</div>
    </div>
))}
  </div>
  );
};

export default Things;
