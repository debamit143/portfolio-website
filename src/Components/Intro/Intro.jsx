import { React } from 'react'
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
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from "framer-motion"




export const Intro = () => {
  const transition ={duration:2,type:'spring'}
  const handleFacebook = () => {
    window.open('https://www.instagram.com/amitkumardebnath143/', '_blank');
  }
  const handleLinkin = () => {
    window.open('https://in.linkedin.com/in/amit-kumar-debnath-496072221?trk=people-guest_people_search-card', '_blank');
  }
  const handlegithub = () => {
    window.open('https://github.com/debamit143', '_blank');
  }
  const theme = useContext(themeContext)
  const darkMood = theme.state.darkMood
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color:darkMood? 'white':''}}>Hy! I Am </span>
          <spn>Amit Kumar Debnath</spn>
          <span>Web Devloper with high level of experience in React Js and Python , producting the Quality work.</span>
        </div>
        <button className="button i-button"> Hire Me</button>
        <div className="i-icons">
          <img src={github} alt='' onClick={handlegithub} />
          <img src={linkedin} alt='' onClick={handleLinkin} />
          <img src={insta} alt='' onClick={handleFacebook} />
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt='' />
        <img src={vector2} alt='' />
        <img src={boy} alt='' />
        <motion.img 
        initial={{left:'-36%'}}
        whileInView ={{left:'-20%'}}
        transition={transition}

        src={glassesimoji} alt='' />
        <motion.div 
         initial={{top :'-4%',left:'80%'}}
         whileInView ={{left:'60%'}}
         transition={transition}

        
        style={{ top: '-4%', left: '60%' }}>
          <FloatingDiv image={crown} text1='Web' text2='Developer' />
        </motion.div>
        <motion.div 
        initial={{top :'18rem',left:'9rem'}}
        whileInView ={{left:'0.9rem'}}
        transition={transition}
        
        
        style={{ top: '18rem', left: '0.9rem' }}>
          <FloatingDiv image={thumbup} text1='Best Design' text2='Award' />
        </motion.div>
        <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
        <div className="blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
      </div>
    </div>
  )
}
