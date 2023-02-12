import styled, { keyframes } from 'styled-components';

const fadeImage = keyframes`
  0% {
    bottom: -20px;
    opacity: 0
  }

  100% {
    bottom: 0px;
    opacity: 1
  }

`;

export const ListGalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  > div {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;

    img {
      transform: none;
      position: relative;
      animation: ${fadeImage} 0.5s ease;
    }
  }
`;
