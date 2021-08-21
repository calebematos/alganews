
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  MarkdownEditor  from '../components/MarkdownEditor';

export default {
  title: 'Example/MarkdownEditor',
  component: MarkdownEditor,
} as ComponentMeta<typeof MarkdownEditor>;

const Template: ComponentStory<typeof MarkdownEditor> = (args) => <MarkdownEditor {...args} />;

export const Default = Template.bind({})
Default.args ={ 
  wordsCount: 20,
  pricePerWord: 0.20
}
