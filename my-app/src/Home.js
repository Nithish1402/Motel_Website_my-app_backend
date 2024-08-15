import React from 'react'
import App from './App'
import Blog from './Blog'
import Contact from './Contact'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import I1 from './I1'
import Room from './Room'
import AboutUs from './AboutUs'
const Home = () => {
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
            <li><Link to='/aboutus'>ABOUT US</Link></li>
            <li><Link to="/contacts">CONTACT US</Link></li>
            <li><button className="b1"><Link to='/apps' target='_blank'><b>LOGIN NOW</b></Link></button></li>
            
          </ul>  
        </div>
      </header>
        
 </div>
    <div className="body">
    <div className="c1">
        <h1 class="c11">Spend Quality
        Holidays With Us!.</h1>
        <p class="c12">Hotels are the ones that make you to feel like a guest,not just like visitor.</p>
        <Link to='/rooms'><button class="c13" >RESERVE NOW</button></Link>
    </div>
</div></>
  )
}
function Appt()
{
  return(
    <div>
      <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/apps' element={<App/>}>
      </Route>
      <Route path='/rooms' element={<Room/>}></Route>
      <Route path='/blogs' element={<Blog/>}></Route>
      <Route path='/contacts' element={<Contact/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default Appt