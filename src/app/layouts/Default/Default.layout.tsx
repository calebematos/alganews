import confirm from '../../../core/utils/confirm'
import Logo from '../../components/Logo'
import Navbar from '../../components/Navbar'
import SessionController from '../../components/SessionController'

import * as DL from './Default.layout.styles'

interface DefaultLayoutProps{
  children: React.ReactNode
}

function DefaultLayout( props : DefaultLayoutProps ){
  return <DL.Wrapper>
    <DL.Header>
      <Logo />  
    </DL.Header>
    <DL.Main>
      <DL.Navigation> 
        <Navbar /> 
      </DL.Navigation>
    
      <DL.FeaturedContent>
        { props.children }
      </DL.FeaturedContent>

      <DL.Aside>
        <SessionController 
          name="Lucas"
          description="editor for 2 years"
          onLogout={() => {
            confirm({
              title:"Logout?",
              onConfirm:() => window.alert('confirm'),
              onCancel: () => window.alert('cancel')
            })
          }}
        />
      </DL.Aside>
    </DL.Main>
  </DL.Wrapper>
}

export default DefaultLayout