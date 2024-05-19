import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function ImageCaroussell({ images }) {
  return (
    <ImageGallery items={images} flickThreshold={4} autoPlay={true} disableThumbnailScroll={true} />
  );
}
