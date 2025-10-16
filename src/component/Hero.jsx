import React, { useEffect } from 'react';
import Slider from "react-slick";

import headset from '../assets/headset.jpg';
import earbuds from '../assets/earbuds.jpg';
import dslr from '../assets/dslr.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {

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
    <div id='hero' className='w-full flex justify-center items-center lg:h-[700px] h-[600px]'>
      <Slider className='w-full' {...settings}>
        
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${dslr})` }}
          >
             
            <h1 
  style={{ color: "#FFD700", borderColor: "#FFD700" }}
  className="border rounded-lg px-6 py-2 text-xl"
>
  Get upto Discount 40%Off on DSLR.
</h1>
            
            <h1  className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'> 
              Sony 360<br></br> Camera</h1>
              <h1 className='text-white text-2xl'> Full Trusted <span className='text-themeyellow font-semibold'> Electronic Products</span></h1>
              <button className='bg-yellow-400 hover:bg-purple-500 px-6 py-3 border rounded-lg text-black font-semibold'> Explore here</button>
          </div>
        </div>

      
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${headset})` }}
          >
            
            <h1 
  style={{ color: "#FFD700", borderColor: "#FFD700" }}
  className="border rounded-lg px-6 py-2 text-xl"
>
  Get upto Discounts 50% Off on Headsets.
</h1>
            
            <h1  className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'> 
              Boat air141<br></br> Headset</h1>
              <h1 className='text-white text-2xl'> Full Trusted <span className='text-themeyellow font-semibold'> Electronic Products</span></h1>
              <button className='bg-yellow-400 hover:bg-purple-500 px-6 py-3 border rounded-lg text-black font-semibold'> Explore here</button>

          </div>
        </div>

       
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${earbuds})` }}
          >
      
            <h1 
  style={{ color: "#FFD700", borderColor: "#FFD700" }}
  className="border rounded-lg px-6 py-2 text-xl"
>
  Get upto Discounts 60% Off on earbuds.
</h1>
            <h1  className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'> 
              Noice airbuds<br></br> Airbuds</h1>
              <h1 className='text-white text-2xl'> Full Trusted <span className='text-themeyellow font-semibold'> Electronic Products</span></h1>
              <button className='bg-yellow-400 hover:bg-purple-500 px-6 py-3 border rounded-lg text-black font-semibold'> Explore here</button>
          </div>
          
        </div>

      </Slider>
    </div>
  );
}

export default Hero;