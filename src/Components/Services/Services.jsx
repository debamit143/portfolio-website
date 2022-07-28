import React from 'react'
import './Services.css'
import { Card } from '../Card/Card'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import resume from './Resume.pdf'


export const Services = () => {
  return (
    <div className="services">
      {/* For left side */}
      <div className="awesome">
        <span>My Awesome</span>
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
        <div style={{ left: '14rem' }}>
          <Card
            emoji={heartemoji}
            heading={'Design'}
            detail={"I love work"}
          />
        </div>
        {/* 2nd Div*/}

        <div style={{ left: '-4rem', top: '12.5rem' }}>
          <Card
            emoji={glasses}
            heading={'Developer'}
            detail={"Html JavaScript ReactJs Python Django Django Rest Api Firebase"}
          />
        </div>

        {/* 3rd Div */}
        <div style={{ left: '12rem', top: '19rem' }}>
          <Card
            emoji={humble}
            heading={'UI/UX'}
            detail={"lorem fhyff dddsdf hhyrbn ggdgr jjhfdf hgfdv hffkgui fjfvmbgk jfjhmb hfjdvbk"}
          />
        </div>
        <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
      </div>
    </div>
  )
}
