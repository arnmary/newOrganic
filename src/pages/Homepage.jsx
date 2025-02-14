import React from 'react';
import Description from '../components/Description';
import AboutUsSection from '../components/AboutUsSection';
import Categories from '../components/Categories';
import Reviews from '../components/Reviews';
import VegitableSection from '../components/VegitableSection';
import Gallery from '../components/Gallery';
import Blog from '../components/Blog';
import NewsLetterBlock from '../components/NewsLetterBlock';

export default function Homepage() {
  return (
    <div>
      <Description/>
      <AboutUsSection/>
      <Categories/>
      <Reviews/>
      <VegitableSection/>
      <Gallery/>
      <Blog/>
      <NewsLetterBlock/>
    </div>
  )
}
