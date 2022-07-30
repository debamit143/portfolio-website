import React from 'react'
import './Services.css'
import { Card } from '../Card/Card'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import resume from './Resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from "framer-motion"


export const Services = () => {
  const transition ={duration:2,type:'spring'}
  const theme = useContext(themeContext)
  const darkMood = theme.state.darkMood
  return (
    <div className="services">
      {/* For left side */}
      <div className="awesome">
        <span style={{color:darkMood? 'white':''}}>My Awesome</span>
        <span>Services</span>
        <span>
          Software Developer with aptitude, problem
          <br />
          solving technical skills and ability to
          <br />
          work as a team member or independently.Seeking
          <br />
          position with a well-established company.
          <br />
          Willing to do hard work with determination.
        </span>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>
      {/* For Right Side */}
      <div className="cards">

        {/* 1st div */}
        <motion.div 
        initial={{left:'27rem'}}
        whileInView ={{left:'16rem'}}
        transition={transition}
        
        style={{ left: '16rem' }}>
          <Card
            emoji={heartemoji}
            heading={'Design'}
            detail={"I love work"}
          />
        </motion.div>
        {/* 2nd Div*/}

        <motion.div 
        initial={{left:'-10rem'}}
        whileInView ={{left: '-4rem', top: '12.5rem'}}
        transition={transition}
        
        style={{ left: '-4rem', top: '12.5rem' }}>
          <Card
            emoji={glasses}
            heading={'Developer'}
            detail={"Html JavaScript ReactJs Python Django Django Rest Api Firebase"}
          />
        </motion.div>

        {/* 3rd Div */}
        <motion.div 
        initial={{left:'27rem'}}
        whileInView ={{left: '12rem', top: '19rem'}}
        transition={transition}
        
        style={{ left: '12rem', top: '19rem' }}>
          <Card
            emoji={humble}
            heading={'UI/UX'}
            detail={"lorem fhyff dddsdf hhyrbn ggdgr jjhfdf hgfdv hffkgui fjfvmbgk jfjhmb hfjdvbk"}
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
      </div>
    </div>
  )
}
