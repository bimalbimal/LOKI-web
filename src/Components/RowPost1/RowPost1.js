import React, { useState } from 'react';
import { SoneData } from '../../Datas/SoneData';
import './RowPost1.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function RowPost1() {
  const [showVideo, setShowVideo] = useState(null);
  const [hoverImage, setHoverImage] = useState(null);
  const [showArrows, setShowArrows] = useState(false);

  const handlePosterClick = (video) => {

    console.log(video);
    
      setShowVideo(video);

    
    
  };

  const handleCancelClick = () => {
    setShowVideo(null);
  };

  const mouseEnter = (episode) => {
    setHoverImage(episode);
  };

  const mouseLeave = () => {
    setHoverImage(null);
  };

  const scrollPosters = (scrollOffset) => {
    const postersContainer = document.querySelector('.posters');
    postersContainer.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

  const handleRowMouseEnter = () => {
    setShowArrows(true);
  };

  const handleRowMouseLeave = () => {
    setShowArrows(false);
  };

  return (
    <div className='row' onMouseEnter={handleRowMouseEnter} onMouseLeave={handleRowMouseLeave}>
      <h2 className='titlee'>{hoverImage || 'Season 1'}</h2>
      <div className='posters'>
        {SoneData.map((sone) => (
          <div key={sone.id}>
            <img
              className='poster'
              src={sone.image}
              alt=''
              onClick={() => handlePosterClick(sone.vedio)}
              onMouseEnter={() => mouseEnter(sone.episode)}
              onMouseLeave={mouseLeave}
            />
          </div>
        ))}
      </div>

      {showVideo && (
        <div className="video-container">
          <button className='cancel' onClick={handleCancelClick}>
            X
          </button>
          <video controls width="100%" height="100%" autoPlay>
            <source src={showVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {showArrows && (
        <>
          <div className='arrow left-arrow' onClick={() => scrollPosters(-100)}>
            <FaChevronLeft />
          </div>
          <div className='arrow right-arrow' onClick={() => scrollPosters(100)}>
            <FaChevronRight />
          </div>
        </>
      )}
    </div>
  );
}

export default RowPost1;
