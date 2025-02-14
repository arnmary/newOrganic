import React, { useState } from 'react';
import NewsLetterBlock from '../components/NewsLetterBlock';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import data from '../data/cards.json';

export default function BlogPage() {
const navigate = useNavigate();
const {blogs} = data;

const handleReadMore = (blogDetails) => {
  navigate('/blogDetails', { state: blogDetails });
  
};
  return (
    <>
    <div className="container-fluid pageBanner position-relative mt-0">
        <img src="/banner8.png" alt="banner organic shop" className="w-100" />
        <h2 className="bannerTitle">Recent News</h2>
      </div>
      
      <div className="cardBlogWrap d-flex flex-row justify-content-center flex-wrap  py-5 my-5">
        {blogs.map((blog) => (
          <div key={blog.id} className="cardBlog position-relative p-3 mb-5">
            <img src={blog.imgSrc} alt={blog.alt} className="blogImage rounded rounded-5 " />
            <span className=" blogPageTag d-flex flex-column  text-center bg-light text-wrap-wrap m-3">
              {blog.date}
            </span>
            <div className=" py-4 px-3 textBlogBlock bg-light  mt-0 rounded rounded-5">
              <span className="d-flex flex-row">
                <FontAwesomeIcon icon={faUser} className="blogPageUserIcon p-1" />
                <h4 className="">By {blog.author}</h4>
              </span>
              <h5 className="blogSecondTitle py-2">{blog.title}</h5>
              <p className="simpleText">{blog.text}</p>
              <button
                className="blogSectionBtn bg-light rounded rounded-3 p-2 border-1 d-flex align-items-center"
                onClick={() => handleReadMore({ imgSrc: blog.imgSrc, text: blog.text, title: blog.title, author: blog.author, date: blog.date })}
              >
                Read More
                <span className=" mx-3">
                  <FontAwesomeIcon icon={faArrowRight} className="text-light rounded-4 faIconRight p-1" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <NewsLetterBlock/>
    </>
  )
}