import ModalContainer from '@components/modal_container';
import './style/index.scss';
import TextButton from '@components/buttons/text_button';
import Buy from 'toSvg/buy.svg?icon';
import { color } from '@assets/styles/color';
import CartItem from '@components/cart_item';
import { FIT_MODAL, modal } from '@libs/overlay';
import PaymentModal from '../payment_modal';
import { useCheckoutStore } from '@stores/checkoutStore';

interface CheckoutModalProps {}
export default function CheckoutModal({}: CheckoutModalProps) {
  const checkoutState = useCheckoutStore((state) => state);
  return (
    <ModalContainer
      className="checkout-modal"
      title="Cart"
      overflowHidden
      buttonNode={
        <div className="total-div">
          <span>Total:</span>
          <span>{checkoutState.totalPrice} $</span>
        </div>
      }
      controls={
        <TextButton
          text="Checkout"
          Icon={{
            svg: <Buy width={15} height={15} />,
            iconColor: color.textColor,
            iconType: 'stroke',
          }}
          fontWeight={600}
          fontSize={14}
          radius={9}
          width={'100%'}
          backgroundColor={color.primary}
          onPress={() => {
            modal(() => <PaymentModal />, FIT_MODAL).open();
          }}
        />
      }
    >
      <div className="checkout-modal-content">
        {checkoutState.cart.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
      </div>
    </ModalContainer>
  );
}
