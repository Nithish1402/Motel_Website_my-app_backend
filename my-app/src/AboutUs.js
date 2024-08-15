// import React from 'react'
// import { BrowserRouter,Link } from 'react-router-dom'
// import I1 from './I1'
// const AboutUs = () => {
//   return (
//     <div>
//         <div class="top1">
//     <div class="t1">
//             <I1/>
//             <h1><span>M</span>OTEL</h1>
//         </div>
//           <ul className="u11">

//             <li><Link to="/">HOME</Link></li>
//             <li><Link to="/rooms">ROOMS</Link></li>
//             <li><a href="" target='_blank'>PAGES</a></li>
//             <li><Link to='/blogs' >BLOG</Link></li>
//             <li><a href="">ABOUT US</a></li>
//             <li><Link to="/contacts">CONTACT US</Link></li>
//             <li><button className="b1"><Link to='/apps' target='_blank'><b>LOGIN NOW</b></Link></button></li>
            
//           </ul> 
//           </div>
//     </div>
//   )
// }

// export default AboutUs


import React, { useEffect } from "react";
import "./AboutUs.css";

function AboutUs() {
  useEffect(() => {
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const img3 = document.querySelector(".img3");
    const img4 = document.querySelector(".img4");
    const img5 = document.querySelector(".img5");
    const p1 = document.querySelector(".p1");
    const p2 = document.querySelector(".p2");
    const p3 = document.querySelector(".p3");
    const p4 = document.querySelector(".p4");
    const p5 = document.querySelector(".p5");

    const handleMouseOver1 = () => {
      img2.style.opacity = 0;
      img3.style.opacity = 0;
      img4.style.opacity = 0;
      img5.style.opacity = 0;
      img1.style.opacity = 1;
      p1.style.display = "block";
    };

    const handleMouseOut1 = () => {
      img2.style.opacity = 1;
      img3.style.opacity = 1;
      img4.style.opacity = 1;
      img5.style.opacity = 1;
      img1.style.opacity = 1;
      p1.style.display = "none";
    };

    const handleMouseOver2 = () => {
      img2.style.position = "relative";
      img2.style.left = "-6cm";
      img2.style.opacity = 1;
      img3.style.opacity = 0;
      img4.style.opacity = 0;
      img5.style.opacity = 0;
      img1.style.opacity = 0;
      p2.style.display = "block";
    };

    const handleMouseOut2 = () => {
      img2.style.position = "relative";
      img2.style.left = "1cm";
      img2.style.opacity = 1;
      img3.style.opacity = 1;
      img4.style.opacity = 1;
      img5.style.opacity = 1;
      img1.style.opacity = 1;
      p2.style.display = "none";
    };

    const handleMouseOver3 = () => {
      img3.style.position = "relative";
      img3.style.left = "-13cm";
      img2.style.opacity = 0;
      img3.style.opacity = 1;
      img4.style.opacity = 0;
      img5.style.opacity = 0;
      img1.style.opacity = 0;
      p3.style.display = "block";
    };

    const handleMouseOut3 = () => {
      img3.style.position = "relative";
      img3.style.left = "1cm";
      img2.style.opacity = 1;
      img3.style.opacity = 1;
      img4.style.opacity = 1;
      img5.style.opacity = 1;
      img1.style.opacity = 1;
      p3.style.display = "none";
    };

    const handleMouseOver4 = () => {
      img4.style.position = "relative";
      img4.style.left = "-20cm";
      img2.style.opacity = 0;
      img3.style.opacity = 0;
      img4.style.opacity = 1;
      img5.style.opacity = 0;
      img1.style.opacity = 0;
      p4.style.display = "block";
    };

    const handleMouseOut4 = () => {
      img4.style.position = "relative";
      img4.style.left = "1cm";
      img2.style.opacity = 1;
      img3.style.opacity = 1;
      img4.style.opacity = 1;
      img5.style.opacity = 1;
      img1.style.opacity = 1;
      p4.style.display = "none";
    };

    const handleMouseOut5 = () => {
      img5.style.position = "relative";
      img5.style.left = "1cm";
      img2.style.opacity = 1;
      img3.style.opacity = 1;
      img4.style.opacity = 1;
      img5.style.opacity = 1;
      img1.style.opacity = 1;
      p5.style.display = "none";
    };

    const handleMouseOver5 = () => {
      img5.style.position = "relative";
      img5.style.left = "-26cm";
      img2.style.opacity = 0;
      img3.style.opacity = 0;
      img4.style.opacity = 0;
      img5.style.opacity = 1;
      img1.style.opacity = 0;
      p5.style.display = "block";
    };

    img1.addEventListener("mouseover", handleMouseOver1);
    img1.addEventListener("mouseout", handleMouseOut1);

    img2.addEventListener("mouseover", handleMouseOver2);
    img2.addEventListener("mouseout", handleMouseOut2);

    img3.addEventListener("mouseover", handleMouseOver3);
    img3.addEventListener("mouseout", handleMouseOut3);

    img4.addEventListener("mouseover", handleMouseOver4);
    img4.addEventListener("mouseout", handleMouseOut4);

    img5.addEventListener("mouseover", handleMouseOver5);
    img5.addEventListener("mouseout", handleMouseOut5);

    // Cleanup event listeners on component unmount
    return () => {
      img1.removeEventListener("mouseover", handleMouseOver1);
      img1.removeEventListener("mouseout", handleMouseOut1);
      img2.removeEventListener("mouseover", handleMouseOver2);
      img2.removeEventListener("mouseout", handleMouseOut2);
      img3.removeEventListener("mouseover", handleMouseOver3);
      img3.removeEventListener("mouseout", handleMouseOut3);
      img4.removeEventListener("mouseover", handleMouseOver4);
      img4.removeEventListener("mouseout", handleMouseOut4);
      img5.removeEventListener("mouseover", handleMouseOver5);
      img5.removeEventListener("mouseout", handleMouseOut5);
    };
  });

  return (
    <>
    
      <h1 className="abt">ABOUT US</h1>
      <div className="img-container">
        <p className="p1 hidden">
          We Started the Hotel is a chain of luxury hotels and a subsidiary of
          the Indian Hotels Company Limited,[1] headquartered in Mumbai, India.
          Incorporated by Jamsetji Tata in 1902,
        </p>
        <p className="p2 hidden">
          Dive into luxury with the inviting waters and serene ambiance of our
          swimming pool. Swim laps, soak up the sun poolside, or simply unwind
          after a long day - our pool provides an oasis of tranquillity amidst
          the bustling city.
        </p>
        <p className="p3 hidden">
          Welcome to J Wellness Circle Spa, an oasis of luxury where every
          detail is crafted to elevate your senses and rejuvenate your spirit.
          Indulge in a bespoke journey of wellness inspired by Ayurveda.
        </p>
        <p className="p4 hidden">
          Guests from around the world find comfort in the stately, tastefully
          designed rooms, offering unhindered views of the destination, while
          providing convenient in-room facilities
        </p>
        <p className="p5 hidden">
          Embark on a journey of exquisite experiences for the discerning
          connoisseur, seamlessly woven together with impeccable service,
          sophisticated ambience and masterful culinary artistry.
        </p>

        <img
          src="https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_640.jpg"
          className="img1"
          alt="Hotel"
        />
        <img
          src="https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg"
          className="img2"
          alt="Hotel Room"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCPVCxMt67zUhMAdMaqDzre7Cq0TNRq91fw&usqp=CAU"
          className="img3"
          alt="Hotel Interior"
        />
        <img
          src="https://promos.makemytrip.com/AltAcco/images/hotel.png"
          className="img4"
          alt="Hotel Facilities"
        />
        <img
          src="https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-5794eaa/www.jaypeehotels.com/blog/wp-content/uploads/2020/09/5-Star-Hotel-1-1024x602.jpg"
          className="img5"
          alt="Luxury Hotel"
        />
      </div>
    </>
  );
}

export default AboutUs;