import React from "react"
import Slider from "react-slick"
import "./ClashTeamSlider.css"
import car1 from "../../assets/images/f101.png"
import car2 from "../../assets/images/f2.png"
import car3 from "../../assets/images/f11.png"
const ClashTeamSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
        },
      },
    ],
  }
  return (
    <>
      <div className="cars_team_slider">
        <Slider {...settings}>
          <div>
            <img src={car1} alt="car" className="img-fluid m-auto" />
          </div>
          <div>
            <img src={car2} alt="car" className="img-fluid m-auto" />
          </div>
          <div>
            <img src={car3} alt="car" className="img-fluid m-auto" />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default ClashTeamSlider
