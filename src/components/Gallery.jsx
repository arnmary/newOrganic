import React from 'react';

export default function Gallery() {
  return (
    <>
      <div className='galeryBlock  d-flex flex-row justify-content-between w-100'>
        <div className='cardWrap'>
            <img src="/image6.png" alt="Juice image" className='galleryImage'/>
            <button className='galleryBtn rounded rounded-4 bg-light py-3 px-5 '>Organic Juice</button>
        </div>
        <div className='cardWrap'>
            <img src="/image7.png" alt="Vegetables image" className='galleryImage'/>
            <button className='galleryBtn rounded rounded-4 bg-light py-3 px-5 '>Organic Food</button>
        </div>
        <div className='cardWrap'>
            <img src="/image8.png" alt="Cookies image" className='galleryImage'/>
            <button className='galleryBtn rounded rounded-4 bg-light py-3 px-5 '>Nuts Cookies</button>
        </div>
      </div>
    </>
  )
}