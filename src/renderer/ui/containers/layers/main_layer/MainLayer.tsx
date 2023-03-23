import MainHeader from '@components/main_header';
import './style/index.scss';
import { useState } from 'react';
import TabMenu from '@components/tab_menu';
import ImageItem from '@components/image_item';
import profile from '@assets/pictures/example.png';
import Arrow from 'toSvg/Arrow.svg?icon';
import Carousel from 'react-simply-carousel';
import ColorfulButton from '@components/buttons/colorful_button';
interface MainLayerProps {}
export default function MainLayer({}: MainLayerProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="main-layer">
      <MainHeader />

      <div className="tab-container">
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
              itemsToShow: 4,
              itemsToScroll: 2,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
          itemsListProps={{ className: 'carousel-items' }}
        >
          <ImageItem
            url={profile}
            alt="profile"
            height={400}
            width={300}
            name={'harnan'}
            price={5000}
          />

          <ImageItem
            url={profile}
            alt="profile"
            height={400}
            width={300}
            name={'harnan'}
            price={5000}
          />
          <ImageItem
            url={profile}
            alt="profile"
            height={400}
            width={300}
            name={'harnan'}
            price={5000}
          />
          <ImageItem
            url={profile}
            alt="profile"
            height={400}
            width={300}
            name={'harnan'}
            price={5000}
          />
          <ImageItem
            url={profile}
            alt="profile"
            height={400}
            width={300}
            name={'harnan'}
            price={5000}
          />
        </Carousel>
      </div>
      <ColorfulButton text="View all art" alignSelf="center" width={'70%'} />
    </div>
  );
}
