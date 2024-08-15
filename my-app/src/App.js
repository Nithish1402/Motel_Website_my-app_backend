import "./App.css";
import I1 from './I1.js'
import React, { useState } from "react";
import {BrowserRouter, Link} from 'react-router-dom'
import axios from "axios";

function App() {
  const [colorExist, changeColorExist] = useState(`linear-gradient(
    to right,
    rgb(194, 82, 194),
    rgb(42, 189, 238)
  );`);

  const [leftDis, setLeftDis] = useState("block");
  const [rightDis, setRightDis] = useState("block");
  const [leftPos, setLeftPos] = useState("50%");
  const [leftWidth, setWidthL] = useState("50%");
  const [rightWidth, setWidthR] = useState("50%");
  const [existbtn, setExist] = useState("block");
  const [newbtn, setNew] = useState("block");
  const [loginpage, setLoginPage] = useState("none");
  const [newpage, setNewPage] = useState("none");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");

  const leftCss = {
    backgroundImage: colorExist,
    display: leftDis,
    width: leftWidth,
  };

  const rightCss = {
    backgroundImage: colorExist,
    display: rightDis,
    width: rightWidth,
    left: leftPos,
  };

  const exitsbtn = {
    display: existbtn,
  };

  const newsbtn = {
    display: newbtn,
  };

  const vanish = {
    display: existbtn,
  };

  const loginPageCss = {
    display: loginpage,
  };

  const newPageCss = {
    display: newpage,
  };

  function existChangeColorL() {
    changeColorExist(`linear-gradient(
      to right,
      rgb(42, 189, 238),
      rgb(194, 82, 194)
    )`);
    setRightDis("none");
    setWidthL("100%");
    setWidthR("0%");
    setExist("none");
    setLoginPage("block");
  }

  function existChangeColorR() {
    changeColorExist(`linear-gradient(
      to right,
      rgb(194, 82, 194),
      rgb(42, 189, 238)
    )`);
    setLeftDis("none");
    setWidthR("100%");
    setWidthL("0%");
    setNew("none");
    setExist("none");
    setNewPage("block");
    setLeftPos("0%");
  }

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      alert("Invalid email or password");
    }
  }

  async function handleSignup(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        name,
        age,
        gender,
        phoneNumber,
        email,
        username,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      alert("Error registering user");
    }
  }

  return (
    <>
    <div class="top1">
    <div class="t1">
            <I1/>
            <h1><span>M</span>OTEL</h1>
        </div>
          <ul className="u11">

            <li><Link to="/">HOME</Link></li>
            <li><Link to="/rooms">ROOMS</Link></li>
            <li><a href="" target='_blank'>PAGES</a></li>
            <li><Link to='/blogs' >BLOG</Link></li>
            <li><a href="">ABOUT US</a></li>
            <li><Link to="/contacts">CONTACT US</Link></li>
            <li><button className="b1"><Link to='/apps' target='_blank'><b>LOGIN NOW</b></Link></button></li>
            
          </ul> 
          </div>
      <div className="top">
        <h1 className="headers" style={vanish}>
          LOGIN PAGE
        </h1>
        <h1 className="sign" style={vanish}>
          SIGN UP
        </h1>
        <div className="left" style={leftCss}>
          <button
            className="existUser"
            style={exitsbtn}
            onClick={existChangeColorL}
          >
            EXISTING USER
          </button>
        </div>
        <div className="right" style={rightCss}>
          <button
            className="newUser"
            style={newsbtn}
            onClick={existChangeColorR}
          >
            NEW USER
          </button>
        </div>
        <div className="loginPage" style={loginPageCss}>
          <form onSubmit={handleLogin}>
            <label className="email">EMAIL</label>
            <input
              type="text"
              className="emailText"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label className="pass">PASSWORD</label>
            <input
              type="password"
              className="passText"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="existSumbitbtn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="newUsers" style={newPageCss}>
          <div className="form-container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  className="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  className="age"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  className="gender"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="number">Phone Number:</label>
                <input
                  type="tel"
                  id="number"
                  className="number"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="emails"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  className="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="newSumbit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;