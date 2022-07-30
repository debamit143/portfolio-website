import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Linkin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'


export const Footer = () => {
    const handleFacebook = () => {
        window.open('https://www.facebook.com/amit.debnath.92372', '_blank');
    }
    const handleLinkin = () => {
        window.open('https://in.linkedin.com/in/amit-kumar-debnath-496072221?trk=people-guest_people_search-card', '_blank');
    }
    const handlegithub = () => {
        window.open('https://github.com/debamit143', '_blank');
    }
    return (
        <div className="footer">
            <img src={wave} alt="" />
            <div className="f-content">
                <span>Debamit143@gmail.com</span>
                <div className="f-icons">
                    <Facebook color='white' size='3rem' onClick={handleFacebook} />
                    <Linkin color='white' size='3rem' onClick={handleLinkin} />
                    <Github color='white' size='3rem' onClick={handlegithub} />
                </div>
            </div>
        </div>
    )
}
