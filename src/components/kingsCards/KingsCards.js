import React from "react"
import "./KingsCards.css"
import greenstar from "../../assets/images/greenstar.png"
import pinkstar from "../../assets/images/pinkstar.png"
const KingsCards = () => {
  return (
    <>
      <div className="card_wrapper_for_kings fight_1 col-lg-4 col-md-6 col-sm-12">
        <h2>Fighter # 1</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="star">
                <img src={pinkstar} alt="icon" className="img-fluid" />
              </div>
              <button>Select</button>
            </div>
            <div className="flip-card-back">
              <h1>alex pereira</h1>
              <p>Middleweight divison</p>
              <div className="winning_strike_rate">
                <div className="win">
                  <h6>7</h6>
                  <p>Fight win streak</p>
                </div>
                <div className="knockout">
                  <h6>6</h6>
                  <p>wins by knockout</p>
                </div>
                <div className="finished">
                  <h6>3</h6>
                  <p>first round finishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card_wrapper_for_kings fight_2 col-lg-4 col-md-6 col-sm-12">
        <h2>no contest / extra round</h2>
        <div className="flip-card">
          <div className="flip_card_inner">
            <div className="flip-card-front">
              <button>Select</button>
            </div>
            {/* <div className="flip-card-back">
              <h1>Isreal adesanya</h1>
              <p>Middleweight divison</p>
              <div className="winning_strike_rate">
                <div className="win">
                  <h6></h6>
                  <p></p>
                </div>
                <div className="knockout">
                  <h6>15</h6>
                  <p>wins by knockout</p>
                </div>
                <div className="finished">
                  <h6>6</h6>
                  <p>first round finishes</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="card_wrapper_for_kings fight_3 col-lg-4 col-md-6 col-sm-12">
        <h2>Fighter # 1</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="star">
                <img src={greenstar} alt="icon" className="img-fluid" />
              </div>
              <button>Select</button>
            </div>
            <div className="flip-card-back">
              <h1>Isreal adesanya</h1>
              <p>Middleweight divison</p>
              <div className="winning_strike_rate">
                <div className="win">
                  <h6></h6>
                  <p></p>
                </div>
                <div className="knockout">
                  <h6>15</h6>
                  <p>wins by knockout</p>
                </div>
                <div className="finished">
                  <h6>6</h6>
                  <p>first round finishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KingsCards
