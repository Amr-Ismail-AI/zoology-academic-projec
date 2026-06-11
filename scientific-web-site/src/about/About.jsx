import React from 'react'
import "/src/about/About.css"
import { MembersData } from './MembersData'
import  defaultImage  from "/src/about/Gemini_Generated_Image_oo5xhfoo5xhfoo5x.png"
import { FaWhatsappSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <h1>About</h1>
        <ul className="about-card">
          {MembersData.map((member) => (
            
            <li key={member.name}>

              <div className="about-image">
                <img
                  src={member.image || defaultImage}
                  alt={member.name || "Amr Ismail"}
                />
              </div>

              <div className="about-text">

                <h1>
                  {member.name || "Amr Ismail"}
                </h1>

                <h3>
                  {member.title || "Software Engineer"}
                </h3>

                <p>
                  {member.bio || "Frontend Developer | React | Next.js"}
                </p>

                <div className="about-links">

                      <a
                        href={member.whatsapp || "https://wa.link/77hqa6"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsappSquare />
                      </a>

                      <a
                        href={member.linkedIn || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin />
                      </a>

                </div>

              </div>

            </li>

          ))}
        </ul>

      </div>
    </div>
  )
}