import ImageItem from '@components/image_item';
import './style/index.scss';
import TabMenu from '@components/tab_menu';
import { useState } from 'react';
import profile from '@assets/pictures/example.png';
import Arrow from 'toSvg/Colorful_Arrow.svg?icon';
import Carousel from 'react-simply-carousel';

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
interface LargeImagePanelProps {}
export default function LargeImagePanel({}: LargeImagePanelProps) {
  //API fetch images
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="large-image-panel">
      <TabMenu items={['New', 'Trending']} borderBottom={false} />

      <Carousel
        disableSwipeByMouse={true}
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
          <ImageItem key={index} {...image} id={index} width={400} />
        ))}
      </Carousel>
    </div>
  );
}
