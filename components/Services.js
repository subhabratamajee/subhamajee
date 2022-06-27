import React from 'react'
import Card from './Card'
import image from '../public/glassesimoji.png'
import { motion } from "framer-motion"
import subhabrata from '../public/boy.png'
import Link from 'next/link'
function Services() {
    const transition = { duration: 5, type: "spring" }
    return (
        <div id='Services' className='services'>
            <div className="left">
                <span>
                    My Awesome
                </span>
                <span>
                    Services
                </span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci quia
                    <br />voluptatibus vel tempore fugit iure neque, autem rem provident.</span>
                    <Link  href={subhabrata}  download>
                    <a >
                    <button className='button s-button'>Download CV</button>
                    </a></Link>
               
                <div className='blur' style={{background:"lightblue"}}></div>
            </div>
            <div className="right" >
                <motion.div
                                initial={{left:"25rem"}} whileInView={{left:"14rem"}} transition={{transition}}
                                className='box' >
                    
                <Card  image={image} heading={"UI designer"} details={'Photoshop Canva Figma Designer'}/>
                
                </motion.div>

                {/* <div style={{left:'-4rem',top:'12rem'}} > */}
                <motion.div
                 initial={{ left: "-11rem", top: "12rem" }}
                 whileInView={{ left: "-4rem" }}
                 transition={transition}

                >
                <Card  image={image} heading={"Devloper"} details={'Html, Css,JavaScript, React,  Next Js'}/>
                </motion.div>
                {/* </div> */}
                <div style={{position:'relative'}} className='box' >
                <Card  image={image} heading={"UI/UX"} details={'Photoshop Canva Figma Designer'}/>
                </div>
            
            </div><style jsx>
                {`
    .services{
        display:flex;
        padding:0 1rem;
        height:90vh;
        margin-top:8rem;
        margin-bottom:9rem;
    }
    .left{
        display:flex;
        flex-direction:column;
        position:relative;
    }
    .left>:nth-child(1){
        color:var(--black);
        font-size:3rem;
        font-weight:bold;
    }
    .left>:nth-child(2){
        color:var(--orange);
        font-size:3rem;
        font-weight:bold;
    }
    .left>:nth-child(3){
        color:var(--gray);
        font-size:1rem;
        margin:1rem 0;
    }
    .s-button{
        width:8rem;
        margin-left:1rem;
    }

    .right{
        position: relative;
    }
    .right>*{
        // display:flex;
        position: absolute;
    }
.box{
    position:relative;
}
    @media screen and (max-width:480px) {
        .services{
            margin-top:0;
            flex-direction:column;
            gap:2rem;
            height:70rem;
            padding:0;
        }
        .right{
            display:flex;
            flex-direction:column;
            gap:2rem;
        }
        .right>*{
            position:static;
        }
        .left > :nth-child(2) {
            font-size: 2.5rem;
          }
          .left > :nth-child(1) {
            font-size: 2.5rem;
          }
    }


    `}
            </style>
        </div>
    )
}

export default Services