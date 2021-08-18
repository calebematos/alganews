
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  WordPriceCounter  from '../components/WordPriceCounter';

export default {
  title: 'Example/WordPriceCounter',
  component: WordPriceCounter,
} as ComponentMeta<typeof WordPriceCounter>;

const Template: ComponentStory<typeof WordPriceCounter> = (args) => <WordPriceCounter {...args} />;

export const Default = Template.bind({})
Default.args ={ 
  wordsCount: 20,
  pricePerWord: 0.20
}
