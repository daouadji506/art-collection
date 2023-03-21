import { ComponentProps } from 'react';
import type { Story } from '@storybook/react';
import PaymentModal from './PaymentModal';
export default {
  title: 'harnan/PaymentModal',
  component: PaymentModal,
};
const Template: Story<ComponentProps<typeof PaymentModal>> = (args) => (
  <PaymentModal {...args} />
);
export const FirstStory = Template;
FirstStory.args = {};
