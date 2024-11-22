import React, { useState, useRef } from 'react';
import IntroVideo from './assets/components/Intro_Video';
import MiddleVideo from './assets/components/Middle_Video';
import styled from 'styled-components';
import './App.css';

const MainContentWrapper = styled.div`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  position: ${({ isVisible }) => (isVisible ? 'relative' : 'absolute')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

function App() {
  const [currentView, setCurrentView] = useState('intro'); // 'intro', 'middle', or 'main'
  const mainContentRef = useRef(null);

  const handleIntroVideoEnd = () => {
    setCurrentView('middle');
  };

  const handleExploreClick = () => {
    setCurrentView('main');
    setTimeout(() => {
      mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 300); // Slight delay for smooth transition
  };

  return (
    <>
      {/* Render Intro Video */}
      {currentView === 'intro' && <IntroVideo onVideoEnd={handleIntroVideoEnd} />}

      {/* Render Middle Video */}
      {currentView === 'middle' && <MiddleVideo onExploreClick={handleExploreClick} />}

      {/* Main Content */}
      <MainContentWrapper 
        ref={mainContentRef}
        isVisible={currentView === 'main'}
      >
        {/* Add your main content here */}
        <h1>Main Content Goes Here</h1>
        <p>Welcome to the main section of your app!</p>
      </MainContentWrapper>
    </>
  );
}

export default App;
