import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/cards.json';
import NewsLetterBlock from '../components/NewsLetterBlock';

export default function CardDetails() {
  const { title } = useParams();
  const { cards } = data || {};

  if (!title) {
    return <p>Invalid URL</p>;
  }

  if (!cards) {
    console.error('JSON data:', data);
    return <p>Error loading cards data</p>;
  }

  const formattedTitle = title.replace(/-/g, ' ').toLowerCase();
  const card = cards.find((c) => c.title.toLowerCase() === formattedTitle);
  


  if (!data || !cards) {
    console.error('Invalid or missing cards data:', data);
    return <p>Error loading cards data</p>;
  }
  
  return (
    <>
      <div className="container-fluid pageBanner position-relative p-0">
        <img src={card.src} alt={card.title} className="imgFluid"  />
      </div>
      <div className='cardDescription position-relative  d-flex flex-row  bg-light '>
        <div className=' textWrap'>
              <h2 className="cardTitle text-start pb-3 ">{card.title}</h2>
        <p className='simpleText py-3'>
        Established fact that a reader will be distracted by the readable content of a page <br />
        when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less <br />
         normal distribution of letters, as opposed   
        </p>
        </div>
        <div className='  clientData '>
<ul>
    <li><strong> Date    : </strong>December 4, 2022</li>
    <li><strong>Client        : </strong>Kevin Martin</li>
    <li><strong>Category: </strong>Agriculture , Eco</li>
    <li><strong>Service   :</strong>Organic Products</li>
</ul>
        </div>
      </div>
     <div className='secondCardBlock '>
<h3 className='mainTitle pb-4'>
About The Farm:
</h3>
<p className='simpleText'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br />
layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br />
 using 'Content here, content here', making it look like readable English. 
 </p> 
<p className='simpleText'>
 Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br />
  and auncover many web sites still in their infancy. Various versions have evolved over the years 
</p>
<img src="/image31.png" alt="Carrot photo"  className='w-100 rounded-4 py-4'/>
<p className='simpleText text-center'>The Organic Products</p>
<h3 className='mainTitle pb-4'>
How To Farm:
</h3>
<p className='simpleText'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br />
layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br />
 using 'Content here, content here', making it look like readable English. 
 </p> 
<p className='simpleText'>
 Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br />
  and auncover many web sites still in their infancy. Various versions have evolved over the years 
</p>
<h3 className='mainTitle pb-4'>
Conclusion:
</h3>
<p className='simpleText'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br />
layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br />
 using 'Content here, content here', making it look like readable English. 
 </p> 
<p className='simpleText'>
 Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br />
  and auncover many web sites still in their infancy. Various versions have evolved over the years 
</p>
     </div>
    <NewsLetterBlock/>
    </>
  );
}