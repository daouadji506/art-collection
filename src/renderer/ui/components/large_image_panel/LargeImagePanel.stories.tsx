import { ComponentProps } from 'react';
import type { Story } from '@storybook/react';
import LargeImagePanel from './LargeImagePanel';
export default {
  title: 'LargeImagePanel',
  component: LargeImagePanel,
};
const Template: Story<ComponentProps<typeof LargeImagePanel>> = (args) => (
  <LargeImagePanel {...args} />
);
export const FirstStory = Template
FirstStory.args = {};
