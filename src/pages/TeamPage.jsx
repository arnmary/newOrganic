import React from 'react';
import data from '../data/team.json';
import TeamerCard from '../components/TeamerCard';
import NewsLetterBlock from '../components/NewsLetterBlock';

export default function TeamPage() {
    const {teamMembers}=data;
  return (
    <>
    <div className='container-fluid pageBanner position-relative'>
        <img src="/banner7.png" alt="banner organic shop" className='w-100' />
        <h2 className="bannerTitle">Our Team</h2>
    </div>
    <div className="fourthContent">
          <h5 className="textTop text-center">Team</h5>
         <h4 className='servSecondHeading text-center mb-3'>Our Organic Experts</h4>
           <p className='simpleText text-center'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's <br />
           standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
    </div>
    <div className="fourthBottom d-flex flex-row gap-2 flex-wrap justify-content-center w-100 mb-5">
          {teamMembers.map((member, index) => (
            <TeamerCard key={index} {...member} />
          ))}
    </div>
<NewsLetterBlock/>
    </>
  )
}
