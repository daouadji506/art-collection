import { ComponentProps } from 'react';
import type { Story } from '@storybook/react';
import CartItem from './CartItem';
import profile from '@assets/pictures/example.png';
export default {
  title: 'harnan/CartItem',
  component: CartItem,
};
const Template: Story<ComponentProps<typeof CartItem>> = (args) => (
  <CartItem {...args} />
);
export const FirstStory = Template;
FirstStory.args = {
  url: profile,
  alt: 'profile',
  title: 'Title',
  price: 100,
};
