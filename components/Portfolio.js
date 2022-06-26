import React from 'react'
import Image from 'next/image'
import 'swiper/css';
import rkmgec from '../public/Screenshot 2022-06-25 124659.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
function Portfolio() {
  return (
    <div className='portfolio' id='Portfolio'>
<span> My Recents Projects</span>
<span>Portfolio</span>
<div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
<Swiper 
spaceBetween={30}
slidesPerView={3}
grabCursor={true}
className='portfolio-slider'>
     {/* <SwiperSlide > <Image height={180} width={300} src={rkmgec} alt='abc'/>
            <span>abccc</span>
            </SwiperSlide>
     <SwiperSlide > <Image height={180} width={300} src={rkmgec} alt='abc'/>
            <span>abccc</span>
            </SwiperSlide>
     <SwiperSlide > <Image height={180} width={300} src={rkmgec} alt='abc'/>
            <span>abccc</span>
            </SwiperSlide>
     <SwiperSlide > <Image height={180} width={300} src={rkmgec} alt='abc'/>
            <span>abccc</span>
            </SwiperSlide> */}
    
</Swiper>
<style jsx>
    {`
    .portfolio{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .portfolio>:nth-child(1){
        color:var(--black);
        font-weight:bold;
        font-size:25px;
    }
    .portfolio>:nth-child(2){
        font-weight:bold;
        color:var(--orange);
        font-size:30px;
    }
    .portfolio .swiper{
        overflow:visible!important;
    }
    .portfolio-slider{
     margin-top:3rem;
     width:100%;

    }
    .swiper-slide{
        width:20rem;
        border-radius:50%;
    }
    .img{
filter:drop-shadow(-12px 15px 13px rgba(0,0,0,0.25));
border-radius:20px;
    }
    `}
</style>
    </div>
  )
}

export default Portfolio