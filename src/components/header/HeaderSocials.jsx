import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/shubham-bhatia-0a59b9190" target="_blank"><BsLinkedin size={30}/></a>
        {/*
        <a href="https://github.com" target="_blank"><FaGithub size={30}/></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble size={30}/></a>
        */}
    </div>
  )
}

export default HeaderSocials