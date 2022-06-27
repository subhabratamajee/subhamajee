import {React,useRef,useState} from 'react'
import emailjs from '@emailjs/browser'
function Contact() {
    const form =useRef();
    const [submit, setSubmit] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_t08e76t",
            "template_9l3nj1e",
            form.current,
            "c_Q9r2VtbTbtMHInsfhgF"
          )
          .then(
            (result) => {
              console.log(result.text);
              setSubmit(true);
              form.reset();
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
    
  return (
    <div className='contact' id='Contact'>
        <div className="left">
            <span>Get in Touch</span>
            <span>Contact Me</span>
            <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94",left:'-2rem' }}
          ></div>
        </div>
        <div className="right">
            <form onSubmit={sendEmail} ref={form} >
                <input className='form' name='user_email' placeholder='Email' />
                <input className='form' name='user_name' placeholder='Name' />
                <textarea className='form textarea' name='message' placeholder='Message'/>
                <input style={{marginLeft:'5rem'}} type='submit' value='send' className='button'/>
                <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" ,left:'1rem'}}
          ></div>
            </form>
        </div>
        <style jsx>
            {`
            .contact{
                display:flex;
                padding:0 1rem;
                position:relative;
                align-items:center;
            }
            .left{
                flex:1;
                position:relative;
                display:flex;
                flex-direction:column;
               
            }
                .left>*{
                    font-size:2rem;
                }
.left>:nth-child(1){
    color:var(--black);
}
.left>:nth-child(2){
    color:var(--orange)
}
    .right{
        flex:1;
        position:relative;
        display:flex;
        flex-direction:column;
        gap:2rem;
        align-items:center;
        justify-content:center;
    }  
    .right>*{
        dispaly:flex;
        flex-direction:column;
        // margin:1rem ;
        align-items:center;
        justify-content:center;
  
    }
    .right>form{
        align-items:center;
        justify-content:center; 
    } 
    .form{
        margin:1rem;
        border:2px solid var(--orange);
        border-radius:5px;
        height:2rem;
        align-items:center;
    } 
    .textarea{
        height:3rem!important;
    }    

    @media screen and (max-width:480px) {
        .contact{
            flex-direction:column
        }
    }
            `}
        </style>
    </div>
  )
}

export default Contact