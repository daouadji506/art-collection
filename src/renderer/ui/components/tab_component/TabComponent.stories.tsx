import { ComponentProps } from 'react';
import type { Story } from '@storybook/react';
import TabComponent from './TabComponent';
export default {
  title: 'TabComponent',
  component: TabComponent,
};
const Template: Story<ComponentProps<typeof TabComponent>> = (args) => (
  <TabComponent {...args} />
);
export const FirstStory = Template;
FirstStory.args = {
  items: [],
};
