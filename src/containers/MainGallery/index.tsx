import {
  GallerySubtitle,
  GalleryTitle,
  IconWrapper,
  MainGalleryWrapper,
  DescriptionHover,
} from './index.styled';

import data from './data.json';
import GridImage from 'components/GridImage';
import Button from 'components/Button';
import { useState, useEffect } from 'react';
import ListGallery from 'containers/ListGallery';

export type CardProps = {
  title: string;
  photo: string;
  description: string;
};

const MainGallery = () => {
  const [mainCards, setMainCards] = useState<CardProps[]>([]);
  const [listCards, setListCards] = useState<CardProps[][]>([]);
  const [listQuantity, setListQuantity] = useState(0);

  const populateMoreCards = async () => {
    try {
      const getCards = data.slice(0, 4);

      setListCards((old) => [...old, getCards]);
    } catch (err) {
      alert('Try later');
    }
  };

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [listCards]);

  return (
    <>
      <MainGalleryWrapper>
        <GalleryTitle>Connect people & spaces</GalleryTitle>
        {data.map((el) => {
          return (
            <div key={el.title}>
              <GallerySubtitle>{el.title}</GallerySubtitle>
              <GridImage img={el.photo} title={el.title} />
              <IconWrapper>
                <img src='./assets/arrow.svg' alt='arrow' />
              </IconWrapper>
              <DescriptionHover className='description'>
                <p>{el.description}</p>
              </DescriptionHover>
            </div>
          );
        })}
        {!listCards.length && (
          <div className='button'>
            <Button handleClick={populateMoreCards}>Button</Button>
          </div>
        )}
      </MainGalleryWrapper>
      <div style={{ paddingBottom: 100 }}>
        {listCards &&
          listCards.map((cards) => {
            return (
              <>
                <ListGallery cards={cards} />;
              </>
            );
          })}
        {!!listCards.length && <Button handleClick={populateMoreCards}>Load more</Button>}
      </div>
    </>
  );
};

export default MainGallery;
