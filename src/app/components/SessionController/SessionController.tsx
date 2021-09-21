import Button from '../Button/Button'
import * as SC from './SessionController.styles'

interface SessionControllerProps {
  name: string
  description: string
  onLogout?: () => any
}

function SessionController({ name, description, onLogout } : SessionControllerProps){
  return <SC.Wrapper>
    <SC.Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
    <SC.Name>{ name }</SC.Name>
    <SC.Description>{ description }</SC.Description>
    <Button variant={'danger'} label={'Logout'} onClick={onLogout}></Button>
  </SC.Wrapper>
}

export default SessionController
