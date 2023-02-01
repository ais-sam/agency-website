import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import { Blog, Experience, Faq, Hero, Newsletter, Projects, Services, Statistics, Team, Testimonials } from '../sections/index'

const Home = () => {
  return (
    <main>
      <Hero home={true}/>
      <Services/>
      <Experience/>
      <Statistics/>
      <Faq/>
      <Team/>
      <Projects/>
      <Testimonials/>
      <Blog/>
      <Newsletter/>
    </main>
  )
}

export default Home