import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import data from '../data/cards.json';

export default function Blog() {
  const navigate = useNavigate();
  const { blogs } = data;


  const firstTwoBlogs = blogs.slice(0, 2);

  const handleReadMore = (blogDetails) => {
    navigate(`/blogDetails/${blogDetails.id}`, { state: blogDetails });

  };

  return (
    <>
    <div className='blogBlock'>
           <div className="blogContent d-flex justify-content-between">
                  <div className='blogHeading'>
                    <h3 className='textTop'>Offer</h3>
                    <h3 className='mainText'>We Offer Organic For You</h3>
                  </div>
      
                  <div>
                    <Link to="/blog" className='text-decoration-none'>
                     <button className='blogBtn rounded rounded-4  border-1 d-flex align-items-center'>
                      View All Product
                      <div className=' mx-3'>
                        <FontAwesomeIcon icon={faArrowRight} className='text-light rounded rounded-5 faIconRight ' />
                      </div>
                    </button>
                    </Link>
                   
                  </div>
                </div>
          <div className="cardBlogWrap d-flex flex-row justify-content-center flex-wrap my-5">
        {firstTwoBlogs.map((blog) => (
          <div key={blog.id} className="cardBlog position-relative p-3 mb-5">
            <img src={blog.imgSrc} alt={blog.alt} className="blogImage rounded rounded-5 " />
            <span className=" blogPageTag  text-center bg-light  m-3">
              {blog.date}
            </span>
            <div className=" textBlogBlock  mt-0 rounded rounded-5">
              <span className="d-flex flex-row">
                <FontAwesomeIcon icon={faUser} className="userIcon p-1" />
                <p className="userName mx-1 my-0">By {blog.author}</p>
              </span>
              <h6 className="blogSecondTitle m-0">{blog.title}</h6>
              <p className="simpleText">{blog.text}</p>
              <button
                className="blogSectionBtn rounded rounded-4 d-flex align-items-center"
                onClick={() =>
                  handleReadMore({
                    imgSrc: blog.imgSrc,
                    text: blog.text,
                    title: blog.title,
                    author: blog.author,
                    date: blog.date,
                  })
                }
              >
                Read More
                <span className="mx-3">
                  <FontAwesomeIcon icon={faArrowRight} className="text-light rounded rounded-5 faIconRight " />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    </>
  );
}