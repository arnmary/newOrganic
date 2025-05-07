import React from 'react';
import NewsLetterBlock from '../components/NewsLetterBlock';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function BlogDetails() {
    const location = useLocation();
   
    const { imgSrc = '', text = '', title = '', date = '', author = '' } = location.state || {};

    return (
        <>
            <div className='container-fluid pageBanner p-0'>
                {imgSrc && <img src={imgSrc} alt={title} className='imgFluid' />}
            </div>
            <div className="blogDetails cardDescription position-relative bg-light">
                <div className='w-75'>
                    <div className='d-flex flex-row align-items-center'>
                               <h3 className='userName mb-0 me-2'> <span className='blogDetailsUser'>Posted On:</span>{date}</h3>
                <span className="d-flex flex-row pt-1 ">
                    <FontAwesomeIcon icon={faUser} className="textTop p-2 mb-3" />
                    <p className=" pt-1 px-2 mb-0 userName">By {author}</p>
                </span>
                    </div>
              
                <h2 className="cardTitle blogTitle text-start pb-3">{title}</h2>
                <p className='simpleText'>
                Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
                </p> 
                </div>
            </div>
              <div className='w-50 mx-auto'>
                    <p className='simpleText text-start py-3'>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>
<h4 className='blogTitle  secondText pb-1'>
Preferred Form of Vitamin D?
</h4>
<p>
It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
</p>
<ul className='py-2 blogList'>
    <li>Publishing packages and web pageLorem Ipsum as their default</li>
    <li>Content here, content here', making it look like readable</li>
    <li>Packages and web pageLorem Ipsum as their default</li>
</ul>
<p className='p-5 blogTextCard  rounded-5 '>
    <i>
        “The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”
    </i>
</p>
<h5 className='blogSecondTitle mainText pb-1'>
Make perfect organic product with us
</h5>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
<ol className='secondBlogList px-3'>
    <li>Publishing packages and web pageLorem Ipsum as their default</li>
    <li>Content here, content here', making it look like readable</li>
    <li>Packages and web pageLorem Ipsum as their default</li>
    <li>more-or-less normal distribution of letters</li>
</ol>
                </div>
             
            <NewsLetterBlock />
        </>
    );
}
