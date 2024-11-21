import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import introVideo from '../entry.mp4';

const FullScreenVideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 9999;
  display: ${({ isPlaying }) => (isPlaying ? "flex" : "none")};
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

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoPlaying(false), 10000); // Fallback timeout
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    onVideoEnd();
  };

  return (
    <FullScreenVideoWrapper isPlaying={isVideoPlaying}>
      <video autoPlay muted onEnded={handleVideoEnd}>
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FullScreenVideoWrapper>
  );
};

export default IntroVideo;