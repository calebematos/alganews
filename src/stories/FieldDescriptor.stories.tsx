import { ComponentStory, ComponentMeta } from '@storybook/react';

import  FieldDescriptor  from '../app/components/FieldDescriptor/FieldDescriptor';

export default {
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor,
} as ComponentMeta<typeof FieldDescriptor>;

const Template: ComponentStory<typeof FieldDescriptor> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  description:'data de nascimento',
  value: '26 de Dezembro de 1997 (22 anos)'
}