import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function ImageCaroussell({ images }) {
  return (
    <ImageGallery
      items={images}
      lazyLoad={true}
      flickThreshold={4}
      showPlayButton={false}
      showBullets={true}
      showThumbnails={false}
      disableThumbnailScroll={true}
    />
  );
}
