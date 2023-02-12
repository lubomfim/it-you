import styled from 'styled-components';

export const GalleryImageWrapper = styled.div`
  height: 100%;
  width: 100%;

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
