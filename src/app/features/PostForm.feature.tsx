import { useEffect, useState } from "react"
import { Tag } from "react-tag-input"
import styled from "styled-components"
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown"
import info from "../../core/utils/info"
import PostService from "../../sdk/service/Post.service"
import Button from "../components/Button/Button"
import ImageUpload from "../components/ImageUpload"
import Input from "../components/Input/Input"
import MarkdownEditor from "../components/MarkdownEditor"
import TagInput from "../components/TagInput"
import WordPriceCounter from "../components/WordPriceCounter"

export default function PostForm(){
  const [tags, setTags] = useState<Tag[]>([])
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')

  async function handlerFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newPost = {
      body,
      tags: tags.map(tag => tag.text),
      title,
      imageUrl: ''
    }

    const savedPost = await PostService.createPost(newPost)

    info({
      title:'Saved successfully',
      description:'You just saved the post with id '+ savedPost.id
    })
  }

  return <PostFormWrapper onSubmit={handlerFormSubmit}>
    <Input 
      label="title"
      value={title}
      onChange={e => setTitle(e.currentTarget.value)}
      placeholder="e.g.: How I got rich learning React"
    />
    <ImageUpload label="Post thumbnail"/>
    <MarkdownEditor onChange={setBody}/>
    <TagInput 
      placeholder="Insert the tags for this post"
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((tag, i) => i !== index ))}
      />
    <PostFormSubmitWrapper>
      <WordPriceCounter 
        pricePerWord={0.25} 
        wordsCount={countWordsInMarkdown(body)}
      />
      <Button variant="primary" label="Save post" type="submit"/>
    </PostFormSubmitWrapper>  

  </PostFormWrapper>
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`