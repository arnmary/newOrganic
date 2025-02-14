import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import data from '../data/team.json';
import TeamerCard from './TeamerCard';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function AboutContent() {
    const{teamMembers}= data;

  return (
    <>
       <div className='secondBlock container-fluid d-flex flex-row'>
      <div className='conteiner w-50 ms-0'>
          <img src="/image12.png" alt="Vegitables image" className='secondImage'/>
      </div>
      <div className="secondText text-start conteiner w-50  ms-5">
      <h3 className="textTop">About Us</h3>
      <h4 className='mainText roboto-800  mb-3'>
      We do Creative <br />
      Things for Success</h4>
      <p className="simpleText text-start mb-4"
      >Simply dummy text of the printing and typesetting industry. Lorem had ceased  <br />
      to been the industry's standard dummy text ever since the 1500s, when an <br />
       unknown printer took a galley.
      </p>
      <p className='simpleText text-start'>
      Simply dummy text of the printing and typesetting industry. Lorem had ceased <br />
       to been the industry's standard dummy text ever since the 1500s, when an <br />
        unknown printer took a galley.
      </p>
      <div className='d-flex flex-row justify-content-start mt-5 me-5'>
      <div className='d-flex flex-row me-3'>
          <img src="/icon3.png" alt="Tractor icon" />
          <h4 className='Roboto-500  secondText text-start ms-3'>
              Modern Agriculture <br />
              Equipment
      </h4>
      </div>
      <div className='d-flex flex-row '>
          <img src="/icon4.png" alt="Fabric icon" />
          <h4 className='Roboto-500 secondText text-start ms-3 '>
          No growth <br />
          hormones are used    
      </h4>
      </div>
      </div>
      <div className="py-5">
        <Link to="/quality" className='text-decoration-none'>
            <button className='abovBtn rounded rounded-4 text-light my-3 mx-1 d-flex align-items-center'>
                Explore More
              <span className='mx-3'>
                   <FontAwesomeIcon icon={faArrowRight} className='text-light rounded vegBtn icon rounded-5 faIconRight' />
                </span>
          </button>
        </Link>
       
      </div>
      </div>
            </div>
            <div className='thirdBlock conteiner-fluide'>
          <div className="thirdContent">
            <div className="thirdTop d-flex flex-row">
                <div className="textThirdSection w-50">
                    <h3 className="textTop text-start">
                    Why Choose us?
                    </h3>
                    <h4 className="mainText roboto-800  text-start mb-3">
                    We do not buy from the <br />
                    open market & traders.
                    </h4>
                    <p className="simpleText">
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased <br />to been the industry's standard  the 1500s, when an unknown
                    </p>
                    <div className='d-flex flex-row align-items-center thirdBtn w-75 rounded rounded-5 '>
                    <FontAwesomeIcon icon={faCircleDot} className=' ms-4 dotIcon'  />
                    <p className='roboto-500 secondText pt-2 ms-2 my-0 text-nowrap'>100% Natural Product</p>
                    </div>
                    <p className="simpletext ms-5">
                    Simply dummy text of the printing and typesetting <br />
                    industry Lorem Ipsum
                    </p>
                    <div className='d-flex flex-row align-items-center thirdBtn w-75 rounded rounded-5 '>
                    <FontAwesomeIcon icon={faCircleDot} className=' ms-3 dotIcon'  />
                    <p className='roboto-500 secondText p-0 ms-2 my-0'> Increases resistance</p>
                    </div>
                    <p className="simpletext ms-5">
                    Filling, and temptingly healthy, our Biona Organic <br />
                    Granola with Wild Berries is just the thing 
                    </p>
                </div>
                <div className='w-50'>
                    <img src="/image13.jpg" alt="Vegitables image" className='w-100 py-3 ms-2 h-100'/>
                </div>
            </div>
<div className="thirdBottom d-flex flex-row justify-content-between gap-2">
    <div className="specification d-flex flex-column justify-content-center align-content-center px-3 py-5 bg-white">
        <img src="/icon5.png" alt="Cart icon" className='p-1 bg-white w-50 mx-auto' />
        <h5 className="secondText text-center py-2 m-0 text-nowrap">Return Policy</h5>
        <p className='text-center simpleText'>
            Simply dummy text of <br />
            the printintypesetting <br />
             industry.</p>

    </div>
    <div className="specification d-flex flex-column justify-content-center align-content-center px-3 py-5 bg-white">
        <img src="/icon6.png" alt="Cart icon" className='p-1 bg-white w-50 mx-auto' />
        <h5 className="secondText text-center py-2 m-0 text-nowrap">100% Fresh</h5>
        <p className='text-center simpleText'>
            Simply dummy text of <br />
            the printintypesetting <br />
             industry.</p>

    </div>
    <div className="specification d-flex flex-column justify-content-center align-content-center px-3 py-5 bg-white ">
        <img src="/icon7.png" alt="Cart icon" className='p-1 bg-white w-50 mx-auto' />
        <h5 className="secondText text-center py-2 m-0 text-nowrap">Support 24/7</h5>
        <p className='text-center simpleText'>
            Simply dummy text of <br />
            the printintypesetting <br />
             industry.</p>

    </div>
    <div className="specification d-flex flex-column justify-content-center align-content-center px-3 py-5 bg-white">
        <img src="/icon8.png" alt="Cart icon" className='p-1 bg-white w-50 mx-auto' />
        <h5 className="secondText text-center py-2 m-0 text-nowrap">Secured Payment
        </h5>
        <p className='text-center simpleText'>
            Simply dummy text of <br />
            the printintypesetting <br />
             industry.</p>

    </div>
</div>
          </div>
          <div className="fouthBlock  bg-white container-fluid W-100">
<div className="fourthContent">
    <h5 className="textTop text-center">Team</h5>
    <h4 className='mainText roboto-800  text-center mb-3'>Our Organic Experts</h4>
    <p className='simpleText text-center'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's <br />
     standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
     <div className="fourthBottom d-flex flex-row gap-2 justify-content-center w-100">
    {teamMembers.slice(0, 3).map((member, index) => (
        <TeamerCard key={index} {...member} />
    ))}
</div>
</div>
    </div>
    <div className="fifthBlock conteiner-fluid w-100">
        <div className="fifthContent ">
        <h5 className="textTop text-center">About Us</h5>
        <h4 className='mainText roboto-800 text-light text-center mb-5'>What We Offer for You</h4>
            <div className="cardWraper d-flex flex-row justify-content-center d-sm-row gap-2 w-75 mt-2">
<div className="fifthCard rounded-5 ">
<img src="/image17.png" alt="Spasy image" className='fifthImage'/>
<p className='text-light roboto-500 text-center pt-3' >
Spicy
</p>
</div>
<div className="fifthCard rounded-5">
<img src="/image18.png" alt="Spasy image" className='fifthImage'/>
<p className='text-light roboto-500 text-center pt-3' >
Nuts & Feesd
</p>
</div>
<div className="fifthCard rounded-5">
<img src="/image19.png" alt="Spasy image" className='fifthImage'/>
<p className='text-light roboto-500 text-center pt-3' >
Fruits
</p>
</div>
<div className="fifthCard rounded-5">
<img src="/image20.png" alt="Spasy image" className='fifthImage'/>
<p className='text-light roboto-500 text-center pt-3' >
Vegetable
</p>
</div>

            </div> 
        </div>
    </div>
</div>
    </>
  )
}