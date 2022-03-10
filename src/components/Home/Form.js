import React from 'react';
import '../../styles/form.css';
const Form = ({ filterguest, filterroom }) => {

  const selectroom = () => {
    var strUser = document.getElementById("cars").selectedOptions[0].value;
    return strUser;
  }
  const selectguest = () => {
    var struser = document.getElementById("guests").selectedOptions[0].value;
    return struser;
  }

  const booknow = () => {
    var x = selectroom();
    var y = selectguest();
    filterroom(x);
    filterguest(y);
  }

  return (
    <div className="wrapper">
      <div className="grid-container">
        <div className="grid-1">
          <form amethod="post">
            <label for="start-date">CHECK-IN</label> <br />
            <input type="date" id="start-date" name="trip-start" />
          </form>
        </div>
        <div className="grid-2">
          <form method="post">
          <label for="end-date">CHECK-OUT</label> <br />
            <input type="date" id="end-date" name="trip-end"  />
          </form>
        </div>
        <div className="grid-3">
          <form action="/action_page.php">
            <label for="cars">ROOMS</label>
            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
            <select name="cars" id="cars" onChange={() => selectroom()}>
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4 Rooms</option>
            </select>
          </form>
        </div>
        <div className="grid-4">
          <form action="/action_page.php">
            <label for="guests">GUESTS:</label>
            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
            <select name="cars" id="guests" onChange={() => selectguest()}>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>
          </form>
          </div>
        <div className="grid-5">
          <button onClick={() => booknow()}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Form;

