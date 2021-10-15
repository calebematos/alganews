import styled from "styled-components"
import Profile from "../components/Profile"


export default function EditorsList() {

  return <EditorsListWrapper>
    <Profile name="Lucas" description="editor 2 years ago"/>
    <Profile name="Lucas" description="editor 2 years ago"/>
    <Profile name="Lucas" description="editor 2 years ago"/>
    <Profile name="Lucas" description="editor 2 years ago"/>
    <Profile name="Lucas" description="editor 2 years ago"/>
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 24px;
`