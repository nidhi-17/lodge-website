import React from 'react';
import {useState} from 'react';
import '../../styles/form.css';
const Form = ({filterroom,filterguest}) => {
//   const [guests,setguests] = useState(0);
//   const [rooms,setrooms] = useState(0);
  const selectroom = () =>{
      var strUser = document.getElementById("cars").selectedOptions[0].value;
      filterroom(strUser);
  }
  const selectguest = () =>{
    var struser = document.getElementById("guests").selectedOptions[0].value;
    filterguest(struser);
}
  
  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid-1">
          <label>CHECK-IN</label>
          <form amethod="post">
            <input type="date" name="" value="" />
          </form>
        </div>
        <div className="grid-2">
          <label>CHECK-OUT</label>
          <form method="post">
            <input type="date" name="" value="" />
          </form>
        </div>
        <div className="grid-3">
          <form action="/action_page.php">
            <label for="cars">ROOMS</label>
            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>

            <select name="cars" id="cars" onChange={()=>selectroom()}>
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4 Rooms</option>
            </select>
          </form></div>
        <div className="grid-4">
          <form action="/action_page.php">
            <label for="cars">GUESTS:</label>
            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
            <select name="cars" id="guests" onChange={()=>selectguest()}>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>


          </form></div>
        <div className="grid-5">
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Form;

