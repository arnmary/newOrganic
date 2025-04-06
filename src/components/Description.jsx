import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Description() {
  return (
    <>
      <div className='descBlock  m-0'>
        
        <div className='titleHeading w-50 d-flex flex-column'> 
          <h2 className='descTitle descTitleTop textTop'>
            100% Natural Food <br />
               </h2>
            <h2 className='descTitle descSecondTitle text-start'>
              Choose the best <br />
              healthier way <br />
              of life
            </h2> 
       <Link to="/shop" className='text-decoration-none'>
         <div className='descBtn rounded rounded-4  border-1 d-flex align-items-center'>
            Explore Now
            <span className='mx-3'>
              <FontAwesomeIcon icon={faArrowRight} className='text-light faIconRight rounded rounded-5' />
            </span>
          </div>
       </Link>
        
        </div>
        <img src="/vector1.png" alt="Garlic vector" className='descVector1' />
        <img src="/vector2.png" alt="Vector image" className='descVector2' />
        <img src="/vector3.png" alt="Leaves vector" className='descVector3' />
        <img src="/vector4.png" alt="Strawberry vector" className='descVector4' />
        <img src="/vector5.png" alt="Beans vector" className='descVector5' />
        <img src="/vector6.png" alt="Leave vector" className='descVector6' />
        <img src="/vector7.png" alt="Leave vector" className='descVector7' />
        <img src="/vector8.png" alt="Additional vector" className='descVector8' />
        <img src="/image1.png" alt="Background image" className='descImage ' />
      </div>
      <div className='container container-sm position-relative imagesBlock'>
      <div className="leftPart">
          <img src="/image2.png" alt="Background fruits image" className='leftPartImage p-3  ' />
          <h3 className='leftPartText textTop text-light m-0'>
          Natural!!
          </h3>
          <p className='text-light m-0'>
            Get Garden <br />
             Fresh Fruits
          </p>
        </div>
        <div className="rightPart ">
          <img src="/image3.png" alt="Background fruits image" className='rightPartImage p-3 ' />
          <h3 className='rightPartText m-0'>Offer!!</h3>
          <p className='m-0'>
          Get 10% off <br />
          on Vegetables</p>
        </div>
        </div>
    </>
  );
}