import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SHUBHAM BHATIA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* 
      <div className="footer__socials">
              <a href="https://facebook.com"><FaFacebookSquare /></a>
              <a href="https://instagram.com"><FaInstagram /></a>
              <a href="https://twitter.com"><FaTwitterSquare /></a>
            </div>

      */}
      
      <div className="footer__copyright">
        <small>&copy; Shubham Bhatia. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer