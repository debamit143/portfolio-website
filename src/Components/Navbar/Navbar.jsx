import React from 'react'
import { Toggle } from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'

export const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Amit</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='navbar' smooth={true} activeClass='activeClass'>
                            <li className='list'>Home</li>
                        </Link>
                        <Link spy={true} to='services' smooth={true}>
                            <li className='list'>Services</li>
                        </Link>
                        <Link spy={true} to='experience' smooth={true}>
                            <li className='list'>Experience</li>
                        </Link>
                        <Link spy={true} to='portfolio' smooth={true}>
                            <li className='list'>Porfolio</li>
                        </Link>
                        {/* <Link spy={true} to='contactme' smooth={true} activeClass='activeClass'><li>Testimonial</li></Link> */}


                    </ul>
                </div>
                <Link spy={true} to='contact' smooth={true}>
                    <button className="button">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}
