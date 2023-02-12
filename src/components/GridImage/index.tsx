import { GalleryImage, GalleryImageWrapper } from './index.styled';

type GridImageProps = {
  img: string;
  title: string;
};

const GridImage = ({ img, title }: GridImageProps) => {
  return (
    <GalleryImageWrapper>
      <GalleryImage src={`./assets/${img}`} alt={title} />
    </GalleryImageWrapper>
  );
};

export default GridImage;
