import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import NewsLetterBlock from '../components/NewsLetterBlock';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '' });


  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Submitted:', formData);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    };

  return (
    <>
  <div className="container-fluid pageBanner position-relative p-0 mt-0">
        <img src="/banner9.png" alt="banner organic shop" className="pageBanner" />
          <h2 className="bannerTitle">Contact Us</h2>
  </div>
    
<div className="contactSecondBlock">
  <div className="firstSectionContact d-flex flex-row justify-content-between">
    <div className=''>
         <img src="/image39.png" alt="Fruits image" />
    </div>
    <div className=' firstRightPart ms-5'>
        <h3 className='mainText contactTitle'>
              We'd love to talk about how we <br />
              can work together.
        </h3>
        <p className="simpleText">
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br />
              been the industry's standard dummy text ever since the 1500s, when an unknown <br />printer took a galley.
        </p>
      <div className="iconWrap bg-white">
        <div className="d-flex flex-row align-items-center gap-2 contactCard ">
              <FontAwesomeIcon icon={faEnvelope} className="textTop p-3 contactIcon " />
          <div className='py-3'>
              <p className="text-primary-emphasis m-0">
                     Messege
               </p>
              <span>support@organic.com</span>
          </div>
        </div>
          <div className="d-flex flex-row align-items-center gap-2 contactCard">
                  <FontAwesomeIcon icon={faPhone} className="textTop p-3 contactIcon" />
                <div>
                    <p className="text-primary-emphasis m-0">
                        Contact Us
                     </p>
                  <span>+01 123 456 789</span>
              </div>
          </div>
      </div>
    <div className="icons d-flex flex-row justify-content-start">
          <ul className="list-unstyled d-flex">
              <li key="instagram-icon" className='iconBack'>
                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='socIcon'>
                         <FontAwesomeIcon icon={faInstagram} />
                      </a>
             </li>
              <li key="facebook-icon" className='iconBack'>
                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='socIcon'>
                         <FontAwesomeIcon icon={faFacebook} />
                      </a>
              </li>
              <li key="twitter-icon"className='iconBack'>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"  className='socIcon' >
                          <FontAwesomeIcon icon={faTwitter} />
                      </a>
              </li>
              <li key="pinterest-icon" className='iconBack '>
                      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"  className='socIcon'>
                          <FontAwesomeIcon icon={faPinterest} />
                      </a>
              </li>
       
          </ul>
     </div>
   </div>
 </div>
      <div className="secondSectionContact">
            <img src="/image40.png" alt="Leaf macro photo" />
      <div className="location">
    <h4 className="textTop">Location</h4>
    <h3 className='mainTitle contactTitle'>Our Farms</h3>
    <p>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</p>
  <div className="d-flex flex-row align-items-center gap-2 contactCard w-100 ">
              <FontAwesomeIcon icon={faLocationDot} className="textTop p-3 contactIcon " />
        <div className=''>
                <p className="simpleText m-0">
                    <span >
                         New York, USA:
                    </span><br />
                       299 Park Avenue New York,
                       New York 10171
                </p>
          </div>
   </div>
        <div className="d-flex flex-row align-items-center gap-2 contactCard w-100 ">
              <FontAwesomeIcon icon={faLocationDot} className="textTop p-3 contactIcon " />
          <div className=''>
                <p className="simpleText m-0">
                    <span>  London, UK: </span><br />
                      30 Stamford Street,
                      London SE1 9LQ
                </p>
          </div>
          </div>
      </div>
   </div>
  <div className="thirdSectionContact">
       <form onSubmit={handleSubmit} className="contactForm d-flex flex-row justify-content-between flex-wrap">
            <div className="mb-4 me-3 inputWrap">
              <label htmlFor="name" className="form-label">Full Name*</label>
              <input type="text" placeholder='Your Full Name' className="form-control rounded-4 border-success-subtle p-3" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-4 inputWrap">
              <label htmlFor="email" className="form-label">Your Email*</label>
              <input type="email" placeholder='example@yourmail.com' className="form-control rounded-4 border-success-subtle p-3" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-4 me-3 inputWrap">
              <label htmlFor="company" className="form-label">Company*</label>
              <input type="text" placeholder='yourcompany name here' className="form-control rounded-4 border-success-subtle p-3" id="company" name="company" value={formData.company} onChange={handleChange} required />
            </div>
            <div className="mb-4 inputWrap">
              <label htmlFor="subject" className="form-label">Subject*</label>
              <input type="text" placeholder='how can we help' className="form-control rounded-4 border-success-subtle p-3" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="mb-3 h-50 w-100">
                            <label htmlFor="message" className="form-label">Message*</label>
                            <textarea placeholder='Hello there, I would like to talk about how to...' className="form-control rounded-4 border-success-subtle simpleText pt-3" id="message" name="message" value={formData.message} onChange={handleChange} required />
                        </div>
            <button type="submit" className="newsSubmit">Send Message</button>
          </form>
  </div>
</div>
      <NewsLetterBlock/>
    </>
  )
}
