import React from 'react';
import Categories from '../components/Categories';
import NewsLetterBlock from '../components/NewsLetterBlock';

export default function ShopPage() {
  return (
    <>
    <div className='container-fluid position-relative p-0 w-100'>
        <img src="/banner2.png" alt="banner organic shop" className='pageBanner'/>
        <h2 className='bannerTitle'>Shop</h2>
    </div>
    <Categories/>
    <NewsLetterBlock/>
    </>
  )
}