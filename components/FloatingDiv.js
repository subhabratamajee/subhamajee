import React from 'react'
import Image from 'next/image'

function floatingDiv({image,height,width,txt1,txt2}) {
  return (
 <div className="floating">
     <Image width={height} height={width} src={image} alt="" />
     <span>{txt1} <br/>{txt2}</span>

     <style>{`
     .floating{
       justify-content:space-around;
       display:flex;
       background:white;
       box-shadow: var(--boxShadow);
       border-radius:17px;
       align-items:center;
       height:4.5rem;
       width:auto;
       padding:0 1rem;
     }
     span{
       padding-left:1rem;
     }
     `}</style>
 </div>
  )
}

export default floatingDiv