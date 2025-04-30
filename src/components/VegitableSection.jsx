import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import data from '../data/products.json';

export default function VegitableSection() {
  const vegetableProducts = data.products.filter(product => product.tag === 'Vegetable').slice(-4);

  return (
    <>
  <div className="vegitables container  position-relative py-5">
        <div>
          <div className="vegContent  d-flex justify-content-between">
            <div>
              <h3 className='textTop'>Offer</h3>
              <h3 className='vegHeading  mainLightText '>We Offer Organic For You</h3>
            </div>

            <div>
              <Link to="/shop" className='text-decoration-none'>
               <button className='vegBtn rounded rounded-4  border-1 d-flex align-items-center'>
                View All Product
                <span className=' mx-3'>
                  <FontAwesomeIcon icon={faArrowRight} className='text-light rounded rounded-5 faIconRight ' />
                </span>
              </button>
              </Link>
             
            </div>
          </div>

          <div className="cardBlock product-list d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column justify-content-between py-5">
            {vegetableProducts.map(product => (
              <div key={product.id} className="productVegan card rounded rounded-2 p-2 m-1">
                <button className='w-75 text-light vegBtnTag rounded rounded-2'>{product.tag}</button>
                <img src={product.imgSrc} alt={product.altText} className="product-image w-100 my-5" />
                <h3 className="product-description vegCardDeck prodDeck roboto-600 border-bottom w-75 mx-3  ">
                  {product.description}
                </h3>
                <div className='cardVegBot d-flex flex-row justify-content-between text-end'>
                  <p className="product-price vegPrice mb-0">
                    <span className='text-secondary disabledText vegPrice p-1'>{product.priceDisabled} $ </span>
                    {product.price} $.
                  </p>
                  <div className="rating vegPrice mx-2 mt-3">
                    {Array.from({ length: product.rating }).map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} className="text-warning" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='vegSecondBlock position-relative'>
        <img src="/image5.png" alt="landscape image" className='w-50 vegSecondImage' />
        <div className="textSection">
          <h3 className="textTop pb-1 m-0">Eco Friendly</h3>
          <h4 className='mainText m-0 '>Econis is a Friendly <br /> Organic Store</h4>
          <p className='secondText m-0'>Start with Our Company First</p>
          <p className='simpleText open-sans-400 m-0 '> 
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br />doloremque laudantium. Sed ut perspiciatis.
          </p>
          <p className='secondText m-0'>Learn How to Grow Yourself</p>
          <p className='simpleText open-sans-400  m-0'> 
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br />doloremque laudantium. Sed ut perspiciatis.
          </p>
          <p className='secondText m-0 '>Farming Strategies of Today</p>
          <p className='simpleText open-sans-400 m-0'> 
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br />doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
      </div>
    </>
  )
}