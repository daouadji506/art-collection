import TextPair from '@components/text_pair/TextPair';
import './style/index.scss';
import { color } from '@assets/styles/color';
import trashCan from 'toSvg/trash_can.svg?icon';
import IconicButton from '@components/buttons/iconic_button';
import { useCheckoutStore } from '@stores/checkoutStore';
interface CartItemProps {
  id: number;
  url: string;
  alt?: string;
  title: string;
  price: number;
}
export default function CartItem({
  id,
  url,
  alt,
  title,
  price,
}: CartItemProps) {
  const { removeFromCart } = useCheckoutStore();
  return (
    <>
      <div className="border-wrap">
        <div className="cart-item">
          <div className="image-item-wrapper">
            <img src={url} alt={alt} />
          </div>
          <div className="info-div">
            <TextPair
              gap={2}
              first={{
                text: 'Title',
                fontSize: 12,
                fontWeight: 500,
                fontColor: color.text_gray,
              }}
              second={{
                text: title,
                fontSize: 14,
                fontWeight: 600,
                fontColor: color.white,
                maxWidth: 90,
              }}
            />
            <TextPair
              gap={2}
              first={{
                text: 'Price',
                fontSize: 12,
                fontWeight: 500,
                fontColor: color.text_gray,
              }}
              second={<span className="colorful-span">{price} $</span>}
            />
          </div>
          <IconicButton
            Icon={trashCan}
            onPress={() => {
              removeFromCart(id);
            }}
            width={25}
            backgroundColor={color.hot_red}
            iconColor={color.white}
            className="trash-button"
          />
        </div>
      </div>
    </>
  );
}
