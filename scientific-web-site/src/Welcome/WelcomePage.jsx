import "./WelcomePage.css"
import React from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { motion } from "motion/react"

export default function WelcomePage() {

  const navigate = useNavigate()

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    className="welcome-container">

      <div className="welcome-left">
        <div className="welcome-text">
          <h1>Welcome to Our Academic Community Platform</h1>

          <p>
            We believe that knowledge grows through collaboration. By bringing
            together academic minds under one digital space, we aim to foster
            innovation, critical thinking, and meaningful scientific
            contribution.
          </p>

          <p>
            Join us in building a dynamic academic community where ideas are
            shared, research is valued, and excellence is cultivated.
          </p>
          <h2
            onClick={() => navigate("/home")}
          >
            Let's Start
          </h2>

        </div>
      </div>

    </motion.div>
  )
}