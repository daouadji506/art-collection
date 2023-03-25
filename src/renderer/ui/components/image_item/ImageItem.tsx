import './style/index.scss';
import IconicButton from '@components/buttons/iconic_button';
import { color } from '@assets/styles/color';
import Linker from 'toSvg/money_link.svg?icon';
import EmptyHart from 'toSvg/empty_heart.svg?icon';
import FullHart from 'toSvg/full_heart.svg?icon';
import Buy from 'toSvg/buy.svg?icon';
import { DEFAULT_MODAL, modal } from '@libs/overlay';
import ProductModal from '@containers/modals/product_modal';

interface ImageItemProps {
  url: string;
  height?: number;
  width?: number;
  alt?: string;
  onLike?: () => void;

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

  liked = false,
  name,
  price,
}: ImageItemProps) {
  return (
    <div className="image-item" css={{ height, width }}>
      <div className="image-item-wrapper">
        <img src={url} alt={alt} />{' '}
        <div className="hover-container">
          <div className="header-container">
            <IconicButton
              Icon={liked ? FullHart : EmptyHart}
              onPress={onLike}
              iconSize={25}
              // iconAfterColor={color.hot_red}
              // iconColor={liked ? color.hot_red : undefined}
            />
            <IconicButton
              Icon={Buy}
              onPress={() => {
                //TODO supply real data
                modal(
                  () => (
                    <ProductModal
                      alt={alt}
                      url={url}
                      price={price}
                      title={name}
                      artist={'Someone'}
                      resolution={'1900x600'}
                      onBuy={() => {}}
                    />
                  ),
                  DEFAULT_MODAL,
                ).open();
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
