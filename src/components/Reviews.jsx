import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import data from '../data/reviews.json';
import './styles.css';
import { Navigation } from 'swiper/modules';

export default function Reviews() {
  const {customers}=data;

  return (
    <div className="revBack position-relative ">
      <img src="/background3.png" alt="Background organic image" className="w-100 revBackImage" />
      <div className="textRev">
        <h3 className="textTop text-center">Testimonial</h3>
        <h4 className="mainText text-center">What Our Customer Saying?</h4>
      </div>
      <div className="reviewsSlide">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {customers.map((customer) => (
            <SwiperSlide key={customer.id}>
              <div className="customerSlide">
                <div className='sliderTop d-flex flex-column justify-content-center'>
                    <img src={customer.imgSrc} alt={customer.altText} className="customerImage py-1" />
                    <div className='revRating text-center'>
                           {Array.from({ length: Number(customer.rating) || 0 }).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="text-warning  py-1" />
              ))}
                    </div>
           
                </div>
              
    
                <p className="customerDescription  simpleText">{customer.description}</p>
                <p className="customerName">{customer.name}</p>
                <p className="customerCategory simpleSecondText">{customer.category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="advantages">
<div className=" circle  bg-light p-5 p-lg-3 p-xl-4 p-md-2 p-sm-5 mt-sm-5 m-2">
    <h3 className='text-center p-1 mt-lg-3 mt-sm-2 mainText '>100%</h3>
    <p className='text-center py-md-1 '>Organic</p>
</div>
<div className=" circle  bg-light p-5 p-lg-3 p-xl-4 p-md-2 p-sm-1 mt-sm-5 m-2">
    <h3 className='text-center p-1 mt-lg-3 mt-sm-2  mainText '>285</h3>
    <p className='text-center py-md-1 '>Active Product</p>
</div>
<div className=" circle  bg-light p-5 p-lg-3 p-xl-4 p-md-2  mt-sm-5 m-2">
    <h3 className='text-center p-1 mt-lg-3 mt-sm-2 mainText '>350+</h3>
    <p className='text-center py-md-1 '>Organic Orchads</p>
</div>
<div className=" circle  bg-light p-5 p-lg-3 p-xl-4 p-md-2  mt-sm-5 m-2">
    <h3 className='text-center p-1 mt-lg-3 mt-sm-2 mainText '>25+</h3>
    <p className='text-center py-md-1 '>Years of Farming</p>
</div>
      </div>
    </div>
  );
}