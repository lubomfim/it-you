import { GalleryTitle, MainGalleryGrid, MainGalleryWrapper } from './index.styled';

import GridImage from 'components/GridImage';
import Button from 'components/Button';
import { useState, useEffect } from 'react';
import ListGallery from 'containers/ListGallery';
import axios from 'axios';

export type CardProps = {
  title: string;
  photo: string;
  description: string;
};

const MainGallery = () => {
  const [mainCards, setMainCards] = useState<CardProps[]>([]);
  const [listCards, setListCards] = useState<CardProps[][]>([]);

  const getInitialCards = async () => {
    try {
      const { data }: { data: CardProps[] } = await axios.get('data.json');

      setMainCards(data);
    } catch (err) {
      alert('Try later');
    }
  };

  const populateMoreCards = async () => {
    try {
      const { data }: { data: CardProps[] } = await axios.get('data.json');
      const getCards = data.slice(0, 4);

      setListCards((old) => [...old, getCards]);
    } catch (err) {
      alert('Try later');
    }
  };

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [listCards]);

  useEffect(() => {
    getInitialCards();
  }, []);

  return (
    <MainGalleryWrapper>
      <MainGalleryGrid>
        <GalleryTitle>Connect people & spaces</GalleryTitle>
        {mainCards?.map((el) => {
          return <GridImage card={el} key={el.title} />;
        })}
        {!listCards.length && (
          <div className='button'>
            <Button handleClick={populateMoreCards}>Button</Button>
          </div>
        )}
      </MainGalleryGrid>
      <div style={{ paddingBottom: 100 }}>
        {listCards &&
          listCards.map((cards, index) => {
            return <ListGallery cards={cards} key={index} />;
          })}
        {!!listCards.length && (
          <div className='button-footer'>
            <Button handleClick={populateMoreCards}>Load more</Button>
          </div>
        )}
      </div>
    </MainGalleryWrapper>
  );
};

export default MainGallery;
