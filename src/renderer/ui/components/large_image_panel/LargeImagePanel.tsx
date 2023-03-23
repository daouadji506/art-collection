import ImageItem from '@components/image_item';
import './style/index.scss';
import TabMenu from '@components/tab_menu';
import { useState } from 'react';
import profile from '@assets/pictures/example.png';
import Arrow from 'toSvg/Arrow.svg?icon';
import Carousel from 'react-simply-carousel';

const imageArray = [
  {
    url: profile,
    alt: 'profile',

    name: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    name: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    name: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    name: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    name: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    name: 'harnan',
    price: 500,
  },
  {
    url: profile,
    alt: 'profile',

    name: 'harnan',
    price: 500,
  },
];
interface LargeImagePanelProps {}
export default function LargeImagePanel({}: LargeImagePanelProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="large-image-panel">
      <TabMenu items={['New', 'Trending']} borderBottom={false} />

      <Carousel
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          className: 'arrow-btn',
          children: <Arrow />,
        }}
        backwardBtnProps={{
          className: 'arrow-btn',
          children: <Arrow css={{ rotate: '180deg' }} />,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
        itemsListProps={{ className: 'carousel-items' }}
      >
        {imageArray.map((image, index) => (
          <ImageItem key={index} {...image} width={400} />
        ))}
      </Carousel>
    </div>
  );
}
