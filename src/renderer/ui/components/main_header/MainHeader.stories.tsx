import { ComponentProps } from 'react';
import type { Story } from '@storybook/react';
import MainHeader from './MainHeader';
export default {
  title: 'harnan/MainHeader',
  component: MainHeader,
};
const Template: Story<ComponentProps<typeof MainHeader>> = (args) => (
  <MainHeader {...args} />
);
export const FirstStory = Template;
FirstStory.args = {};
