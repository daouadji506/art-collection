import { ComponentProps } from 'react';
import type { Story } from '@storybook/react';
import ColorfulButton from './ColorfulButton';
export default {
  title: 'ColorfulButton',
  component: ColorfulButton,
};
const Template: Story<ComponentProps<typeof ColorfulButton>> = (args) => (
  <ColorfulButton {...args} />
);
export const FirstStory = Template
FirstStory.args = {};
