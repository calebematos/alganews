import { ComponentStory, ComponentMeta } from '@storybook/react';

import  NoData  from '../components/NoData/NoData';

export default {
  title: 'Example/NoData',
  component: NoData
} as ComponentMeta<typeof NoData>;

const Template: ComponentStory<typeof NoData> = (args) => <NoData {...args} />;

export const Default = Template.bind({})
Default.args ={}

export const FixedHeigh = Template.bind({})
FixedHeigh.args ={
  heigh:240
}