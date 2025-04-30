import React from 'react';
import NewsLetterBlock from '../components/NewsLetterBlock';

export default function QualityPage() {

  return (
    <>
  <div className='container-fluide pageBanner position-relative p-0'>
         <img src="/banner5.png" alt="banner organic shop" className='pageBanner'/>
</div>
         <h2 className='bannerTitle'>Quality Standard</h2>
 <div className="qualityFirstBlock w-75">
          <img src="/image22.png" alt="Man whith plants " className='w-100' />
</div>
<div className='w-75 qualityContent mb-5'>
      <h3 className=' text-start mainText mb-4'>
Organic Store Services
       </h3>
        <p>
          t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
       </p>
        <p>
         Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years
      </p>
      <div className=' d-flex flex-row py-3'>
          <img src="/image23.png" alt="growing plants"className='w-25 rounded-4' />
      <div className=' w-75  ms-4 p-3 rounded-4 bg-body-tertiary my-auto'>
             <h4 className='secondText'>
                 Why Organic
            </h4>
          <p className='simpleText px-5 pt-1'>
              Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptate. page editors now use Lorem Ipsum as their <br /> default model text, and auncover.
         </p>
     </div>
</div>
  <div className=' d-flex flex-row py-3'>
   <div className=' w-75  me-4 p-3 rounded-4 bg-body-tertiary my-auto'>
         <h4 className='secondText ms-5'>
             Speciality Produce
         </h4>
          <p className='simpleText px-5 pt-1 p'>
              Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptat. page editors now use Lorem Ipsum as their <br /> default model text, and auncover.
         </p>
  </div>
  <img src="/image24.png" alt="growing plants"className='w-25 rounded rounded-4' />
</div>
     <div className='py-5 mt-4'>
           <h4 className='qualitySecondTitle mainText'>We farm your land</h4>
              <p className="simpleText">It is a long established fact that a reader will be distracted by the readable content of a page when looking a <br />
                 layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br />
                 using 'Content here, content here', making it look like readable English.</p>
    <div className="qualityButtons d-flex flex-row gap-2">
        <button className='bg-body-tertiary rounded-5 w-50 py-3 ps-1 d-flex flex-row justify-content-start'>
             <strong className='rounded-5 bg-success bg-opacity-50 p-2  ms-2 text-start text-light'>01</strong>
                 <p className='qualityBtn mb-0 pt-2 '>Best quality support</p>
        </button>
        <button className='bg-body-tertiary rounded-5 w-50 d-flex flex-row'>
              <strong className='rounded-5 bg-success bg-opacity-50 p-2 ms-2  text-start text-light'>02</strong>
                  <p className='qualityBtn mb-0 pt-2'>Money back guarantee</p>
        </button>
    </div>
</div>
</div>
<NewsLetterBlock></NewsLetterBlock>
    </>
  )
}
