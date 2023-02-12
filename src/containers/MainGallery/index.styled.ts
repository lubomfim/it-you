import styled from 'styled-components';

export const MainGalleryWrapper = styled.main`
  .button-footer {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1300px) {
    max-width: 98%;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const MainGalleryGrid = styled.div`
  padding-top: 99px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 210px 90px 74px 111px 400px 311px;
  grid-template-rows: 110px 259px 168px 30px 138px;
  gap: 21px;
  position: relative;

  > div {
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

      img:not(.arrow) {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1) scale(1.3);
      }
    }

    &:nth-child(4) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;

      img:not(.arrow) {
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

      img:not(.arrow) {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1) scale(1.3);
      }
    }

    &:nth-child(8) {
      grid-column-start: 2;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 6;

      img:not(.arrow) {
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

  @media (max-width: 1300px) {
    grid-template-columns: 2fr 0.9fr 0.7fr 1fr 4fr 3fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 2fr 1fr 4fr 220px;

    > div {
      &:nth-child(2) {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-end: 3;
        grid-row-start: 2;
      }

      &:nth-child(3) {
        grid-column-start: 4;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
      }

      &:nth-child(4) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
      }

      &:nth-child(5) {
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
      }

      &:nth-child(6) {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-row-end: 6;
      }

      &:nth-child(7) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 6;
      }

      &:nth-child(8) {
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 6;
      }
    }
    .button {
      position: absolute;
      bottom: -70px;
      right: 10px;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 50px 200px 168px 30px 100px 138px;
    gap: 10px;
    margin-bottom: 10px;
    padding-top: 20px;

    > div {
      &:nth-child(2) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-end: 3;
        grid-row-start: 2;
      }

      &:nth-child(3) {
        grid-column-start: 4;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
      }

      &:nth-child(4) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
      }

      &:nth-child(5) {
        grid-row-start: 6;
        grid-row-end: 7;
      }

      &:nth-child(6) {
        grid-column-start: 4;
        grid-column-end: 3;
      }

      &:nth-child(7) {
        grid-row-start: 6;
        grid-row-end: 7;
      }

      &:nth-child(8) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 6;
      }
    }

    .button {
      bottom: -210px;
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

  @media (max-width: 700px) {
    font-size: 1.8rem;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
