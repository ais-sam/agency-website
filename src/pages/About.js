import React from 'react'
import { Experience, Hero, Statistics, Faq, Team, Testimonials, Newsletter } from '../sections'
const About = () => {
  return (
    <>
        <Hero title="about"/>
        <Experience/>
        <Statistics/>
        <Faq/>
        <Team/>
        <Testimonials/>
        <Newsletter/>
    </>
  )
}

export default About