import React from "react"
import "./home.css"
// import { motion } from "motion/react"

const Home = () => {
  return (
    <div className="home-main_container">
      <div className="hero_section">
        <div>
          <p>Trusted by 1.5M code Learner</p>
        </div>
        <div className="hero_headContent">
          <h1>Consistency and commitment learning for coding courses</h1>
          <p>
            Content is everywhere, we provide a learning experience that is
            unmatched. Bounties, peer learning peer, code reviews, vertual
            hostel, alumni network, group projects and so many other activities
            to keep you on.
          </p>
        </div>
        <div className="cta">
          <button>Live cohorts</button>
        </div>
        <div className="vdo">
          <div className="bggg"></div>
          <div className="vv">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/yG8JMlldoCE?si=40SW5hjuQ4CDAAVu&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
