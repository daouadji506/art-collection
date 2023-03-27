import IconicButton from '@components/buttons/iconic_button';
import StoreBasket from 'toSvg/store_basket.svg';
import './style/index.scss';
import { color } from '@assets/styles/color';
import { DEFAULT_MODAL, modal } from '@libs/overlay';
import CheckoutModal from '@containers/modals/checkout_modal';
import { useCheckoutStore } from '@stores/checkoutStore';
interface MainHeaderProps {}
export default function MainHeader({}: MainHeaderProps) {
  const cart = useCheckoutStore((state) => state.cart);
  //TODO favorites button and favorites modal
  return (
    <div className="main-header">
      <div className="title-span-div">
        <span className="colorful-span">Cool</span>
        <span>Art</span>
      </div>
      <div className="header-controls">
        <div className="count-badge">
          <span>{cart.length}</span>
        </div>
        <IconicButton
          Icon={StoreBasket}
          iconSize={20}
          backgroundColor={color.lighten}
          onPress={() => {
            modal(() => <CheckoutModal />, {
              ...DEFAULT_MODAL,
              width: '80%',
              closeBtn: 'outer',
            }).open();
          }}
        ></IconicButton>
      </div>
    </div>
  );
}
