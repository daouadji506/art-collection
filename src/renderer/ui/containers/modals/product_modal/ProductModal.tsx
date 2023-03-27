import BorderSeparator from '@components/border_separator';
import './style/index.scss';
import TextPair from '@components/text_pair/TextPair';
import { color } from '@assets/styles/color';
import TextButton from '@components/buttons/text_button';
import Buy from 'toSvg/buy.svg?icon';
import ModalContainer from '@components/modal_container';
import { useCheckoutStore } from '@stores/checkoutStore';
interface ProductModalProps {
  id: number;
  url: string;
  alt?: string;
  title: string;
  artist: string;
  resolution: string;
  price: number;
}
export default function ProductModal({
  url,
  alt,
  title,
  id,
  artist,
  resolution,
  price,
}: ProductModalProps) {
  const { addToCart } = useCheckoutStore();
  return (
    <ModalContainer>
      <div className="product-modal">
        <div className="image-item-wrapper">
          <img src={url} alt={alt} />
        </div>
        <BorderSeparator
          direction="horizontal"
          color="rgba(255, 255, 255, 0.07)"
          borderWidth={2}
        />
        <div className="footer-container">
          <div className="footer-info-div">
            <TextPair
              gap={2}
              first={{
                text: 'Title',
                fontSize: 12,
                fontWeight: 500,
                fontColor: color.textGray,
              }}
              second={{
                text: title,
                fontSize: 14,
                fontWeight: 600,
                fontColor: color.textColor,
              }}
            />
            <TextPair
              gap={2}
              first={{
                text: 'Artist',
                fontSize: 12,
                fontWeight: 500,
                fontColor: color.textGray,
              }}
              second={{
                text: artist,
                fontSize: 14,
                fontWeight: 600,
                fontColor: color.textColor,
              }}
            />
            <TextPair
              gap={2}
              first={{
                text: 'Resolution',
                fontSize: 12,
                fontWeight: 500,
                fontColor: color.textGray,
              }}
              second={{
                text: resolution,
                fontSize: 14,
                fontWeight: 600,
                fontColor: color.textColor,
              }}
            />
            <TextPair
              gap={2}
              first={{
                text: 'Price',
                fontSize: 12,
                fontWeight: 500,
                fontColor: color.textGray,
              }}
              second={<span className="colorful-span">{price} $</span>}
            />
          </div>
          <TextButton
            text="Buy"
            Icon={{
              svg: <Buy width={15} height={15} />,
              iconColor: color.textColor,
              iconType: 'stroke',
            }}
            fontWeight={600}
            onPress={() => {
              addToCart({ id: id, title: title, price: price, url: url });
            }}
            fontSize={14}
            radius={9}
            width={'fit-content'}
            css={{
              backgroundImage: color.primary,
            }}
          />
        </div>
      </div>
    </ModalContainer>
  );
}
