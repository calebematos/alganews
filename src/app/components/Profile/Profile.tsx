import * as P from './Profile.styles'

interface ProfileProps {
  name: string
  description: string
  editorId: number
  avatarUrl?: string
}

function Profile({ name, description, editorId, avatarUrl } : ProfileProps){
  return <P.Wrapper tabIndex={0} to={`editors/${editorId}`}>
    <P.Avatar src={avatarUrl} />
    <P.Info>
      <P.Name>{ name }</P.Name>
      <P.Description>{ description }</P.Description>
    </P.Info>
  </P.Wrapper>
}

export default Profile