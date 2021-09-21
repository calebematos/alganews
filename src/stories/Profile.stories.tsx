import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Profile  from '../app/components/Profile';

export default {
  title: 'Example/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Default = Template.bind({})
Default.args ={
  name: 'Lucas C',
  description: 'Criador de conteúdo'
}