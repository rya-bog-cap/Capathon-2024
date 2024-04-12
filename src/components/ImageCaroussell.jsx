import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: './DSC00138.JPG',
    thumbnail: './DSC00138.JPG',
  },
  {
    original: './DSC00172.JPG',
    thumbnail: './DSC00172.JPG',
  },
  {
    original: './DSC01442.JPG',
    thumbnail: './DSC01442.JPG',
  },
];

export default function ImageCaroussell() {
  return <ImageGallery items={images} />;
}
