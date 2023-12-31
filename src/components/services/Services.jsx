import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h3>What I Offer</h3>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className='service__list-icon' />
              <p> qwerry </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> qwerry </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> qwerry </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> qwerry </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> qwerry </p>
            </li>

          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className='service__list-icon' />
              <p> qwerry </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> qwerry </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> qwerry </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> qwerry </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> qwerry </p>
            </li>

          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services