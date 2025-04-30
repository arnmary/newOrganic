import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export default function ServicesPage() {

  return (
    <>
  <div className='container-fluide p-0'>
        <img src="/banner4.png" alt="banner organic shop" className='pageBanner'/>
        <h2 className='bannerTitle'>Services</h2>
</div>
      <h4 className='textTop servHeadingTop text-center'>What we Grow</h4>
      <h3 className=' servSecondHeading text-center '>
         Better Agriculturefor <br />
         Better Future
     </h3>
      <div className='servSecondBlock  py-5 d-flex flex-row justify-content-center'>
<div className='servSecondLeftPart my-5'>
   <div className="textServCard">
     <img src="/icon9.png" alt="Bottle icon" className='leftServCard' />
      <h4 className='secondText text-end'>Dairy Products</h4>
        <p className='simpleText text-end'>
           Sed ut perspiciatis unde omnis iste natus error <br />
           sit voluptat accusantium doloremqlaudantium. <br />
            Sed ut perspiciatis
       </p>
   </div>
  <div className="textServCard ">
     <img src="/icon10.png" alt="House icon" className='leftServCard' />
     <h4 className='secondText text-end'>Store Services</h4>
      <p className='simpleText text-end'>
         Sed ut perspiciatis unde omnis iste natus error <br />
         sit voluptat accusantium doloremqlaudantium. <br />
         Sed ut perspiciatis
      </p>
   </div>
   <div className="textServCard ">
     <img src="/icon11.png" alt="Car icon" className='leftServCard' />
         <h4 className='secondText text-end'>Delivery Services</h4>
           <p className='simpleText text-end'>
             Sed ut perspiciatis unde omnis iste natus error <br />
             sit voluptat accusantium doloremqlaudantium. <br />
             Sed ut perspiciatis
          </p>
   </div>
</div>
<div>
    <img src="/product17.png" alt="Pistachios image" className='servImage ' />
</div>
<div className='servSecondLeftPart my-5'>
    <div className="textServCard">
        <img src="/icon12.png" alt="Bottle icon" className='rightServCard' />
         <h4 className='secondText text-start'>Agricultural Services</h4>
         <p className='simpleText text-start'>
             Sed ut perspiciatis unde omnis iste natus error <br />
             sit voluptat accusantium doloremqlaudantium. <br />
             Sed ut perspiciatis
         </p>
  </div>
  <div className="textServCard">
       <img src="/icon13.png" alt="Bottle icon" className='rightServCard' />
          <h4 className='secondText text-start'>Organic Products</h4>
             <p className='simpleText text-start'>
             Sed ut perspiciatis unde omnis iste natus error <br />
             sit voluptat accusantium doloremqlaudantium. <br />
             Sed ut perspiciatis
             </p>
</div>
  <div className="textServCard ">
     <img src="/icon14.png" alt="Bottle icon" className='rightServCard' />
         <h4 className='secondText text-start'>Fresh Vegetables</h4>
          <p className='simpleText text-start'>
             Sed ut perspiciatis unde omnis iste natus error <br />
             sit voluptat accusantium doloremqlaudantium. <br />
             Sed ut perspiciatis
         </p>
 </div>
</div>

</div>
  <div className='mx-auto w-25 text-center'>
          <Link to="/shop">
              <button className=' vegBtn mx-auto  bg-light rounded-4 py-3  servBtn'>
                 Explore More
                  <span className=' mx-3'>
                      <FontAwesomeIcon icon={faArrowRight} className='text-light rounded-4 faIconRight p-1' />
                 </span>
             </button>
        </Link>
              
</div>
       <div className="thirdServBlock conteiner-fluide w-100 pt-5">
          <img src="/image21.jpg" alt="Pupies field image" className=''/>
     <div className="servButomn">
         <h4 className="textTop text-center">Organic Only</h4>
         <h3 className=' servSecondHeading '>
             Everyday Fresh & Clean
         </h3>
         <p className="simpleText text-center">Simply dummy text of the printing and typesetting industry. Lorem had ceased <br />
               to been the industry's standard dummy text ever since the </p>
         <div className='text-center p-3'>
           <FontAwesomeIcon icon={faCirclePlay} className='textTop circlePlay ' />
         </div>
   </div>
</div>
    </>
  )
}