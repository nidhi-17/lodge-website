import React from 'react';
import '../styles/form.css'
const Form = () => {
  return (
    <div className="wrapper">
    <div className="grid-container">
      <div className="grid-1">
        <label>CHECK-IN</label>
        <form amethod="post">
          <input type="date" name="" value=""/>
        </form>
      </div>
      <div className="grid-2">
        <label>CHECK-OUT</label>
        <form method="post">
          <input type="date" name="" value=""/>
        </form>
      </div>
      <div className="grid-3">
        <form action="/action_page.php">
          <label for="cars">ROOMS</label>
          <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
         
          <select name="cars" id="cars">
            <option value="volvo">1 Room</option>
            <option value="saab">2 Rooms</option>
            <option value="opel">3 Rooms</option>
            <option value="audi">4 Rooms</option>
          </select>
        </form></div>
      <div className="grid-4">
        <form action="/action_page.php">
          <label for="cars">GUESTS:</label>
          <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
          <select name="cars" id="cars">
            <option value="volvo">1 Adults</option>
            <option value="saab">room2</option>
            <option value="opel">room3</option>
            <option value="audi">room4</option>
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
