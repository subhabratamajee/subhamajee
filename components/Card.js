import React from 'react'
import Image from 'next/image'
function Card({ image, heading, details }) {
    return (
        <div className='card'>
            <Image className='img' src={image} height='200' width='300' alt='image' />
            <span>{heading}</span>
            <span>{details}</span>
            <button className='card-button'>Learn More</button>
            <style jsx>{`
        .card{
            width:11rem;
            height:13rem;
            positopn:relative;
            display:flex;
            gap:.5rem;
            align-items:center;
            text-align:center;
            flex-direction:column;
            border:7px solid var(--orangeCard);
            background:rgba(255,255,255,.26);
            border-radius:20px;
            box-shadow:var(--boxShadow);
            padding:1rem 16px 1rem 16px;
        }
        .card span:nth-of-type(3){
            color:var(--gray);
            font-size:16px;
        }
        .card .img{
            margin-top:19rem;
            transform: scale(5);
        }
        .card-button{
            background:#fff;
            color:#13f;
            border:none;
            padding:.2rem;
            box-shadow:var(--smboxShadow);
            border-radius:5px;
            font-size:16px
        }
        @media screen and (max-width:480px) {
            .card{
                height:auto;
                width:90vw;
            }
        }
        `}</style>
        </div>
    )
}

export default Card