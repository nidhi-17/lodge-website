import React from 'react';
 import {things } from '../../aboutData.js';
 import '../../styles/about.css'
const Things = () => {
  return (
  <div  className='Things'>
{things.map((thing) => (
    <div key={thing.id}>
        <div><img src={thing.icon} height={50} width={50}/></div>
        <div style={{fontFamily:"Times New Roman",fontWeight:'bold',fontSize:20}}>{thing.name}</div>
        <div style={{fontFamily:'Cormorant,serif',fontWeight:'light',color:"gray"}}>{thing.description}</div>
    </div>
))}
  </div>
  );
};

export default Things;
