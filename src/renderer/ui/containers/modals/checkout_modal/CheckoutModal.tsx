import ModalContainer from '@components/modal_container';
import './style/index.scss';
import TextButton from '@components/buttons/text_button';
import Buy from 'toSvg/buy.svg?icon';
import color from '@assets/styles/color';
import profile from '@assets/pictures/example.png';
import CartItem from '@components/cart_item';

const checkoutArray = [
  {
    url: profile,
    alt: 'profile',
    title: 'Title',
    price: 100,
  },
  {
    url: profile,
    alt: 'profile',
    title: 'Cool image',
    price: 100,
  },
  {
    url: profile,
    alt: 'profile',
    title: 'Title',
    price: 100,
  },
  {
    url: profile,
    alt: 'profile',
    title: 'Title',
    price: 100,
  },
  {
    url: profile,
    alt: 'profile',
    title: 'Cool image',
    price: 100,
  },
  {
    url: profile,
    alt: 'profile profile profile profile',
    title: 'profile profile profile profile',
    price: 100,
  },
  {
    url: profile,
    alt: 'profile',
    title: 'Title',
    price: 2000,
  },
  {
    url: profile,
    alt: 'profile',
    title: 'Cool image',
    price: 100,
  },
  {
    url: profile,
    alt: 'profile',
    title: 'Title',
    price: 100,
  },
  {
    url: profile,
    alt: 'profile',
    title: 'Title',
    price: 100,
  },
];

interface CheckoutModalProps {}
export default function CheckoutModal({}: CheckoutModalProps) {
  return (
    <ModalContainer
      className="checkout-modal"
      title="Cart"
      buttonNode={
        <div className="total-div">
          <span>Total:</span>
          <span>0 $</span>
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
          css={{
            backgroundImage:
              'linear-gradient(84.23deg, #DC519C 12.84%, #AE4EF5 57.33%, #6D7AFB 99.41%);',
          }}
        />
      }
    >
      <div className="checkout-modal-content">
        {checkoutArray.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
      </div>
    </ModalContainer>
  );
}
