
import { useEffect, useState } from 'react';
import logo from '../../images/logo.png'

import { linkList } from '../../constants/index';
import { Link } from 'react-router-dom';


const Header = () => {
    const [open,setOpen] = useState(false)
    const [windowsWidth, setWindowsWidth] = useState(0);
    // const pathname = usePathname()

    // test if the current pathname is == to the path of the nav element 
    // const isActive = (linkPath)=>{
    //   return linkPath == pathname
    // }

    const handleClick = ()=>{
      // to prevent updating "open" state for tablet/desktop screens
      setOpen(()=>setOpen(!open))
      console.log('cliiiiiiiiiiick')
      if(windowsWidth.innerWidth < 768){
      }

    }

// set the "open" state to false ie: close the nab bar automatically for tablet/desktop screens
    useEffect(()=>{
      if (windowsWidth.innerWidth > 768) {
        setOpen(false)
      }
    },[windowsWidth])

// update the windowsWidth state when the each time the screen size changes
  useEffect(() => {
    function handleWindowResize() {
      setWindowsWidth(getWindowsWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

// function : to get the window width 
  function getWindowsWidth() {
  const {innerWidth} = window;
  return {innerWidth};
}


// Change the background color of the nab bar from transparent to black when scrolling
    useEffect(() => {
      if (document.querySelector("header")) {
        const header = document.querySelector("header");
        window.addEventListener("scroll", () => {
          if (window.scrollY > header.offsetHeight) {
            header.classList.add("active");
          } else {
            header.classList.remove("active");
          }
        });
      }
    }, []);
    
  return (
    <header className={`fixed top-0 left-0 w-full z-30 font-roboto bg-black md:bg-transparent ${!open ?'h-50':'h-20'}`}>

        <div className='social-info container px-4 lg:px-16 md:flex items-center justify-between p-1 text-white hidden'>
          <p className='text-sm'>Phone us on : +213 791 74 19 47 or email us : contact@itexc-agency.com</p>
          <ul className='flex items-center gap-5'>
            <li><a href='https://www.facebook.com/itexc.agency/' target="_blank"><i className="text-sm fa-brands fa-facebook"></i></a></li>
            <li><a href='#' target="_blank"><i className="text-sm fa-brands fa-twitter"></i></a></li>
            <li><a href='https://dz.linkedin.com/company/itexc-agency' target="_blank"><i className="text-sm fa-brands fa-linkedin-in"></i></a></li>
          </ul>
        </div>

        <div className='md:bg-[rgba(229,231,235,0.3)] nav-container'>
          <div className="container flex flex-col md:flex-row justify-between py-2 md:py-4 md:items-center text-white gap-8 md:gap-0">
            <div className='flex items-center justify-between md:block'>
              <Link to="/">
                <img src={logo} alt="itexc" className="w-20 md:w-24" />
              </Link>
              <button className="md:hidden mt-4" onClick={handleClick}>
                {open ? <i className="fa-solid fa-xmark text-2xl"></i> : <i className="fa-solid fa-bars text-2xl"></i>}
              </button>
            </div>
            <nav>
              
            {/* <ul className={` hidden ${open ? "flex flex-col gap-4 items-center md:flex-row md:items-center justify-between gap-8":"md:flex-row md:items-center justify-between gap-8"} md:flex-row md:items-center justify-between gap-8`}> */}
            <ul className={` md:flex md:flex-row md:items-center justify-between gap-8 ${open ? "flex flex-col gap-6 " : "hidden"}`}>
                {
                  linkList.map((el)=>{
                    return (
                      <li key={el.path}  className="capitalize font-semibold">
                        {/* <Link onClick={handleClick} href={el.path} className={`md:hover:text-w-yellow transition ${isActive(el.path) && "text-w-yellow border-b-w-yellow border-b"}`}> */}
                        <Link onClick={handleClick} to={el.path} className={`md:hover:text-w-yellow transition `}>
                          {el.name}
                        </Link>
                      </li>
                    );
                  })
                }
              </ul> 
            </nav>
          </div>
        </div>
    </header>
  );
}

export default Header