import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function NotFoundPage() {
  return (
    <>
      <div className='container-fluid  notFoundBlock '>
         <img src="/image41.png" alt="Flowers image" className='notFoundFirstImg'/>
            <img src="/vector1.png" alt="Garlic graphic image" className='garlicVector' />
            <img src="/vector2.png" alt="Leaves graphic image" className='leavesVector' />
            <img src="/vector5.png" alt="" className='thirdVector' />
            <img src="/vector7.png" alt="leaf vector graphic" className='forthVector ' />
    <div className='notFoundText'>
          <img src="/404.png" alt="404, not found page"  className='notFoundImg'/>
            <h4>Page not found</h4>
             <p>The page you are looking for doesn't exist or has been moved</p>
       <Link className=''to="/home">
     <button className='notfoundBtn rounded rounded-3 border-1 d-flex align-items-center'>
           Go to Homepage
            <span className=' mx-3'>
              <FontAwesomeIcon icon={faArrowRight} className='text-light faIconRight rounded rounded-5' />
            </span>
    </button>
       </Link>
  </div>
</div>
    </>
  )
}