import React, { useEffect } from 'react'
import payment from '../assets/payment.png'
import shipping from '../assets/shipping.png'
import gift from '../assets/gift.png'
import refund from '../assets/return.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
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
    <div className='w-full lg:px-20 px-5 pt-[0px] pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center
    items-center gap-10'>
      <div data-aos="zoom-in" data-aos-delay='100'className="flex flex-col justify-center items-center gap-2">
        <img src={shipping} alt='' className='mb-[20px] w-[60px]' />
        <h1 className='text-xl text-black font-semibold'> Worldwide Shipping</h1>
        <p className='text-[17px] text-gray-500'>We deliver your favorite products to over 100+ countries, ensuring fast and reliable worldwide shipping at your doorstep.</p>

      </div>
      <div data-aos="zoom-in" data-aos-delay='100'className="flex flex-col justify-center items-center gap-2">
        <img src={payment} alt='' className='mb-[20px] w-[60px]' />
        <h1 className='text-xl text-black font-semibold'> Payment</h1>
        <p className='text-[17px] text-gray-500'>Enjoy secure online payments with all major cards and UPI, or choose convenient cash on delivery for a hassle-free shopping experience </p>

      </div>
      <div data-aos="zoom-in" data-aos-delay='100'className="flex flex-col justify-center items-center gap-2">
        <img src={gift} alt='' className='mb-[20px] w-[60px]' />
        <h1 className='text-xl text-black font-semibold'> Gifts</h1>
        <p className='text-[17px] text-gray-500'>Make every order special with exclusive gift wrapping and personalized notes—perfect for surprising your loved ones. </p>

      </div>
      <div data-aos="zoom-in" data-aos-delay='100'className="flex flex-col justify-center items-center gap-2">
        <img src={refund} alt='' className='mb-[20px] w-[60px]' />
        <h1 className='text-xl text-black font-semibold'> Refund</h1>
        <p className='text-[17px] text-gray-500'>Shop with confidence! If you’re not satisfied, we offer easy returns and quick refunds with no hidden conditions.</p>

      </div>
    </div>
  )
}

export default Services
