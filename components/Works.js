import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles/Intro.module.css'
import facebook from '../public/Facebook.png'
import amazone from '../public/amazon.png'
import fiverr from '../public/fiverr.png'
function Works() {
    return (
        <>
            <div className='works'>
                <div className={styles.ileft}>
                    <div className={styles.iname}><span>Works for All these</span> <span>Brands & Clients </span><span>Lorem ipsum dolor sit amet.<br />Lorem ipsum dolor sit amet.</span></div>
                    <button className='button w-button'>Hire Me</button>
                </div>
                <div
                    
                    className="w-right">
                    <motion.div
                          initial={{ rotate: 45 }}
                      whileInView={{ rotate: 0 }}
                      viewport={{ margin: "100px" }}
                      
                      transition={{ duration:2, type: "spring" }}
                      style={{top:'3rem',left:'-5rem'}}
                      className='set'
                    >
                        <div
                            className="main-circle">
                            <div className="s-circle"><Image className='img' src={facebook} alt='fb' height={100} width={100} /></div>
                            <div className="s-circle"><Image className='img' src={facebook} alt='fb' height={100} width={100} /></div>
                            <div className="s-circle"><Image className='img' src={facebook} alt='fb' height={100} width={100} /></div>
                            <div className="s-circle"><Image className='img' src={amazone} alt='fb' height={100} width={100} /></div>
                            <div className="s-circle"><Image className='img' src={fiverr} alt='fb' height={80} width={80} /></div>
                        </div>
                    </motion.div>
                    <div className="">
                        <div className="bg-circle bg-blue"></div>
                        <div className="bg-circle bg-yellow"></div>
                    </div>

                </div>

            </div>
            <style jsx>{`
                .works{
padding:0 1rem;
display:flex;
height:90vh;
margin-top:4rem;}
.w-right{
position:relative;
top:3rem;
left:-5rem;
}
.w-button{
width:
    10rem;

}
.main-circle{
    position:relative;
    background-color:white;
    width:18rem;
    height:18rem;
    box-shadow:var(--smboxShadow);
    border-radius:50%;
}

.main-circle>*{
position:absolute;
}
.main-circle>:nth-child(1){
    left:6rem;
    top:-2rem;
}
.main-circle>:nth-child(2){
    left:6rem;
    top:15rem;
}
.main-circle>:nth-child(3){
    left:-3rem;
    top:6rem;
}
.main-circle>:nth-child(4){
    left:6rem;
    top:6rem;
}
.main-circle>:nth-child(5){
    left:15rem;
    top:6rem;
}
.s-circle{
    padding:.5rem;
    height:6rem;
    width:6rem;
    border:3px solid #ebebeb;
    background:white;
    border-radius:50%;
    box-shadow:var(--smboxShadow);
}
.img{
    
    transform: scale(.89);
}
.bg-circle{
    height:10rem;
    width:10rem;
    border-radius:50%;
    position:absolute;
    z-index:-1;
}
.bg-blue{
    top:2rem;
    left:11rem;
    background:rgb(16, 13, 224);
}

.bg-yellow{
    top:6rem;
    left:11rem;
    background:rgb(243, 194, 33);
}

@media screen and (max-width:480px) {
    .works{
        padding:0;
        flex-direction:column;
        height:30rem;
        margin-top:0;
    }
    .w-right{
        transform:scale(.8);
        left:1rem;
    }
}
@media screen and (max-width:412px) {
    .works{
        height:23rem;
    }
    .w-right{
        margin-top:-2rem;
        transform:scale(.6);
        left:0rem;
    }
    // .left > :nth-child(2) {
    //     font-size: 2.5rem;
    //   }
    //   .left > :nth-child(1) {
    //     font-size: 2.5rem;
    //   }
}

                `}</style>
        </>
    )
}

export default Works