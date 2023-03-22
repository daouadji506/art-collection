import MainHeader from '@components/main_header';
import './style/index.scss';
import TabComponent from '@components/tab_component';
import Trending from 'toSvg/Trending.svg?icon';

interface MainLayerProps {}
export default function MainLayer({}: MainLayerProps) {
  return (
    <div className="main-layer">
      <MainHeader />
      <TabComponent
        borderBottom={false}
        items={[
          { label: { text: 'New' }, content: <div></div> },
          {
            label: {
              text: 'Trending',
              icon: Trending,
            },
            content: <div></div>,
          },
        ]}
      />
    </div>
  );
}
