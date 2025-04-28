import React from "react"
import "./home.css"
import { motion } from "motion/react"

const fadeInUpAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.5 } },
}

const Home = () => {
  return (
    <div className="home-main_container">
      <motion.div
        className="hero_section"
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
      >
        <div className="hero_milestone">
          <motion.p variants={fadeInUpAnimation}>
            {" "}
            <div className="livePoint"></div>
            Trusted by 1.5 M code learner{" "}
          </motion.p>
        </div>
        <div className="hero_headContent">
          <motion.h1 variants={fadeInUpAnimation}>
            Consistency and commitment learning for coding courses
          </motion.h1>
          <motion.p variants={fadeInUpAnimation}>
            Content is everywhere, we provide a learning experience that is
            unmatched. Bounties, peer learning peer, code reviews, vertual
            hostel, alumni network, group projects and so many other activities
            to keep you on.
          </motion.p>
        </div>
        <motion.div className="cta" variants={fadeInUpAnimation}>
          <button>Live cohorts</button>
        </motion.div>
        {/* <div className="vdo">
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
        </div> */}
      </motion.div>
    </div>
  )
}

export default Home
