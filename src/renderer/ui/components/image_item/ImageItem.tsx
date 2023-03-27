import './style/index.scss';
import IconicButton from '@components/buttons/iconic_button';
import { color } from '@assets/styles/color';
import Linker from 'toSvg/money_link.svg?icon';
import EmptyHart from 'toSvg/empty_heart.svg?icon';
import FullHart from 'toSvg/full_heart.svg?icon';
import Buy from 'toSvg/buy.svg?icon';
import { useCheckoutStore } from '@stores/checkoutStore';
import { DEFAULT_MODAL, modal } from '@libs/overlay';
import ProductModal from '@containers/modals/product_modal';

interface ImageItemProps {
  url: string;
  height?: number;
  width?: number;
  alt?: string;
  onLike?: () => void;
  id: number;
  liked?: boolean;
  name: string;
  price: number;
}
export default function ImageItem({
  url,
  alt,
  height,
  width,
  onLike,
  id,
  liked = false,
  name,
  price,
}: ImageItemProps) {
  const { addToCart } = useCheckoutStore();
  //TODO add id
  return (
    <div
      className="image-item"
      css={{ height, width }}
      onClick={() => {
        modal(
          () => (
            <ProductModal
              id={id}
              alt={alt}
              url={url}
              price={price}
              title={name}
              artist={'Someone'}
              resolution={'1900x600'}
            />
          ),
          DEFAULT_MODAL,
        ).open();
      }}
    >
      <div className="image-item-wrapper">
        <img src={url} alt={alt} />
        <div className="hover-container">
          <div className="header-container">
            <IconicButton
              Icon={liked ? FullHart : EmptyHart}
              onPress={onLike}
              iconSize={25}
            />
            <IconicButton
              Icon={Buy}
              onPress={() => {
                //TODO supply real data

                addToCart({ id: id, name: name, price: price, url: url });
              }}
              afterBgColor={color.darken}
              iconSize={25}
            />
          </div>
          <div className="footer-container">
            <span>{name}</span>
            <div className="money-div">
              <Linker />
              <span>{price} $</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
