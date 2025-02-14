import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

export default function Header({ onSearch }) {
  const { cart } = useCart();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Submit натиснуто. Запит:", searchQuery);
    if (onSearch) {
      onSearch(searchQuery);
    }
  };
  
  return (
    <>
     <div className="d-flex align-items-center justify-content-center justify-content-between px-5 my-5 border-bottom">
     <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light w-100" aria-label="Main navigation">
          <div className="container-fluid d-flex flex-row align-items-center justify-content-between mx-5">
            <div className="brand  d-flex flex-row align-items-center py-2">
              <Link className="navbar-brand" to="/home">
                <img src="/logo.png" alt="logo img" id="logo" className='logoImg'/>
              </Link>
              <h1 id="mainTitle" className=" mainTitle display-4 fw-bold roboto-700 ">
          Organic
              </h1>
            </div>

            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              id="navbarSideCollapse"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarsExampleDefault">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link active roboto-500 text-primary-emphasis px-4" aria-current="page" to="/home" id="homePage">
                       Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active roboto-500 text-primary-emphasis px-4" aria-current="page" to="/about" id="about">
                 About us
                  </Link>
                  
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle roboto-500 text-primary-emphasis px-4"
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item roboto-400 text-primary-emphasis" to="/home">Home</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400 text-primary-emphasis" to="/about">About</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400 text-primary-emphasis" to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item roboto-400 text-primary-emphasis" to="/service">Service</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400 text-primary-emphasis" to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400 text-primary-emphasis" to="/team">Team</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item roboto-400 text-primary-emphasis" to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item roboto-400 text-primary-emphasis" to="/contact">Contact</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-primary-emphasis px-4" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link roboto-500 text-primary-emphasis px-4" to="/portfolio">
                   Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link roboto-500 text-primary-emphasis px-4" to="/blog">
                    News
                  </Link>
                </li>
              </ul>
            </div>
           
            <form className="position-relative  pe-1 " role="search" onSubmit={handleSearchSubmit}>
  <input
    className="form-control rounded-5 w-100 bg-light py-3 pe-1 text-primary-emphasis"
    type="search"
    aria-label="Search"
    value={searchQuery}
    onChange={handleSearchChange}
  />
  <button
    type="submit"
    className="position-absolute end-0 top-50 translate-middle-y  border-0 bg-transparent"
  >
    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-light searchBtn p-3 rounded-5" />
  </button>
</form>

              <button className='rounded-5 cartBtn bg-white border-1 btn-outline-secondary mx-1 ps-1 pe-4 py-1'>
  <Link className="nav-link text-dark" to="/cart">
    <FontAwesomeIcon icon={faCartShopping} className='text-dark  p-3 cartBtnIcon rounded-5 text-white bg-opacity-150' /> 
    <span className='p-2 cartTitle'> Cart ({cart?.length || 0}) </span>
  </Link>
</button>   
          </div>
        </nav>
    
    </div>
    </>
   
  )
}
