import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  const totalAmount = Array.isArray(cart) 
  ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0) 
  : 0;


  const handleCheckout = () => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    navigate('/checkout');
  };

  return (
    <>
      <div className="container-fluid pageBanner position-relative mt-0">
        <img src="/banner9.png" alt="banner organic shop" className="w-100" />
        <h2 className="bannerTitle">Cart</h2>
      </div>
      <div className="container my-5 w-75 mx-auto">
        <h2 className='mainTitle'>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <img src={item.imgSrc} alt={item.description} className="cart-item-image" style={{ width: '3rem ', height: '3rem ', objectFit: 'cover' }} />
                  <span>{item.description} (x{item.quantity})</span>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="mt-3 ">Total: ${totalAmount.toFixed(2)}</h4>
            <button onClick={handleCheckout} className="checkBtn rounded-2 text-light mt-3">
              Proceed to Checkout
              <span className=" mx-3 ">      
                    <FontAwesomeIcon icon={faArrowRight} 
                   className="text-light rounded abovBtn icon 
                   rounded-4 faIconRight" />     
                 </span>
            </button>
          </>
        )}
        <div className="mt-3">
          <Link to="/shop" className="backShoppingBtn rounded-2  text-decoration-none">
            Back to Shopping
                <span className=" mx-3 ">      
                    <FontAwesomeIcon icon={faArrowRight} 
                   className="text-light rounded abovBtn icon 
                   rounded-4 faIconRight" />     
                 </span>
          </Link>
        </div>
      </div>
    </>
  );
}