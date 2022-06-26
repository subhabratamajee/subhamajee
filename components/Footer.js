import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
function Footer() {
    return (
        <div className='footer' style={{ marginTop: "5rem" }}>
            <div className='svg'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff4200" fillOpacity=".9" d="M0,160L80,138.7C160,117,320,75,480,74.7C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" ></path></svg>
            </div>
            <div className='main'>
                <div className="texts">jhs1941jhs@gmail.com</div>
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
    position:relative;
    width:auto;
    // height:20rem;
    // display:flex;
}
.svg{
    // position:absolute;
}
.main{
    color:white;
    display:flex;
    flex-direction:column;
    position:absolute;
    top:6rem;
    left:16rem;
    gap:1rem;
    align-items:center;
    justify-content:center;
}
.texts{
    font-size:2rem;
    // position:absolute;
}
.icons{
    display: flex;
    flex-direction:row;
    gap:1rem;
    // justify-content:space-between;
}
.icon{
    // padding:1rem; 
    // height:6rem;
    // width:4rem;
   font-size:2rem;
}
`}</style>
        </div>
    )
}

export default Footer