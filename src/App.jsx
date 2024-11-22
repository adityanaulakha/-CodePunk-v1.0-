import React, { useState, useRef } from 'react';
import IntroVideo from './assets/components/Intro_Video';
import MiddleVideo from './assets/components/Middle_Video';
import styled from 'styled-components';
import './App.css';

const MainContentWrapper = styled.div`
  scroll-margin-top: 20px;
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  position: ${({ isVisible }) => isVisible ? 'relative' : 'absolute'};
`;

function App() {
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const [showMiddleVideo, setShowMiddleVideo] = useState(false);
  const mainContentRef = useRef(null);

  const handleIntroVideoEnd = () => {
    setShowIntroVideo(false);
    setShowMiddleVideo(true);
  };

  const handleExploreClick = () => {
    setShowMiddleVideo(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {showIntroVideo && <IntroVideo onVideoEnd={handleIntroVideoEnd} />}
      
      {showMiddleVideo && (
        <MiddleVideo onExploreClick={handleExploreClick} />
      )}
      
      {/* Main Content Section Removed */}
      <MainContentWrapper 
        ref={mainContentRef}
        isVisible={!showIntroVideo && !showMiddleVideo}
      />
    </>
  );
}

export default App;
