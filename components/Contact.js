import { React, useRef, useState } from 'react'
function Contact() {
    const form = useRef();
    const [submit, setSubmit] = useState("")
    const [sub, setSub] = useState(false)
    const [error, setError] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const sendEmail = async (e) => {
        e.preventDefault();
        const contentType = "application/json";
        let contact = {
            name,
            email,
            message
        };
        let response = await fetch("https://subhabrata.vercel.app/api/contact", {
            method: "POST",
            headers: {
                Accept: contentType,
                "Content-Type": contentType,
            },
            body: JSON.stringify(contact),
        });
        let dataa = await response.json();

        if (dataa.success) {
            setName("");
            setEmail("");
            setMessage("");
            setSubmit(dataa.message)
            setError(false)
            setSub(true)
            setTimeout(() => {
                setSub(false)
            }, 3000)
        } else {

            return (
                setError(true),
                setSubmit(dataa.message),
                setSub(true),
                setTimeout(() => {
                    setSub(false)
                }, 3000)
            )
        }

    };

    return (
        <div className='contact' id='Contact'>
            <div className="left">
                <span>Get in Touch</span>
                <span>Contact Me</span>
                <div
                    className="blur s-blur1"
                    style={{ background: "#ABF1FF94", left: '-2rem' }}
                ></div>
            </div>
            <div className="right">
                <form onSubmit={sendEmail} ref={form} >
                    <input className='form' value={email} required={true} onChange={(e) => setEmail(e.target.value)} name='user_email' placeholder='Email' />
                    <input className='form' value={name} required={true} onChange={(e) => setName(e.target.value)} name='user_name' placeholder='Name' />
                    <textarea className='form textarea' required={true} value={message} onChange={(e) => setMessage(e.target.value)} name='message' placeholder='Message' />
                    <div>

                        <input style={{ marginLeft: '5rem' }} type='submit' value='send' className='button' />
                    </div>

                    <div style={{ marginTop: '1rem' }}>{
                        sub ? <span style={error ? { color: "red" } : { color: 'green' }}>{submit}</span> : ''
                    }</div>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)", left: '1rem',top:'1rem' }}
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
                height:15rem;
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