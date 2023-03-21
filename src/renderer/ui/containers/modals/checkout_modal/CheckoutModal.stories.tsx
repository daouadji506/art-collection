import { ComponentProps } from 'react';
import type { Story } from '@storybook/react';
import CheckoutModal from './CheckoutModal';
export default {
  title: 'harnan/CheckoutModal',
  component: CheckoutModal,
};
const Template: Story<ComponentProps<typeof CheckoutModal>> = (args) => (
  <CheckoutModal {...args} />
);
export const FirstStory = Template;
FirstStory.args = {
  total: 12500,
};
