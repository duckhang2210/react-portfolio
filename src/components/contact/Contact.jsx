import { useRef, useState, useContext } from 'react'
import emailjs from 'emailjs-com';

import './contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import LinkedIn from "../../img/linked2.png"
import Github from "../../img/Octocat.png"
import Resume from "../../img/resume.png"
import { ThemeContext } from '../../context';

function Contact() {

    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm(
            'service_2nm37vf',
            'template_a3ntdpi', 
            formRef.current, 
            'user_LjPzaJa81jiROkhkCzi8b')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss business</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            <a href='tel:+1713-277-8137'>713-277-8137</a>
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            <a href='mailto:duckhang2210@gmail.com'>duckhang2210@gmail.com</a>
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Resume} alt="" />
                            <a href="../../../public/Duc-Nguyen-Resume.pdf" download="Resume-DucNguyen.pdf">Download Resume</a>
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={LinkedIn} alt="" />
                            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/duc-khang-nguyen-606b62128/'>LinkedIn</a>
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Github} alt="" />
                            <a target='_blank' rel='noreferrer' href='https://github.com/duckhang2210'>Github</a>
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                                Remote / Houston, Texas
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b> Get in touch. Always available for
                        freelancing if the right project comes along.</b>
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && 'rgb(231 231 231)', color: darkMode && '#08454e'}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && 'rgb(231 231 231)',  color: darkMode && '#08454e'}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && 'rgb(231 231 231)',  color: darkMode && '#08454e'}} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && 'rgb(231 231 231)',  color: darkMode && '#08454e'}} name="message" rows="5" placeholder='Message' />
                        <button>Submit</button>
                        {done && <p>Thank You for Your Email. I'll respond within a day.</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
