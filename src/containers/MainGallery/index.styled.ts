import styled, { keyframes } from 'styled-components';

export const MainGalleryWrapper = styled.main`
  padding-top: 99px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 215px 99px 74px 111px 421px 311px;
  grid-template-rows: 110px 259px 168px 30px 138px;
  gap: 21px;

  > div {
    border-radius: 4px;
    background-color: black;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:hover .description {
      display: block;
    }

    &:nth-child(2) {
      grid-column-start: 4;
      grid-column-end: 6;
      grid-row-end: 3;
      grid-row-start: 1;
    }

    &:nth-child(3) {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 2;

      img {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1) scale(1.3);
      }
    }

    &:nth-child(4) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;

      img {
        position: relative;
        left: 80px;
      }
    }

    &:nth-child(5) {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 4;
    }

    &:nth-child(6) {
      grid-column-start: 5;
      grid-column-end: 6;
      grid-row-start: 3;
      grid-row-end: 6;
    }

    &:nth-child(7) {
      grid-column-start: 6;
      grid-column-end: 7;
      grid-row-start: 3;
      grid-row-end: 5;

      img {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1) scale(1.3);
      }
    }

    &:nth-child(8) {
      grid-column-start: 2;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 6;

      img {
        transform: scale(2.8);
      }
    }
  }

  .button {
    background: #191919;
    grid-column-start: 6;
    grid-row-start: 5;
    grid-row-end: 6;
    cursor: auto;
    &::before {
      display: none;
    }
  }
`;

export const GalleryTitle = styled.h2`
  color: white;
  font-size: 3.2rem;
  font-weight: normal;
  grid-column-start: 1;
  grid-column-end: 4;
  align-self: end;
  padding-bottom: 11px;
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

  p {
    color: white;
    padding: 60px 18px;
    font-size: 1.6rem;
    font-weight: normal;
  }
`;
