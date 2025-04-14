import React, { useState, useEffect } from 'react';

export default function NewsletterBlock() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEmail = sessionStorage.getItem('newsletterEmail');
      if (savedEmail) {
        setEmail(savedEmail);
      }
    }
  }, []);

  const handleChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    sessionStorage.setItem('newsletterEmail', newEmail);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted email:', email);
    setEmail('');
    sessionStorage.removeItem('newsletterEmail');
  };

  return (
    <div className='newsBlock'>
      <div className='contentNews position-relative'>
        <img src='/image11.png' alt='Fruits background' className='newsletterImage' />
        <div className=' d-flex flex-row align-items-center newsLetterContent'>
          <div>
               <h3 className='newsletterHeading mainLightText m-0'>
            Subscribe to <br /> our Newsletter
          </h3>
          </div>
       <div>
          <form onSubmit={handleSubmit} className='newsForm'>
            <input
              type='email'
              id='email'
              placeholder='Your Email Address'
              className='emailInput'
              value={email}
              onChange={handleChange}
            />
            <input type='submit' value='Subscribe!' className='newsSubmit' />
          </form>
       </div>
        
        </div>
      </div>
    </div>
  );
}