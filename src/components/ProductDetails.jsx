import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/products.json';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { productId } = useParams();
  const product = data.products.find((prod) => prod.id === parseInt(productId));
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return <h2>Product not found</h2>;
  }

 
  const relatedProducts = data.products
    .filter((prod) => prod.id !== parseInt(productId) && prod.category === product.category)
    .slice(0, 4);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDoubleClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    console.log(`${product.description} додано до кошика!`);
  };

  return (
    <>
       <div className="container-fluid">
        <img src="/banner3.png" alt="banner organic shop" className="aboutBanner w-100" />
        <h2 className='bannerTitle'>Product Details</h2>
      </div>
      <div className="container text-center w-100 d-flex flex-row my-5">
        <div className="detImage w-50 rounded rounded-5 p-5 mt-5">
          <button className='singleTagBtn bg-body-emphasis text-light rounded-2 w-25 '>{product.tag}</button>
          <img src={product.imgSrc} alt={product.altText} className="w-75" />
        </div>
        <div className="details w-50 text-start px-4 py-5 m-5">
          <h5 className="mainText roboto-600">{product.description}</h5>
          <div className="d-flex flex-column py-3">
            <div className="rating py-2">
              {Array.from({ length: product.rating }).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="text-warning" />
              ))}
            </div>
            <p className="product-price ">
              <span className="text-secondary disabledText p-1">{product.priceDisabled} $</span>
              {product.price} $.
            </p>
          </div>
          <p className="py-3 simpleText">{product.details}</p>
          <div className="d-flex flex-row align-items-center">
            <p className="py-3 mx-3 mt-3 secondText ainText ">Quantity:</p>
            <button onClick={handleDecrease} className="btn btn-outline-secondary">-</button>
            <span className="px-3">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="btn btn-outline-secondary">+</button>
            <button
              onClick={handleAddToCart}
              className="abovBtn w-50 bg-body-emphasis text-center text-light rounded rounded-4 mx-3">
              Add To Cart
              <span className=" mx-3 ">
                <FontAwesomeIcon icon={faArrowRight} className="text-light rounded abovBtn icon rounded-4 faIconRight" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="relatedProduct text-center ">
      <div className='d-flex flex-row align-items-center justify-content-center text-center my-5 mx-auto w-100'>
          <button className='abovBtn rounded rounded-4 mx-3 w-25 py-4 text-light'>
          Product Description
          </button>
          <button className='rounded rounded-4 w-25 py-4  detailsBtn'>
          Additional Info
          </button>
        </div>
        <p className='text-center'>
        Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, <br /> ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple  <br />sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
        </p>
      </div>
      <div className='relatedProduct text-center text-primary-emphasis roboto-800 my-5 '>
        <h3 className='roboto-800'>Related Products</h3>
        <div className="productList d-flex justify-content-center flex-wrap gap-1">
        {relatedProducts.map((relatedProduct) => (
  <div
    key={relatedProduct.id}
    className="product card rounded rounded-5 p-3"
    onDoubleClick={() => handleDoubleClick(relatedProduct.id)}
  >
    <button className="w-50 text-light prodTag rounded rounded-2">{relatedProduct.tag}</button>
    <img src={relatedProduct.imgSrc} alt={relatedProduct.altText} className="product-image w-100" />
    <h3 className="product-description prodDeck border-bottom w-75 mx-3 my-5 text-start text-primary-emphasis">
      {relatedProduct.description}
    </h3>
    <div className="cardBot d-flex flex-row justify-content-between">
      <p className="product-price text-body-emphasis my-5">
        <span className="text-secondary disabledText p-1">{relatedProduct.priceDisabled} $</span>
        {relatedProduct.price} $.
      </p>
      <div className="rating p-5">
        {Array.from({ length: relatedProduct.rating }).map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="text-warning" />
        ))}
      </div>
    </div>
  </div>
))}

        </div>
      </div>
    </>
  );
}
