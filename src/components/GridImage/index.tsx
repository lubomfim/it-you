import { CardProps } from 'containers/MainGallery';
import {
  GalleryImage,
  GalleryImageWrapper,
  GallerySubtitle,
  IconWrapper,
  DescriptionHover,
  GridImageWrapper,
} from './index.styled';

type GridImageProps = {
  card: CardProps;
};

const GridImage = ({ card }: GridImageProps) => {
  return (
    <GridImageWrapper>
      <GallerySubtitle>{card.title}</GallerySubtitle>
      <GalleryImageWrapper>
        <GalleryImage src={`./assets/${card.photo}`} alt={card.title} />
      </GalleryImageWrapper>
      <IconWrapper>
        <img src='./assets/arrow.svg' alt='arrow' className='arrow' />
      </IconWrapper>
      <DescriptionHover className='description'>
        <p>{card.description}</p>
      </DescriptionHover>
    </GridImageWrapper>
  );
};

export default GridImage;
