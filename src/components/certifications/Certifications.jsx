import React from 'react'
import './certifications.css'
import CRT1 from '../../assets/Coding for Everyone.jpg'
import CRT2 from '../../assets/IBM Applied AI.jpg'
import CRT3 from '../../assets/Exploratory Data Analysis for Machine Learning.jpg'

import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: CRT1,
        name: 'Coding for Everyone',
        review: 'C and C++ are foundational programming languages used across many industries. In this Specialization, learners acquired the fundamentals of coding in C and C++ programming languages, including a deep understanding of computer programming and algorithms, conversion of C to C++, and the ability to use it to solve complex problems.'
    },
    {
        avatar: CRT2,
        name: 'IBM Applied AI',
        review: 'This Professional Certificate provides a firm understanding of AI, its applications, and its use cases. Learners have become familiar with IBM Watson AI services and APIs. Learners have also grasped how virtual assistant technology works as well as built and deployed an AI powered customer support chatbot on a website. Learners competing this specialization have picked up practical Python skills to work with AI and have used IBM Watson AI services and APIs to create smart applications. They have become familiar with Computer Vision, Watson Visual Recognition and OpenCV and have used them for image processing and creating custom image classifiers. Learners have also demonstrated their proficiency in applied AI by completing several hands on projects.'
    },
    {
        avatar: CRT3,
        name: 'Exploratory Data Analysis for Machine Learning',
        review: 'Introduces you to Machine Learning. Through this certificate one will realize the importance of good, quality data. One will learn common techniques to retrieve data, clean it, apply feature engineering, and have it ready for preliminary analysis and hypothesis testing.'
    },
]

const Certifications = () => {
  return (
    <section id='certifications'>
        <h3>My Pursued</h3>
        <h2>Certifications</h2>

        <Swiper className="container certifications__container"
        // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
            {
                data.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className="certification">
                            <div className="client__avatar">
                                <img src={avatar} />
                            </div>
                            <h3 className="clients__name">{name}</h3>
                            <small className="clients__review">
                                {review}
                            </small>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>

    </section>
  )
}

export default Certifications