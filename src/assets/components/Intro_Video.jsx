import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import introDesktopVideo from '../entry-desktop.mp4';

// Styled Component for Fullscreen Video
const FullScreenVideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 9999;
  display: ${({ isPlaying }) => (isPlaying ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  opacity: ${({ isFadingOut }) => (isFadingOut ? 0 : 1)};
  transition: opacity 1s ease-in-out; /* Smooth fade-out transition */

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IntroVideo = ({ onVideoEnd }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Handle video end and timeout fallback
  useEffect(() => {
    const fallbackTimeout = setTimeout(() => handleVideoEnd(), 10000); // 10 seconds fallback
    return () => clearTimeout(fallbackTimeout);
  }, []);

  const handleVideoEnd = () => {
    setIsFadingOut(true); // Start fade-out
    setTimeout(() => {
      setIsVideoPlaying(false); // Hide after fade-out
      if (onVideoEnd) onVideoEnd();
    }, 1000); // Match the fade-out duration
  };

  return (
    <FullScreenVideoWrapper isPlaying={isVideoPlaying} isFadingOut={isFadingOut}>
      <video autoPlay muted onEnded={handleVideoEnd}>
        <source src='https://res.cloudinary.com/dqdtbavzj/video/upload/f_auto:video,q_auto/xp1zvfrrrctojm9jdvkj' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FullScreenVideoWrapper>
  );
};

export default IntroVideo;
