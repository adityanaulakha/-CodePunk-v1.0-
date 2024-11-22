import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import introDesktopVideo from '../entry-desktop.mp4'; // Replace with your desktop video path

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

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IntroVideo = ({ onVideoEnd }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Handle video end and timeout fallback
  useEffect(() => {
    const fallbackTimeout = setTimeout(() => setIsVideoPlaying(false), 10000); // 10 seconds fallback
    return () => clearTimeout(fallbackTimeout);
  }, []);

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    if (onVideoEnd) onVideoEnd();
  };

  return (
    <FullScreenVideoWrapper isPlaying={isVideoPlaying}>
      <video autoPlay muted onEnded={handleVideoEnd}>
        <source src={introDesktopVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FullScreenVideoWrapper>
  );
};

export default IntroVideo;
