import { CardProps } from 'containers/MainGallery';
import { ListGalleryWrapper } from './index.styled';
import GridImage from 'components/GridImage';

const ListGallery = ({ cards }: { cards: CardProps[] }) => {
  return (
    <ListGalleryWrapper>
      {cards.map((el, index) => {
        return <GridImage card={el} key={index} />;
      })}
    </ListGalleryWrapper>
  );
};

export default ListGallery;
