import React from "react"
import AbsDiv from "../../components/absDiv/AbsDiv"
import HomePageSideBar from "../../components/homePageSidebar/HomePageSideBar"
import HomePageSlilder from "../../components/homePageSlider/HomePageSlilder"
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
      <section className="home_page_wrapper">
        <div className="container-fluid">
          <div className="row home_page_row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="space-section">
                <AbsDiv />
              </div>
              <div>
                <HomePageSlilder />
              </div>
              <div className="space-section2">
                <AbsDiv />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <HomePageSideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
