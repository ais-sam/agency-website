
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const ContactGrid = () => {
  return (
    <div className='py-20'>
        <div className='container'> 
            <div className='shadow-lg flex flex-col lg:flex-row items-stretch gap-7 md:mx-4'>
                <ContactForm/>
                <ContactInfo/>
            </div>
        </div>
    </div>

   
  )
}

export default ContactGrid