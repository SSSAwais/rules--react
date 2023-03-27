import React from "react"
import kingsImage from "../../assets/images/king1stSlider.png"
import Slider from "react-slick"
import flag from "../../assets/images/flag.png"
import map from "../../assets/images/map.png"
import "./ClashChampionsHeroSlider.css"
const ClashChampionsHeroSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
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
              {/* <div>
                <img
                  src={kingsImage}
                  alt="image"
                  className="img-fluid m-auto"
                />
              </div> */}
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
                <img src={flag} alt="flag" className="img-fluid" />
              </div>
              <div className="mobile_view"></div>
              <img src={map} alt="map" className="img-fluid" />
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
                <img src={flag} alt="flag" className="img-fluid" />
              </div>
              <div className="mobile_view"></div>
              <img src={map} alt="map" className="img-fluid" />
            </div>
            <div className="disp_slider_heading">
              <h6>
                gulf Air
                <br /> Bahrain gp
              </h6>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default ClashChampionsHeroSlider
