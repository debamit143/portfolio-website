import React from 'react'
import './Contact.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

export const Contact = () => {
    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood

    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color:darkMood? 'white':''}}>Get In Touch</span>
                    <span>Contact Me</span>
                    <div className="blur s-blur" style={{ background: '#ABF!FF94' }}></div>
                </div>
            </div>
            <div className="c-right">
                <form>
                    <input type='text' name='user_name' className='user' placeholder='Name' />
                    <input type='email' name='user_email' className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='Message' />
                    <input type='submit' value='send' className='button' />
                    <div className="blur c-blur" style={{ background: 'var(--purple)' }}></div>
                </form>
            </div>
        </div>
    )
}
