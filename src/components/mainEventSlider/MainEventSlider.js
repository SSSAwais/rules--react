import React from "react"
import Slider from "react-slick"
import "./MainEventSlider.css"
import pereira from "../../assets/images/pereiraa.png"
import adesanya from "../../assets/images/adesanya.png"
import burns from "../../assets/images/burns.png"
import masvidal from "../../assets/images/masvidal.png"
import holloway from "../../assets/images/holloway.png"
import allen from "../../assets/images/allen.png"
import pavlovich from "../../assets/images/pavlovich.png"
import blaydes from "../../assets/images/blaydes.png"
import song from "../../assets/images/song.png"
import simon from "../../assets/images/simon.png"
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
            <div className="second_fighter">
              <img src={burns} alt="fighter image" className="img-fluid" />
              <h6>Burns</h6>
            </div>
            <div className="versus_battle">
              <h4>VS</h4>
            </div>
            <div className="first_fighter">
              <img src={masvidal} alt="fighter image" className="img-fluid" />
              <h6>Masvidal</h6>
            </div>
          </div>
          <div className="main_fighting">
            <div className="first_fighter">
              <img src={holloway} alt="fighter image" className="img-fluid" />
              <h6>Holloway</h6>
            </div>
            <div className="versus_battle">
              <h4>VS</h4>
            </div>
            <div className="second_fighter">
              <img src={allen} alt="fighter image" className="img-fluid" />
              <h6>Allen</h6>
            </div>
          </div>
          <div className="main_fighting">
            <div className="first_fighter">
              <img src={pavlovich} alt="fighter image" className="img-fluid" />
              <h6>Pavlovich</h6>
            </div>
            <div className="versus_battle">
              <h4>VS</h4>
            </div>
            <div className="second_fighter">
              <img src={blaydes} alt="fighter image" className="img-fluid" />
              <h6>Blaydes</h6>
            </div>
          </div>
          <div className="main_fighting">
            <div className="first_fighter">
              <img src={song} alt="fighter image" className="img-fluid" />
              <h6>Song</h6>
            </div>
            <div className="versus_battle">
              <h4>VS</h4>
            </div>
            <div className="second_fighter">
              <img src={simon} alt="fighter image" className="img-fluid" />
              <h6>Simon</h6>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default MainEventSlider
