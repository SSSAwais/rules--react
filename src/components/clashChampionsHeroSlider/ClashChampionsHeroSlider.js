import React from "react"
import kingsImage from "../../assets/images/king1stSlider.png"
import Slider from "react-slick"
import flag from "../../assets/images/flag.png"
import map from "../../assets/images/map.png"
import australia from "../../assets/images/australian.png"
import ausmap from "../../assets/images/ausmap.png"
import "./ClashChampionsHeroSlider.css"
import azerflag from "../../assets/images/azerbajan.png"
import azerMap from "../../assets/images/AZERBADJAN.png"
import cryptoflag from "../../assets/images/cryptoflag.png"
import cryptomap from "../../assets/images/AUSTRIA-GP.png"
const ClashChampionsHeroSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
        },
      },
    ],
  }
  return (
    <>
      <div className="img_section">
        <img src={kingsImage} alt="image" className="img-fluid m-auto" />
      </div>
      <div className="clash_hero_slider">
        <Slider {...settings}>
          <div className="text-center slider_content">
            <div className="map_flag_middlebox">
              <div className="flag_section">
                <img src={flag} alt="flag" className="img-fluid" />
              </div>
              <div className="mobile_view"></div>

              <div>
                <img src={map} alt="map" className="img-fluid" />
              </div>
            </div>
            <div className="disp_slider_heading">
              <h6>
                gulf Air
                <br /> Bahrain gp
              </h6>
            </div>
          </div>
          <div className="slider_content">
            <div className="map_flag_middlebox">
              <div className="flag_section">
                <img src={australia} alt="flag" className="img-fluid" />
              </div>
              <div className="mobile_view"></div>
              <img src={ausmap} alt="map" className="img-fluid" />
            </div>
            <div className="disp_slider_heading">
              <h6>
                Rolex
                <br /> Australian gp
              </h6>
            </div>
          </div>
          <div className="slider_content">
            <div className="map_flag_middlebox">
              <div className="flag_section">
                {/* <img src={azerflag} alt="flag" className="img-fluid" /> */}
                <img src={cryptoflag} alt="flag" className="img-fluid" />
              </div>
              <div className="mobile_view"></div>
              {/* <img src={azerMap} alt="map" className="img-fluid" /> */}
              <img src={ausmap} alt="map" className="img-fluid" />
            </div>
            <div className="disp_slider_heading">
              <h6>
                crypto
                <br />
                miami gp
              </h6>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default ClashChampionsHeroSlider
