import React from 'react'
import NewsLetterBlock from '../components/NewsLetterBlock';
import AboutContent from '../components/AboutContent';

export default function Aboutpage() {
  return (
    <>
      <div className='container-fluid position-relative p-0'>
        <img src="/banner1.png" alt="banner organic shop" className='pageBanner'/>
        <h2 className='bannerTitle'>About Us</h2>
      </div>
      <AboutContent/>
      <NewsLetterBlock/>
    </>
  )
}