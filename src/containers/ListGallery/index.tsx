import { CardProps } from 'containers/MainGallery';
import { ListGalleryWrapper } from './index.styled';
import GridImage from 'components/GridImage';

const ListGallery = ({ cards }: { cards: CardProps[] }) => {
  return (
    <ListGalleryWrapper>
      {cards.map((el) => {
        return (
          <>
            <div>
              <GridImage img={el.photo} title={el.title} />
            </div>
          </>
        );
      })}
    </ListGalleryWrapper>
  );
};

export default ListGallery;
