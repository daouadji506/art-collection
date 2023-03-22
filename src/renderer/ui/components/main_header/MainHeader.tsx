import IconicButton from '@components/buttons/iconic_button';
import StoreBasket from 'toSvg/store_basket.svg';
import './style/index.scss';
import color from '@assets/styles/color';
interface MainHeaderProps {}
export default function MainHeader({}: MainHeaderProps) {
  return (
    <div className="main-header">
      <div className="title-span-div">
        <span className="colorful-span">Cool</span>
        <span>Art</span>
      </div>
      <div className="header-controls">
        <div className="count-badge">
          <span>1</span>
        </div>
        <IconicButton
          Icon={StoreBasket}
          iconSize={20}
          backgroundColor={color.lighten}
        ></IconicButton>
      </div>
    </div>
  );
}
