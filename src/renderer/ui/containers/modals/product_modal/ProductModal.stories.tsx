import { ComponentProps } from 'react';
import type { Story } from '@storybook/react';
import ProductModal from './ProductModal';
import profile from '@assets/pictures/example.png';
export default {
  title: 'harnan/ProductModal',
  component: ProductModal,
};
const Template: Story<ComponentProps<typeof ProductModal>> = (args) => (
  <ProductModal {...args} />
);
export const FirstStory = Template;
FirstStory.args = {
  url: profile,
  alt: 'profile',
  title: 'Cool image',
  artist: 'Harnan',
  resolution: '1920x1080',
  price: 100,
};
