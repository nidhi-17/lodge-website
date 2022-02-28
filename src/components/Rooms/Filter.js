import React from 'react'
import '../../styles/rooms.css';
const Filter = ({filterGuest,filterRoom}) => {
    const selectRoom = ()=>{
        var strUser = document.getElementById("cars").selectedOptions[0].value;
        return strUser;
      }
      const selectGuest = ()=>{
        var struser = document.getElementById("guests").selectedOptions[0].value;
        return struser;
      }
      const bookNow = ()=>{
        var z=selectRoom();
        var w=selectGuest();
        filterRoom(z);
        filterGuest(w);
      }
    return (
        <div className="room-wrapper">
            <div className='availability'>
                    Check Availability
                </div>
            <div className="room-grid-container">      
                <div className="room-grid-1">
                    <form amethod="post">
                    <label for="start-Date">CHECK-IN</label> <br />
                        <input type="date" id="start-Date" name='trip-Start' />
                    </form>
                </div>
                <div className="room-grid-2">
                    <form method="post">
                    <label for="end-Date">CHECK-OUT</label> <br />
                        <input type="date" id="end-Date"  name="trip-End"/>
                    </form>
                </div>
                <div className="room-grid-3">
                    <form action="/action_page.php">
                        <label for="cars">ROOMS</label>
                        <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                        <select name="cars" id="cars" onChange={() => selectRoom()}>
                            <option value="1">1 Room</option>
                            <option value="2">2 Rooms</option>
                            <option value="3">3 Rooms</option>
                            <option value="4">4 Rooms</option>
                        </select>
                    </form></div>
                <div className="room-grid-4">
                    <form action="/action_page.php">
                        <label for="cars">GUESTS:</label>
                        <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                        <select name="cars" id="guests" onChange={() => selectGuest()}>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>
                        </select>
                    </form>
                </div>
                <div className="room-grid-5">
                    <button onClick={() => bookNow()}>Check Availability</button>
                </div>
            </div>
        </div>
    )
}

export default Filter;
