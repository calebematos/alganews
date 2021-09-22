import * as DL from './Default.layout.styles'
import { ReactNode } from "react"
import Navbar from '../components/Navbar'

interface DefaultLayoutProps{
  children: ReactNode
}

function DefaultLayout( props : DefaultLayoutProps ){
  return <DL.Wrapper>
    <DL.Header>
      Header  
    </DL.Header>
    <DL.Main>
      <DL.Navigation> 
        <Navbar /> 
      </DL.Navigation>
    
      <DL.FeaturedContent>
        { props.children }
      </DL.FeaturedContent>

      <DL.Aside>
        aside
      </DL.Aside>
    </DL.Main>
  </DL.Wrapper>
}

export default DefaultLayout