import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
function Footer() {
    return (
        <div className='footer' style={{ marginTop: "12rem" }}>
            <div className='svg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff4200" fillOpacity=".9" d="M0,160L80,138.7C160,117,320,75,480,74.7C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" ></path></svg>
            </div>
            <div className='main'>
                <div className="texts"><span style={{fontWeight:'bolder'}}>Email : </span>jhs1941jhs@gmail.com</div>
                <div className="icons">
                    <div className="icon">
                        <FaFacebookF />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn className="icon" />
                    </div>
                    <div className="icon">
                        <FaGithub className="icon" />
                    </div>
                </div>
            </div>
            <style jsx>{`
.footer{
    display:flex;
    margin: -7rem -3.5rem -0.5rem;
    position: relative;
    align-items:center;
    justify-content:center;
}
.svg{
    width:100%;
    position:absolute;
}
.main{
    position:absolute;
    color:white;
    display:flex;
    flex-direction:column;
    position:absolute;
    top:1rem;
    // gap:1rem;
    align-items:center;
    justify-content:center;
}
.texts{
    font-size:2rem;
}
.icons{
    display: flex;
    flex-direction:row;
    gap:1rem;
}
.icon{
   font-size:2rem;
}
@media screen and (max-width:480px) {
.main{
    top:-1rem;
}
.texts{
    font-size:
        1rem;
}
}
`}</style>
        </div>
    )
}

export default Footer