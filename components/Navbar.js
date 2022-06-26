import React from 'react'
import styles from '../styles/Navbar.module.css'
import {Link} from 'react-scroll'
function Navbar() {
    return (
        <div className={styles.nav}>
            <div className={styles.navleft}>
                <div className={styles.name}>Subhabrata</div>
                {/* <span>toggle</span> */}
                <div className="toggle">
toggle
                </div>
            </div>
            <div className={styles.navright}>
                <div className={styles.navlist}>
                    <ul className={styles.ul}>
                        <Link spy={true} smooth={true} to='Navbar' activeClass='activeclass'>
                        <li className={styles.li}>Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Services'>
                        <li className={styles.li}>Services</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Experience">
                        <li className={styles.li}>Experience</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Portfolio">
                        <li className={styles.li}>Portfolio</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Testimonials">
                        <li className={styles.li}>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} smooth={true} to="Contact">
                <button className=' navbutton button'>
                    contact
                </button>
                </Link>
            </div>
            <style jsx>{`
                .navbutton{
                    flex:6;
                }`}
            </style>
        </div>
    )
}

export default Navbar