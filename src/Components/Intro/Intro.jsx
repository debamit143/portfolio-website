import React from 'react'
import './Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import insta from '../../img/instagram.png'

export const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span>Hy! I Am </span>
            <spn>Amit Kumar Debnath</spn>
            <span>Frontend Devloper with high level of experience in React Js and Python , producting the Quality work.</span>
        </div>
        <button className="button i-button"> Hire Me</button>
        <div className="i-icons">
            <img src={github} alt=''/>
            <img src={linkedin} alt=''/>
            <img src={insta} alt=''/>
        </div>
        </div>
        <div className="i-right">
            I am Right side.
        </div>
    </div>
  )
}
