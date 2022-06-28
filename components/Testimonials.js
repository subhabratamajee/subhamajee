import React from 'react'
import pp from '../public/profile1.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
function Testimonials() {
    const clients = [
        {
            img: pp,
            review: "this is the very good website, He is a genious Person , i have ever seen ,My era"
        },
        {
            img: pp,
            review: "this is the very good website, He is a genious Pefjjgskjhkhkrson , i have ever seen ,My era"
        },
        {
            img: pp,
            review: "Tsjajhdjhhjahis is the very good website, He is a genious Person , i have ever seen ,My era"
        },
        {
            img: pp,
            review: "tnffvmcvnvncvvhis is the very good website, He is a genious Person , i have ever seen ,My era"
        }
    ]
    return (
        <div className='testimonials' id='Testimonials'>
            <div className="heading">
            <div className="blur" style={{ background: "lightblue" ,left:'1rem'}}></div>
                <span>Clients always get </span>
                <span>Exceptional Work</span>
                <span>From me</span>
            </div>
            <div className="right">

             <Carousel showThumbs={false}  >
                {clients.map((client, index) => {
                    return (
                        <div style={{
                            flexDirection:'column',
                            justifyContent:'space-evenly',
                            alignItems:'center',
                            padding:'1rem',
                            width:'36rem',
                            height:'12rem',
                            marginRight:'-15rem',
                            // left:'400rem',
                            width:'20rem',
                            background:'rgba(255,255,255,0.26)',
                            border:'7px solid var(--blueCard)',
                            boxShadow:'var(--boxShadow)',
                            borderRadius:'20px'}} className='carousel-item'  key={index}>
                        <Image style={{borderRadius:'50%',right:'40rem'}} className='img' height={100} width={100} src={client.img} alt='abc' />
                      
                                <span>{client.review}</span>
                        </div>
                    )
                })}
                </Carousel>
                </div>
            <style jsx>
                {`
                .testimonials{
                    padding: 0 3rem;
                    height:20rem;
                    margin-top:5rem;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    position:relative;
                    gap:2rem;
                }
                .heading{
                    align-self:start;

                }
                .heading>*{
                    font-size:2rem;
                    font-weight:bold;
                }
                .heading span:nth-child(2){
                    color:var(--orange);
                }
                .test{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-evenly;
                    align-items:center;
                    padding:2rem;
                    width:30rem;
                    height:12rem;
                    background:rgba(255,255,255,0.26);
                    border:7px solid var(--blueCard);
                    box-shadow:var(--boxShadow);
                    border-radius:20px;
                }
              .test>span{
color:var(--gray)
              }
              .testimonials .swiper{
                width:100%;
                height:70%;
              }
              .testimonials .swiper-slide{
                display:flex;
                align-items:center;
                justify-content:center;
              }
              .testimonials .swiper-pagination-bullet-active{
                background: var(--orange);
            }
            @media screen and (max-width:480px) {
                .testimonials{
                    height:25rem;
                }
            }
            @media screen and (max-width:412px) {
                .right{
                    // height:25rem;
                    transform:scale(.8);
                    left:5rem;
                }
            }
                `}
            </style>
        </div>
    )
}

export default Testimonials