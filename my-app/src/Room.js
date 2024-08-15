import React, { useState } from "react";
import I1 from "./I1";
import "./Room.css";
import { BrowserRouter ,Link, Route, Routes} from "react-router-dom";

function Room() {
  const roomPrice = {
    ac: 1000, 
    nonAc: 500,
  };

  const [roomType, setRoomType] = useState("");
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [bill, setBill] = useState(0);

  const roomSlots = Array.from({ length: 8 }, (_, i) => i + 1);

  const handleRoomTypeChange = (event) =>
     {
    setRoomType(event.target.value);
    setSelectedRooms([]);
    setBill(0);
  };

  const handleRoomSelection = (roomNumber) => {
    if (selectedRooms.includes(roomNumber)) {
      setSelectedRooms(selectedRooms.filter((room) => room !== roomNumber));
      setBill(bill - roomPrice[roomType]);
    } else {
      setSelectedRooms([...selectedRooms, roomNumber]);
      setBill(bill + roomPrice[roomType]);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedRooms.length > 0) {
      alert(`You have booked the following rooms: ${selectedRooms.join(", ")}`);
    } else {
      alert("No rooms selected.");
    }
  };

  return ( 
    <>
    <div className="top">
      <header>
        <div class="t1">
            <I1/>
            <h1><span>M</span>OTEL</h1>
        </div>
        <div class="t2">
          <ul className="u1">

            <li><Link to="/">HOME</Link></li>
            <li><Link to="/rooms">ROOMS</Link></li>
            <li><a href="" target='_blank'>PAGES</a></li>
            <li><Link to='/blogs' >BLOG</Link></li>
            <li><a href="">ABOUT US</a></li>
            <li><a href="">CONTACT US</a></li>
            <li><button className="b1"><Link to='/apps' target='_blank'><b>LOGIN NOW</b></Link></button></li>
            
          </ul>  
        </div>
      </header>
      <div className="body">
    <div className="c1">
        <h1 class="c11">Spend Quality
        Holidays With Us!.</h1>
        <p class="c12">Hotels are the ones that make you to feel like a guest,not just like visitor.</p>
        <Link to='/rooms'><button class="c13" >RESERVE NOW</button></Link>
    </div>
</div>
        
 </div>
    <div className="form-container">
      
      <h2>Select Your Room Type</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="room-type">Room Type:</label>
          <select
            id="room-type"
            value={roomType}
            onChange={handleRoomTypeChange}
            required
          >
            <option value="">Select Room Type</option>
            <option value="ac">AC Room</option>
            <option value="nonAc">Non-AC Room</option>
          </select>
        </div>
        {roomType && (
          <div className="room-selection">
            <h3>Select a Room:</h3>
            <div className="rooms-grid">
              {roomSlots.map((roomNumber) => (
                <div
                  key={roomNumber}
                  className={`room-option ${
                    selectedRooms.includes(roomNumber) ? "selected" : ""
                  }`}
                  onClick={() => handleRoomSelection(roomNumber)}
                >
                  Room {roomNumber}
                </div>
              ))}
            </div>
          </div>
        )}
        {bill > 0 && (
          <div className="bill">
            <h3>Your Bill:</h3>
            <p>Total: &#8377; {bill}</p>
          </div>
        )}
        <button type="submit" className="b2">Submit</button>
      </form>
    </div>
    </>
  );
}

export default Room;