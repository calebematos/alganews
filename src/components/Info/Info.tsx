import Icon from '@mdi/react'
import { mdiInformation } from '@mdi/js';
import * as I from './Info.styles'

export interface InfoProps {
  title: string
  description: string
}

export default function Info({ title, description}: InfoProps){

  return <I.Wrapper>
    <I.InnerContent>
      <I.Icon> 
        <Icon 
          color='#0099FF'
          size='40px'
          path={mdiInformation}
        /> 
      </I.Icon>
      <I.Messages>
        <I.Tittle> { title }</I.Tittle>
        <p>{ description }</p>
      </I.Messages>
    </I.InnerContent>
  </I.Wrapper>

}