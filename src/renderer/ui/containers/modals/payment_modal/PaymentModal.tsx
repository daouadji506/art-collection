import ModalContainer from '@components/modal_container';
import './style/index.scss';
import Header from '@components/header';
import TextButton from '@components/buttons/text_button';
import color from '@assets/styles/color';
import Input from '@components/inputs/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Inputix } from '@components/inputs/input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCheckoutStore } from '@stores/checkoutStore';

interface Inputs {
  cardNumber: number;
  date: Date;
  cvc: number;
}
const schema = z.object({
  cardNumber: z.number().gt(0, 'Card number is required'),
  date: z.date().min(new Date(), 'Date is required'),
  cvc: z.number().gt(0, 'cvc is required'),
});

interface PaymentModalProps {}
export default function PaymentModal({}: PaymentModalProps) {
  const totalPrice = useCheckoutStore((state) => state.totalPrice);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {},
  });
  return (
    <ModalContainer className="payment-modal" title="Payment">
      <div className="payment-modal-content">
        <div className="left-container">
          <div className="tip-div">
            <Header
              padding={0}
              title={{ text: 'Make the payment', fontSize: 15 }}
            />
            <span className="tip-span">
              To Finalize your purchase, Kindly complete your payment using a
              valid credit card
            </span>
          </div>

          <Inputix control={control}>
            <div className="inputs-container">
              <Input
                name="cardNumber"
                type="text"
                placeholder="Card number"
                fillContainer
              />
              <Input name="date" type="date" placeholder="Date" />
              <Input name="cvc" type="text" placeholder="CVC" />
            </div>
          </Inputix>
        </div>
        <div className="right-container">
          <div className="total-info-div">
            <span className="total-info-span">You have to pay:</span>
            <span className="total-info-span">{totalPrice} $</span>
          </div>
          <TextButton
            text="Pay now"
            width={'100%'}
            fontWeight={600}
            fontSize={14}
            radius={9}
            backgroundColor={color.primary}
          />
        </div>
      </div>
    </ModalContainer>
  );
}
