import React from 'react'
import './Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import insta from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import crown from '../../img/crown.png'
import thumbup from '../../img/thumbup.png'
import glassesimoji from '../../img/glassesimoji.png'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv'

export const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <spn>Amit Kumar Debnath</spn>
          <span>Web Devloper with high level of experience in React Js and Python , producting the Quality work.</span>
        </div>
        <button className="button i-button"> Hire Me</button>
        <div className="i-icons">
          <img src={github} alt='' />
          <img src={linkedin} alt='' />
          <img src={insta} alt='' />
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt='' />
        <img src={vector2} alt='' />
        <img src={boy} alt='' />
        <img src={glassesimoji} alt='' />
        <div style={{ top: '-4%', left: '68%' }}>
          <FloatingDiv image={crown} text1='Web' text2='Developer' />
        </div>
        <div style={{ top: '18rem', left: '0.9rem' }}>
          <FloatingDiv image={thumbup} text1='Best Design' text2='Award' />
        </div>
        <div className="blur" style={{background:'rgb(238 210 255)'}}></div>
        <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
      </div>
    </div>
  )
}
