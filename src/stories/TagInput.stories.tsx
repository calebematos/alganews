
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import  TagInput  from '../components/TagInput';
import { Tag } from 'react-tag-input'

export default {
  title: 'Example/TagInput',
  component: TagInput,
} as ComponentMeta<typeof TagInput>;

const Template: ComponentStory<typeof TagInput> = (args) => <TagInput {...args} />;

export const Default = Template.bind({})
Default.args ={ 
  placeholder: 'Insira as tags deste post',
  tags: [{id:'1', text:'JavaScript'}]
}

export const NoTags = Template.bind({})
NoTags.args ={ 
  placeholder: 'Insira as tags deste post',
  tags: []
}

export const VariousTags = Template.bind({})
VariousTags.args ={ 
  placeholder: 'Insira as tags deste post',
  tags: [
    {id:'1', text:'JavaScript'},
    {id:'2', text:'JavaScript'},
    {id:'3', text:'JavaScript'},
    {id:'4', text:'JavaScript'},
    {id:'5', text:'JavaScript'},
    {id:'6', text:'JavaScript'},
  ]
}

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([])

  return <TagInput 
    placeholder= 'Insira as tags deste post'
    tags={tags}
    onAdd={tag => setTags([...tags, tag])}
    onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
  />
}

