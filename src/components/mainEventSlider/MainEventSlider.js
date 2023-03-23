import React from "react"
import Slider from "react-slick"
import "./MainEventSlider.css"
import pereira from "../../assets/images/pereira.png"
import adesanya from "../../assets/images/adesanya.png"
import whiteFighter from "../../assets/images/whiteFighter.png"
import blackfighter from "../../assets/images/blackfighter.png"
const MainEventSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        },
      },
    ],
  }
  return (
    <>
      <div className="mainn_events_fighter">
        <h3>Main Event</h3>
        <Slider {...settings}>
          <div className="main_fighting">
            <div className="first_fighter">
              <img src={pereira} alt="fighter image" className="img-fluid" />
              <h6>PEREIRA</h6>
            </div>
            <div className="versus_battle">
              <h4>VS</h4>
            </div>
            <div className="second_fighter">
              <img src={adesanya} alt="fighter image" className="img-fluid" />
              <h6>ADESANYA</h6>
            </div>
          </div>
          <div className="main_fighting">
            <div className="first_fighter">
              <img
                src={blackfighter}
                alt="fighter image"
                className="img-fluid"
              />
              <h6>PEREIRA</h6>
            </div>
            <div className="versus_battle">
              <h4>VS</h4>
            </div>
            <div className="second_fighter">
              <img
                src={whiteFighter}
                alt="fighter image"
                className="img-fluid"
              />
              <h6>ADESANYA</h6>
            </div>
          </div>
          <div className="main_fighting">
            <div className="first_fighter">
              <img src={pereira} alt="fighter image" className="img-fluid" />
              <h6>PEREIRA</h6>
            </div>
            <div className="versus_battle">
              <h4>VS</h4>
            </div>
            <div className="second_fighter">
              <img src={adesanya} alt="fighter image" className="img-fluid" />
              <h6>ADESANYA</h6>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default MainEventSlider
