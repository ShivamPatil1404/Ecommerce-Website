import React, { useEffect } from 'react'
import { FaStar, FaRegHeart } from 'react-icons/fa'
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Productgrid() {
  
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
    <div>
      
    </div>



  )
}

export default Productgrid
