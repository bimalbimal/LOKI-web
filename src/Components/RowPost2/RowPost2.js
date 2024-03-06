import React, { useState } from 'react';
import './RowPost2.css';
import { StwoData } from '../../Datas/StwoData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function RowPost2() {
  const [showVideo, setShowVideo] = useState(null);
  const [istext, setistext] = useState(null);
  const [showArrows, setShowArrows] = useState(false);

  const handlePosterClick = (video) => {
    setShowVideo(video);
  };

  const handleCancelClick = () => {
    setShowVideo(null);
  };

  const hoverEnter = (episode) => {
    setistext(episode);
  };

  const hoverLeave = () => {
    setistext(null);
  };

  const scrollPosterss = (scrollOffset) => {
    const posterssContainer = document.querySelector('.posterss');
    posterssContainer.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

  const handleRowsMouseEnter = () => {
    setShowArrows(true);
  };

  const handleRowsMouseLeave = () => {
    setShowArrows(false);
  };

  return (
    <div className='rows' onMouseEnter={handleRowsMouseEnter} onMouseLeave={handleRowsMouseLeave}>
      <h2 className="titlee">{istext || 'Season 2'}</h2>
      <div className='posterss'>
        {StwoData.map((stwo) => (
          <img
            className='smallposter'
            src={stwo.image}
            alt=''
            key={stwo.id}
            onClick={() => handlePosterClick(stwo.vedio)}
            onMouseEnter={() => hoverEnter(stwo.episode)}
            onMouseLeave={hoverLeave}
          />
        ))}
        {showArrows && (
          <>
            <div className='arrows left-arrows' onClick={() => scrollPosterss(-100)}>
              <FaChevronLeft />
            </div>
            <div className='arrows right-arrows' onClick={() => scrollPosterss(100)}>
              <FaChevronRight />
            </div>
          </>
        )}
      </div>
      {showVideo && (
        <div>
          <button className='cancel' onClick={handleCancelClick}>
            X
          </button>
          <video controls width="1500" height="800px" autoPlay>
            <source src={showVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default RowPost2;