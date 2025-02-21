import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import data from '../data/products.json';
import { useSearch } from '../context/SearchContext';

export default function Categories() {
  const { query } = useSearch();
  const { products = [] } = data;
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(8);

  const handleDoubleClick = (productId) => {
    if (productId) navigate(`/product/${productId}`);
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const filteredProducts = query.trim()
    ? products.filter((product) =>
        [product.description, product.category]
          .some((field) => field?.toLowerCase().includes(query.toLowerCase()))
      )
    : products;

  return (
    <div className="container my-5 prodBlock">
      <div className="text">
        <h3 className="textTop text-center">Categories</h3>
        <h4 className="roboto-800 mainText text-center mx-2">Our Products</h4>
      </div>
      <div className="productList d-flex flex-row flex-wrap justify-content-center gap-1 mb-5" id="prodList">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="product card rounded rounded-5 p-3"
            onDoubleClick={() => handleDoubleClick(product.id)}
          >
            <button className="w-50 text-light prodTag rounded rounded-2">{product.tag}</button>
            <img 
              src={product.imgSrc || 'default-image.jpg'} 
              alt={product.altText || 'Product image'} 
              className="product-image w-100" 
            />
            <h5 className="product-description prodDeck w-75 mx-3 my-5 text-start">
              {product.description}
            </h5>
            <div className="cardBot d-flex flex-row justify-content-between border-top">
              <p className="product-price my-4">
                <span className="text-secondary disabledText p-1">{product.priceDisabled} $</span>
                {product.price} $.
              </p>
              <div className="rating ps-4 my-4">
                {Array.from({ length: Math.max(0, parseInt(product.rating) || 0) }).map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className="text-warning" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < filteredProducts.length && (
        <button onClick={loadMore} className="loadBtn rounded rounded-4 text-light d-flex align-items-center">
          Load More
          <span className="mx-3">
            <FontAwesomeIcon icon={faArrowRight} className="text-light rounded rounded-5 faIconRight" />
          </span>
        </button>
      )}
    </div>
  );
}
