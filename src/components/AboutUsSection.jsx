import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function AboutUsSection() {
  return (
    <>
    <div className=" container-fluid aboutBlock">
    <img src="/image4.png" alt="Background fruits image" className='aboutBackgr'/>
    <div className='conteiner textBlock  text-start'>
        <h3 className='textTop mx-2'>About Us</h3>
        <h4 className='mainText roboto-800  mx-2'>
         We Believe in Working <br />
          Accredited Farmers
          </h4>
          <p className='simpleText text-secondary mx-2'>
          Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br />
          been the industry's standard dummy text ever since the 1500s, when an unknown <br />printer took a galley.
          </p>
          <div className='d-flex flex-row'>
          <img src="/icon1.png" alt="Plate leave image" className='m-2'/>
          <div className='m-2'>
         <h4 className='roboto-800 smallMainText'>Organic Foods Only</h4>
         <p className='simpleText text-secondary'>
            Simply dummy text of the printing and typesetting <br />
             industry. Lorem Ipsum</p>
          </div>
          </div>
          <div className='d-flex flex-row'>
          <img src="/icon2.png" alt="Plate leave image" className='m-2'/>
          <div className='m-2'>
         <h4 className='roboto-800 smallMainText'>Quality Standards</h4>
         <p className='simpleText text-secondary'>
            Simply dummy text of the printing and typesetting <br />
             industry. Lorem Ipsum</p>
          </div>
          </div>
          <Link to="/quality" className='text-decoration-none'>
              <button className='abovBtn rounded-4 text-light  d-flex align-items-center  mx-1 my-3 border-0'>
                      Shop Now
             <span className=' mx-3 '>
              <FontAwesomeIcon icon={faArrowRight} className='text-light rounded vegBtn icon rounded-5 faIconRight ' />
              </span>
              </button>
          </Link>
      
    </div>
    </div>  
    </>
  )
}
