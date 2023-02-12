import styled, { keyframes } from 'styled-components';

export const GridImageWrapper = styled.div`
  cursor: pointer;
  border-radius: 4px;
  background-color: black;
  position: relative;
  overflow: hidden;

  &:hover .description {
    display: block;
  }

  img {
    border-radius: 4px;
  }
`;

export const GalleryImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: saturate(130%);
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const GalleryImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
  transform: scale(1.3);
`;

export const GallerySubtitle = styled.h3`
  color: white;
  position: absolute;
  top: 20px;
  left: 18px;
  font-size: 2rem;
  z-index: 8;
  font-weight: normal;
  letter-spacing: -4%;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  width: 24px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    left: 100px
  }

  80% {
    opacity: 0.8
  }

  100% {
    opacity: 1;
    left: 0px
  }

`;

export const DescriptionHover = styled.div`
  position: absolute;
  z-index: 6;
  width: 100%;
  height: 100%;
  background: #4a52ff;
  top: 0px;
  left: 100px;
  animation: ${fadeIn} 0.5s ease forwards;
  display: none;
  border-radius: 4px;

  p {
    color: white;
    padding: 60px 18px;
    font-size: 1.6rem;
    font-weight: normal;

    @media (max-width: 1000px) {
      padding: 50px
      font-size: 1.2rem;
    }

    @media (max-width: 700px) {
      font-size: 1rem;
    }
  }
`;
