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
        </div>
        <div className="right">
            <form onSubmit={sendEmail} ref={form} >
                <input className='form' name='user_email' placeholder='Email' />
                <input className='form' name='user_name' placeholder='Name' />
                <textarea className='form textarea' name='message' placeholder='Message'/>
                <button type='submit' className='button'>Send</button>
            </form>
        </div>
        <style jsx>
            {`
            .contact{
                display:flex;
                padding:0 1rem;
                position:relative;
            }
            .left{
                flex:1;
                // position:absolute;
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
        position:absolute;
        margin:1rem ;
  
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