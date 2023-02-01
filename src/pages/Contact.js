import React from 'react'
import { ContactInfo } from '../components'
import { Hero } from '../sections'

const Contact = () => {
    const heroImg = "https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <>
    <Hero img={heroImg} title="contact us"/>
    <div className='py-20'>
        <div className='container'> 
            <div className='shadow-lg flex flex-col lg:flex-row items-stretch gap-7 md:mx-4'>
                {/* form */}
                <div className='basis-7/12 py-20 lg:pl-8 px-6 lg:px-0'>
                    <h3 className='uppercase font-roboto-con mb-3 text-3xl font-bold'>get in touch</h3>
                    <form>
                        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 mb-3'>
                            <input type="text" placeholder="Name" className="p-2 border-2 border-w-yellow focus:outline-none rounded-sm flex-1"/>
                            <input type="email" placeholder="Email" className="p-2 border-2 border-w-yellow focus:outline-none rounded-sm flex-1"/>
                        </div>
                        <input type="text" placeholder="Subject" className="block w-full p-2 border-2 border-w-yellow focus:outline-none rounded-sm mb-3"/> 
                        <textarea type="text" placeholder="Message" rows="8" className="w-full resize-none p-2 border-2 border-w-yellow focus:outline-none rounded-sm mb-3"/>
                        <button className='uppercase text-sm font-semibold text-white bg-w-yellow p-2 rounded-sm'>send message</button> 
                    </form>
                </div>
               <ContactInfo/>
            </div>
        </div>
    </div>

    <div className='mb-12'>
        <div className='container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.374648871105!2d3.2228124999999994!3d36.7135625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e5127fd864a5d%3A0x1bc247555ddda9f2!2sEURL%20ITEXC%20AGENCY!5e0!3m2!1sfr!2sdz!4v1675242962855!5m2!1sfr!2sdz" style={{border:"0",width:"100%"}} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="800" height="400" ></iframe>
        </div>
    </div>
    </>
  )
}

export default Contact
