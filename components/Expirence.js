import React from 'react'

function Expirence() {
  return (
    <div className='expirence' id='Experience'>
        <div className="achievement">
            <div className="circle">2+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">2+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">2+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <style jsx>{`
        .expirence{
display:flex;
justify-content:center;
align-items:center;
gap:1rem;
height:30vh;
margin-bottom:8rem
        }
        .achievement{
            display:flex;
            flex-direction:column;
            align-items:center;
        }
        .circle{
            // border:3px solid linear-gradient( to bottom,rgb(11, 219, 247) 0%,rgb(241, 163, 16) 100%);
            border-radius:50%;
            height:4rem;
            width:4rem;
            align-items:center;
            display:flex;
            justify-content:center;
            // padding:.5rem;
            font-weight:bold;
            font-size:2.5rem;
            position:relative;
            background:#fff;
            margin-bottom:1rem;
        }
        .circle::before{
            border-radius:50%;
            content:'';
            background-image:linear-gradient( to bottom,rgb(11, 219, 247) 0%,rgb(241, 163, 16) 100%);
            // background-color:red;
            top:-8px;
            bottom:-8px;
            left:-8px;
            right:-8px;
            position:absolute;
            z-index:-1;
        }
        .achievement>:nth-child(3){
            color:var(--orange);
        }
        @media screen and (max-width:480px) {
            .expirence{
                // padding:0;
                height:1rem;
            }
        }
        @media screen and (max-width:370px) {
            .expirence{
                margin-left:.5rem;
                transform:scale(.8);
                height:3rem;
            }
        }
        `}</style>
    </div>
  )
}

export default Expirence