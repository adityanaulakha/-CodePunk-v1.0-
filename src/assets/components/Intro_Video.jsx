import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import introDesktopVideo from '../entry-desktop.mp4'; // Replace with your desktop video path
import introMobileVideo from '../entry-mobile.mp4';  // Replace with your mobile video path

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
  const [videoSource, setVideoSource] = useState(introDesktopVideo);

  // Dynamically select the video source based on viewport size
  useEffect(() => {
    const updateVideoSource = () => {
      setVideoSource(
        window.matchMedia('(max-width: 768px)').matches ? introMobileVideo : introDesktopVideo
      );
    };

    updateVideoSource();
    window.addEventListener('resize', updateVideoSource);

    return () => {
      window.removeEventListener('resize', updateVideoSource);
    };
  }, []);

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
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FullScreenVideoWrapper>
  );
};

export default IntroVideo;
