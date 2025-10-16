import React, { useEffect } from 'react'
import banner1 from'../assets/banner1.jpg'
import banner2 from'../assets/banner2.jpg'
import banner3 from'../assets/banner3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Types() {
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
    <div className='w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10'>
      <div data-aos="zoom.in" data-aos-delay="100" className='flex flex-col
      justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' 
       style={{ backgroundImage: `url(${banner1})` }}>
        <h1 className='bg-yellow-400 hover:bg-purple-500 px-6 py-3 border rounded-lg text-white font-semibold mt-[60px]'> 60%OFF</h1>
        <h1 className='text-4xl text-end text-white font-semibold'>Wireless<br /> Headphones</h1>
        <button className='bg-purple-400 hover:bg-yellow-500 px-6 py-3 border rounded-lg text-white font-semibold mt-[60px]'> SHOP NOW</button>
        
      


      </div>
      <div data-aos="zoom.in" data-aos-delay="100" className='flex flex-col
      justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' 
       style={{ backgroundImage: `url(${banner2})` }}>
        <h1 className='bg-yellow-400 hover:bg-purple-500 px-6 py-3 border rounded-lg text-white font-semibold mt-[60px]'> 70%OFF</h1>
        <h1 className='text-4xl text-end text-white font-semibold'>Wired<br /> Headphones</h1>
        <button className='bg-purple-400 hover:bg-yellow-500 px-6 py-3 border rounded-lg text-white font-semibold mt-[60px]'> SHOP NOW</button>
        
      


      </div>
      <div data-aos="zoom.in" data-aos-delay="100" className='flex flex-col
      justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' 
       style={{ backgroundImage: `url(${banner3})` }}>
        <h1 className='bg-yellow-400 hover:bg-purple-500 px-6 py-3 border rounded-lg text-white font-semibold mt-[60px]'> 50%OFF</h1>
        <h1 className='text-4xl text-end text-white font-semibold'>Smart<br /> Watches</h1>
        <button className='bg-purple-400 hover:bg-yellow-500 px-6 py-3 border rounded-lg text-white font-semibold mt-[60px]'> SHOP NOW</button>
        
      


      </div>
      
    </div>
  )
}

export default Types
