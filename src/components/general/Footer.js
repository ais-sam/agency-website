
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <footer className="pt-24 pb-20 bg-w-grey text-white font-roboto">
    <div className="container">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-y-9 gap-x-4">
            <div>
                <Link to='/'>
                    <img src={logo} alt=""  className='w-24'/>
                </Link>
                <p className="mt-5">Far far away, behind the word mountains, far from the countries.</p>
                <div className="flex gap-2 items-center mt-3">
                    <a href="https://www.facebook.com/itexc.agency/" target="_blank" className="w-8 h-8 rounded-full bg-w-yellow flex justify-center items-center "><i className="text-sm fa-brands fa-facebook"></i></a>
                    <a href="#" className="w-8 h-8 rounded-full bg-w-yellow flex justify-center items-center "><i className="text-sm fa-brands fa-twitter"></i></a>
                    <a href="https://dz.linkedin.com/company/itexc-agency" target="_blank" className="w-8 h-8 rounded-full bg-w-yellow flex justify-center items-center "><i className="text-sm fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>

            <div>
                <h6 className="font-bold text-md font-roboto-con uppercase mb-5">explore</h6>
                <ul className="text-gray-400" >
                    <li className="mb-1 capitalize" ><Link to="/about" className="">about</Link></li>
                    <li className="mb-1 capitalize" ><Link to="/contact" className="">contact</Link></li>
                    <li className="mb-1 capitalize" ><Link to="/portfolio" className="">portfolio</Link></li>
                    <li className="mb-1 capitalize"><Link to="/blog" className="">blog</Link></li>
                </ul>
            </div>

            <div>
                <h6 className="font-bold text-md font-roboto-con uppercase mb-5">info</h6>
                <ul className="text-gray-400" >
                    <li className="mb-1 capitalize" ><a href="#" className="">join us</a></li>
                    <li className="mb-1 capitalize" ><Link to="/blog" className="">blog</Link></li>
                    <li className="mb-1 capitalize" ><a href="#" className="">privacy & policy</a></li>
                    <li className="mb-1 capitalize"><a href="#" className="">term & conditions</a></li>
                </ul>
            </div>

            <div>
                <h6 className="font-bold text-md font-roboto-con uppercase mb-5">company</h6>
                <ul className="text-gray-400" >
                    <li className="mb-1 capitalize" ><Link to="/about" className="">about us</Link></li>
                    <li className="mb-1 capitalize" ><Link to="/blog" className="">blog</Link></li>
                    <li className="mb-1 capitalize" ><Link to="/contact" className="">contact</Link></li>
                    <li className="mb-1 capitalize"><a href="#" className="">carrers</a></li>
                </ul>
            </div>

            <div>
                <h6 className="font-bold text-md font-roboto-con uppercase mb-5">have a questions?</h6>
                <ul className="text-gray-400" >
                    <li className="mb-1 capitalize" ><a href="#" className=""><i className="fa-solid fa-map text-w-yellow mr-3"></i> Cité communel 16035 Dar El Beïda, Algeria</a></li>
                    <li className="mb-1 capitalize" ><a href="#" className=""><i className="fa-solid fa-phone text-w-yellow mr-3"></i> +213 791 74 19 47</a></li>
                    <li className="mb-1 capitalize" ><a href="#" className=""><i className="fa-regular fa-envelope text-w-yellow mr-3"> </i>contact@itexc-agency.com</a></li>
                </ul>
            </div>
        </div>
    </div>

</footer>  
  )
}

export default Footer