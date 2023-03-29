import React, { useEffect } from "react"
import AbsDiv from "../../components/absDiv/AbsDiv"
import HomePageCircle from "../../components/homePageCircle/HomePageCircle"
import HomePageSideBar from "../../components/homePageSidebar/HomePageSideBar"
import HomePageSlilder from "../../components/homePageSlider/HomePageSlilder"
import "./HomePage.css"

const HomePage = () => {
  useEffect(() => {
    const detectMobileScreen = () => {
      if (window.matchMedia("(max-width: 600px)").matches) {
        console.log(window.screen.orientation.lock("landscape"))
      }
    }

    detectMobileScreen()

    window.addEventListener("resize", detectMobileScreen)

    return () => {
      window.removeEventListener("resize", detectMobileScreen)
    }
  }, [])
  return (
    <>
      <section className="home_page_wrapper">
        <div className="container-fluid">
          <div className="row home_page_row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="space-section">
                <AbsDiv />
              </div>
              <div className="circle_section">
                <HomePageCircle />
              </div>
              <div>
                <HomePageSlilder />
              </div>
              <div className="space-section2">
                <AbsDiv />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <HomePageSideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
