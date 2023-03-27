import ColorfulButton from '@components/buttons/colorful_button';
import './style/index.scss';
import profile from '@assets/pictures/example.png';
import ImageItem from '@components/image_item';

const imageArray = [
  {
    url: profile,
    alt: 'profile',

    title: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    title: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    title: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    title: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    title: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    title: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    title: 'harnan',
    price: 500,
  },
];

interface ImageGalleryProps {}
export default function ImageGallery({}: ImageGalleryProps) {
  return (
    <div className="image-gallery">
      <ColorfulButton
        text="View all art"
        alignSelf="center"
        width={'70%'}
        padding={10}
      />
      <div className="images-container">
        {imageArray.map((image, index) => (
          <ImageItem key={index} {...image} id={index} />
        ))}
      </div>
    </div>
  );
}
