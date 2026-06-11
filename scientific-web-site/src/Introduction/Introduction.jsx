import React from 'react'
import IntroImage from "/src/assets/IntroductionImages/pngtree-animal-zoology-image_16505416.jpg"
import "./Introduction.css"
import { IntroHeadData, IntroHeadDataAspects } from './IntroductionAPI';

export default function Introduction() {
  return (
    <main className="introduction" id="introduction">
        <div className="container">
            <h1 className="title">{IntroHeadData[0].title}</h1>

            <h2></h2>
            <p>{IntroHeadData[0].script}</p>

            <h2>Definition</h2>
            <p>{IntroHeadData[0].definition}</p>            
        </div>
        <div className="intro-image">
            <img src={IntroImage} alt="intro-image" />
        </div>
        <div className="intro-aspects">
            <ul>
                {IntroHeadDataAspects.map((aspect) => (
                    <li key={aspect.id}>
                    <a href={aspect.link} target="_blank">
                        <h2>{aspect.title}</h2>
                        <p>{aspect.description}</p>
                        <h3>Click To Read More . . .</h3>
                    </a>
                    </li>
                ))}
            </ul>
        </div>
    </main>
  )
}
