import React, { useEffect } from 'react'
import {FaSearch, FaHeart, FaMapMarkedAlt, FaShoppingCart }from 'react-icons/fa'
import {IoPerson} from'react-icons/io5'
import { Link } from 'react-scroll'
import { FaXmark, FaBars, FaPhoneVolume } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
//    const [isMenuOpen, setIsMenuOpen] = useState(false);
  //  const toggleMenu = () => {
   //   setIsMenuOpen(!isMenuOpen);
   // }

  //  const closeMenu = () =>{
  //    setIsMenuOpen(false);
  //  }
    const navItems = [
      {
        link: 'Home', path: 'home'
      },
       {
        link: 'About', path: 'about'
      },
      {
        link: 'Products', path: 'products'
      },
      {
        link: 'Testimonials', path: 'testimonials'
      },
      {
        link: 'Contact', path: 'contact'
      },
    ]

  return (
    <>
    <div className='w-full px-16 py-2 bg-yellow-400 lg:flex hidden justify-between items-center gap-6'>
     <h1 className='text-sm font-semibold flex justify-center items-center gap-2'>
      <FaPhoneVolume  className='size-[18px]'/> <span> +91 702 863 7116</span></h1>
      <h1 className='text-sm font-semibold flex justify-center items-center gap-2'>
      <FaMapMarkedAlt  className='size-[18px]'/> <span> Sambhajinagar</span></h1>
        <h1 className='text-sm font-semibold flex justify-center items-center gap-2'>
      <MdEmail className='size-[18px]'/> <span> TechMart.com</span></h1>
      </div>

      <nav className='w-full bg-gray-100 flex justify-between items-center gap0-1
      lg:px-16 px-6 py-5 sticky top-0 z-50'>
        <h1 className='text-purple-700 font-bold lg:text-[30px] text-3xl underline  italic'> TechMart</h1>
      <ul className='lg:flex justify-center items-center gap-10 hidden'>
    {navItems.map(({link, path})=> (
      <Link key={path} className='text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2
      rounded-lg  hover:text-yellow-500'
      to={path} spy={true} offset={-100} smooth={true}> {link}</Link>
    )
  )}
      </ul>
      <div id='header-icons' className='lg:flex hidden justify-center items-center gap-6 text-black'>
  <FaSearch className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-purple-400'/>
   <IoPerson className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-purple-400'/>
    <FaHeart className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-purple-400'/>
      
      <div className='relative'>
        <FaShoppingCart className='w-[20px] h-[20px] transform hover:scale-125
        transition-transform duration-300 cursor-pointer hover:text-purple-400'>
          
        </FaShoppingCart>

      </div>
      
      
      </div>


      </nav>




    </>
  )
}

export default Header
