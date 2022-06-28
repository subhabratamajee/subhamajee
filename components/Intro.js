import React from 'react'
import { motion } from "framer-motion"
import FloatingDiv from './FloatingDiv'
import styles from '../styles/Intro.module.css'
import bg1 from '../public/Vector1.png'
import bg2 from '../public/Vector2.png'
import me from '../public/WhatsApp_Image_2022-06-17_at_4.37.51_PM-removebg-preview (1).png'
import batch from '../public/crown.png'
import emoji from '../public/glassesimoji.png'
import Image from 'next/image'
import Link from 'next/link'
// import {Link} from 'react-scroll'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
function Intro() {
    const transition = { duration: 5, type: "spring" }
    return (
        <div className={styles.intro}>
            <div className={styles.ileft}>
                <div className={styles.iname}><span>Hy! I Am</span> <span>Subhabrata Majee</span><span>Web Devloper with high level of experience in web designing and devlopment, producting the Quality Work...</span></div>
                <Link href='#Contact' passHref>
                <button className='button ibutton'>Hire Me</button>
                </Link>
                <div className={styles.iicons}>
                    <Link href='https://www.linkedin.com/in/subhabrata-majee/' passHref><AiOutlineLinkedin /></Link>
                    <Link href='https://github.com/subhabratamajee' passHref><AiOutlineGithub /></Link>
                    <Link href='https://www.instagram.com/subhabratamajeeprabir/' passHref><AiOutlineInstagram /></Link>
                </div>
            </div>
            <div className={styles.iright}>
                
                <div>
                    <Image height={400} width={300} src={bg1} alt="" />
                </div>
                <div>
                    <Image height={400} width={300} src={bg2} alt="" />
                </div>

                <div>
                    <Image height={400} width={300} src={me} alt="" />
                    
                </div>
                <div className="blur" style={{ background: "skyblue",zIndex:'100',top:'15rem' }}></div>
                <div className="blur" style={{ background: "perple",zIndex:'-1',top:'-5rem', left:'5rem' }}></div>
                <motion.div
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-10%" }}
                    transition={{ transition }}
                >
                    <Image height={100} width={100} src={emoji} alt="" />
                </motion.div>
                <motion.div
                initial={{left:'50%'}}
                whileInView={{left:'35%'}}
                transition={{transition}}
                className={styles.float} >
                    <FloatingDiv style={{zIndex:'101'}} image={batch} height={80} width={80} txt1="Web" txt2="Devlopment" />
                
                </motion.div>
                <motion.div
                initial={{top:'65%',left:'-20%'}}
                whileInView={{left:'-10%'}}
                transition={{transition}}
                style={{ top: '65%', left: '-20%'}} >
                    <FloatingDiv image={batch} height={80} width={80} txt1="Machine" txt2="Learning" />
                </motion.div>
            </div>
        </div>
    )
}

export default Intro