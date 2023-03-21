import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.png";
import img2 from "../assets/4.png";
const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false} //shows thumbnails below slide
        // showIndicators={false}
      >

        <div>
          <img src={img1} alt="Item1"/>
          <p className="legend">Full Stack</p>
        </div>

        <div>
          <img src={img2} alt="Item1"/>
          <p className="legend">Application Developer</p>
        </div>


      </Carousel>
    </div>
  )
}

export default Services
