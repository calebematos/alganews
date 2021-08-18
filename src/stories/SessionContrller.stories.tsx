import { ComponentStory, ComponentMeta } from '@storybook/react';

import  SessionController  from '../components/SessionController';

export default {
  title: 'Example/SessionController',
  component: SessionController,
  argTypes: {
    onLogout: {action: 'logout'}
   },
} as ComponentMeta<typeof SessionController>;

const Template: ComponentStory<typeof SessionController> = (args) => <SessionController {...args} />;

export const Default = Template.bind({})
Default.args ={
  name: 'Lucas C',
  description: 'Criador de conteúdo'
}
