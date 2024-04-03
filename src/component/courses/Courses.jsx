import React from 'react'
import './courses.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function Courses() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  nextArrow: <Arrow />,
  prevArrow : <Arrow />
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div className='card'>
          <img src="./h1.png" alt=""className='w-100' />
          <div className='card-body'>
            <h3>HTML</h3>
            <p></p>
          </div>
        </div>
        <div className='card'>
          <img src="./css.png" alt=""className='w-100' />
          <div className='card-body'>
          <h3>CSS</h3>
            <p></p>
          </div>
        </div>
        <div className='card'>
          <img src="./js.png" alt="" className='w-100' /> 
          <div className='card-body'>
          <h3>Java Script</h3>
            <p></p>
          </div>
        </div>
        <div className='card'>
          <img src="./rj.png" alt="" className='w-100'/>
          <div className='card-body'>
          <h3>React.js</h3>
            <p></p>
          </div>
        </div>
        <div className='card'>
          <img src="./boo.jpg" alt="" className='w-100'/>
          <div className='card-body'>
          <h3>Bootstrap</h3>
            <p></p>
          </div>
        </div>
        <div className='card'>
          <img src="./jq.png" alt="" className='w-100'/>
          <div className='card-body'>
          <h1>JQueary</h1>
            <p></p>
          </div>
        </div>
      </Slider>
      
      
    </div>
  )
}

export default Courses;
