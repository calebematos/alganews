import * as P from './Profile.styles'

interface ProfileProps {
  name: string
  description: string
}

function Profile({ name, description } : ProfileProps){
  return <P.Wrapper>
    <P.Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
    <P.Info>
      <P.Name>{ name }</P.Name>
      <P.Description>{ description }</P.Description>
    </P.Info>
  </P.Wrapper>
}

export default Profile