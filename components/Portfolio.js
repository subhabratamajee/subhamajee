import React from 'react'
import Image from 'next/image'
import rkmgec from '../public/Screenshot 2022-06-25 124659.jpg'
import ECE from '../public/Screenshot 2022-06-25 124832.jpg'
import RIC from '../public/Screenshot 2022-06-25 124935.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function Portfolio() {
    return (
        <div className='portfolio' id='Portfolio' >
            <span> My Recents Projects</span>
            <span>Portfolio</span>
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <Carousel showThumbs={false}>
                <div className='carousel-item active'>
                    <Image style={{ borderRadius: '10px' }} height={180} width={300} src={rkmgec} alt='abc' />
                    <p style={{
                        marginLeft: '-24%',
                        width: '48%', bottom: '2px',
                        background:'var(--orange)'
                    }} className="legend">RKMGEC</p>

                </div >
                <div className='carousel-item active'>
                    <Image style={{ borderRadius: '10px' }} height={180} width={300} src={ECE} alt='abc' />
                    <p style={{
                        marginLeft: '-24%',
                        width: '48%', bottom: '2px',
                        background:'var(--orange)'
                    }} className="legend">ECE CERTIFICATE</p>
                </div>
                <div>
                    <Image style={{ borderRadius: '10px' }} height={180} width={300} src={RIC} alt='abc' />
                    <p style={{
                        marginLeft: '-24%',
                        width: '48%', bottom: '2px',
                        background:'var(--orange)'
                    }} className="legend">RIC MEMBERS</p>

                </div>
                <div>
                    <Image style={{ borderRadius: '10px' }} height={180} width={300} src={rkmgec} alt='abc' />
                    <p style={{
                        marginLeft: '-24%',
                        width: '48%', bottom: '2px',
                        background:'var(--orange)'
                    }} className="legend">RKMGEC</p>

                </div>
                <div>
                    <Image style={{ borderRadius: '10px' }} height={180} width={300} src={rkmgec} alt='abc' />
                    <p style={{
                        marginLeft: '-24%',
                        width: '48%', bottom: '2px',
                        background:'var(--orange)'
                    }} className="legend">RKMGEC</p>

                </div>
            </Carousel>
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
    @media screen and (max-width:480px) {
        .portfolio{
            height:10rem;
            margin-top:12rem
        }
    }
    `}
            </style>
        </div>
    )
}

export default Portfolio