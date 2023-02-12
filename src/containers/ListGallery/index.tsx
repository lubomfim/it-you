import { CardProps } from 'containers/MainGallery';
import { ListGalleryWrapper } from './index.styled';
import GridImage from 'components/GridImage';

const ListGallery = ({ cards }: { cards: CardProps[] }) => {
  return (
    <ListGalleryWrapper>
      {cards.map((el) => {
        return (
          <>
            <GridImage card={el} />
          </>
        );
      })}
    </ListGalleryWrapper>
  );
};

export default ListGallery;
