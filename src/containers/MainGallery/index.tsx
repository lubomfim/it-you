import { GalleryTitle, MainGalleryGrid, MainGalleryWrapper } from './index.styled';

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
    <MainGalleryWrapper>
      <MainGalleryGrid>
        <GalleryTitle>Connect people & spaces</GalleryTitle>
        {data.map((el) => {
          return (
            <>
              <GridImage card={el} />
            </>
          );
        })}
        {!listCards.length && (
          <div className='button'>
            <Button handleClick={populateMoreCards}>Button</Button>
          </div>
        )}
      </MainGalleryGrid>
      <div style={{ paddingBottom: 100 }}>
        {listCards &&
          listCards.map((cards) => {
            return (
              <>
                <ListGallery cards={cards} />;
              </>
            );
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
