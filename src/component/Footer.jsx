import React, { useEffect } from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
import google from '../assets/google.jpg'
import apple from '../assets/apple.jpg'
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer() {
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

  return (
   <div id='contact' className='w-full bg-gray-100 py-[60px] px-5 lg:px-20'>
  <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 justify-between items-start'>
    {/* 1️⃣ Brand / About Section */}
    <div data-aos='zoom-in' data-aos-delay='200'>
      <h1 className='text-4xl font-bold text-purple-700 underline italic'>TechMart</h1>
      <p className='text-gray-500 mt-6 leading-relaxed text-justify'>
        Empowering people through technology — that’s our mission. <br />
        At TechMart, we connect customers to the world’s most trusted
        electronic brands, ensuring every purchase brings satisfaction,
        reliability, and value for money.
      </p>
      <h2 className='text-black font-semibold text-lg mt-6'>Download The App</h2>
      <div className='flex gap-3 mt-3'>
        <img src={google} alt='Google Play' className='w-[130px] cursor-pointer hover:opacity-90' />
        <img src={apple} alt='App Store' className='w-[130px] cursor-pointer hover:opacity-90' />
      </div>
    </div>

    <div data-aos='zoom-in' data-aos-delay='200'>
      <h1 className='text-black text-xl font-semibold capitalize mb-5'>Useful Links</h1>
      <ul className='flex flex-col gap-3 text-gray-500'>
        <li className='cursor-pointer hover:text-black'>Home</li>
        <li className='cursor-pointer hover:text-black'>About</li>
        <li className='cursor-pointer hover:text-black'>Service</li>
        <li className='cursor-pointer hover:text-black'>Blogs</li>
        <li className='cursor-pointer hover:text-black'>Contact</li>
      </ul>
    </div>

   
    <div data-aos='zoom-in' data-aos-delay='200'>
      <h1 className='text-black text-xl font-semibold capitalize mb-5'>Information</h1>
      <ul className='flex flex-col gap-3 text-gray-500'>
        <li className='cursor-pointer hover:text-black'>Return Policy</li>
        <li className='cursor-pointer hover:text-black'>Privacy Policy</li>
        <li className='cursor-pointer hover:text-black'>Refund Policy</li>
        <li className='cursor-pointer hover:text-black'>Agreement</li>
        <li className='cursor-pointer hover:text-black'>Our Brand</li>
      </ul>
    </div>

    
    <div data-aos='zoom-in' data-aos-delay='200'>
      <h1 className='text-black text-xl font-semibold capitalize mb-5'>Top Categories</h1>
      <ul className='flex flex-col gap-3 text-gray-500'>
        <li className='cursor-pointer hover:text-black'>Wireless Headphones</li>
        <li className='cursor-pointer hover:text-black'>Bluetooth Speakers</li>
        <li className='cursor-pointer hover:text-black'>Portable Devices</li>
        <li className='cursor-pointer hover:text-black'>Monio Live Camera</li>
        <li className='cursor-pointer hover:text-black'>Movie Projector T6</li>
      </ul>
    </div>
  </div>
  <div className='w-full lg:px-20 px-5 py-[40px] bg-gray-100'>
    <hr className='border-t border-gray-300 py-3'></hr>
    <div className='w-full flex lg:flex-row flex-col justify-between items-center
    lg:gap-4 gap-10'>
      <div data-aos='zoom-in' data-aos-delay='100'className='lg:w-[20%] w-full flex justify-center items-center
      lg:gap-4 gap-10'>
        <img src={pay1} alt=''className='w-[50px] rounded-lg'/>
        <img src={pay2} alt=''className='w-[50px] rounded-lg'/>
        <img src={pay3} alt=''className='w-[50px] rounded-lg'/>
        <img src={pay4} alt=''className='w-[50px] rounded-lg'/>
      </div>

    </div>
  </div>
</div>

    
    
  )
}

export default Footer
