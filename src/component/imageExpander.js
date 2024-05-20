// src/components/ImageExpander.js

import React, { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
  transition: transform 0.3s ease;
`;

const ExpandedImage = styled.img`
  width: 250px;
  height: 270px;
  transition: transform 0.3s ease;
`;

const ImageExpander = ({ src, alt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <ImageContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: isExpanded ? 'scale(1.2)' : 'scale(1)' }}
    >
      <ExpandedImage src={src} alt={alt} />
    </ImageContainer>
  );
};

export default ImageExpander;
