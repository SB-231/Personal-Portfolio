import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h3>Get to Know</h3>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' size={30}/>
              <h3>Experience</h3>
              <small>0-1 Years Working</small>
            </article>

            {/*
            <article className='about__card'>
              <FiUsers className='about__icon' size={30}/>
              <h3>Clients</h3>
              <small>---</small>
            </article>
            */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' size={30}/>
              <h3>Projects</h3>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p align="justify">
            As a passionate web developer with a keen interest in artificial intelligence, I strive to create innovative and user-centric web solutions. With a solid foundation in front-end and back-end development, I excel at crafting dynamic and visually appealing websites. My enthusiasm for AI drives me to explore its integration into web applications, enabling enhanced user experiences. With a strong problem-solving mindset and a commitment to continuous learning, I am dedicated to staying at the forefront of web development technologies. I am excited to contribute my skills and expertise to drive meaningful digital experiences.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About