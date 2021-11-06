import styled from "styled-components"
import Profile from "../components/Profile"


export default function EditorsList() {
 
 
  return <EditorsListWrapper>
    <Profile editorId={1} name="Lucas" description="editor 2 years ago"/>
    <Profile editorId={2} name="Lucas" description="editor 2 years ago"/>
    <Profile editorId={3} name="Lucas" description="editor 2 years ago"/>
    <Profile editorId={4} name="Lucas" description="editor 2 years ago"/>
    <Profile editorId={5} name="Lucas" description="editor 2 years ago"/>
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 24px;
`