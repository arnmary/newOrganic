import React, { useState } from 'react';
import NewsLetterBlock from '../components/NewsLetterBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import data from '../data/cards.json';
import { useNavigate } from 'react-router-dom';


export default function PortfolioPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  const { cards } = data;
  const navigate = useNavigate();

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
    navigate(`/cards/${encodeURIComponent(cardTitle)}`);
  };
  return (
    <>
  <div className='container-fluid pageBanner position-relative'>
          <img src="/banner6.png" alt="banner organic shop" className='pageBanner' />
          <h2 className='bannerTitle'>Portfolio Standard</h2>
  </div>
    <div className="portfolioImgBlock">
            {cards.map((card, index) => (
          <div
               key={index}
               className="portfolioCard position-relative"
               style={{ overflow: 'hidden', cursor: 'pointer' }}
               onClick={() => handleCardClick(card.title)}
             >
            <img src={card.src} alt={`${card.title} pattern`} className='w-100' />
            <h2 className='blogSecondTitle my-2'>{card.title}</h2>
            <h3 className="textTop">{card.category}</h3>
            <div
                 className="hoverOverlay position-absolute top-0 left-0  d-flex align-items-center justify-content-center"
            >
              <div className="overlayContent text-center">
                <button className="btn btn-transparent bg-success-subtle  rounded-5 px-2 py-1">
                   <FontAwesomeIcon icon={faPlay} size="1x" color="#fff" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="cardDetails">
             <h3>{selectedCard}</h3>
             <p>Details about {selectedCard}...</p>
        </div>
      )}
      <NewsLetterBlock/>
    </>
  );
}
