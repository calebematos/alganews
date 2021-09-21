import { mdiAlert } from "@mdi/js"
import Icon from "@mdi/react"
import styled from "styled-components"
import Heading from "../Typography/Heading"

interface ErrorDisplayProps{
  title?: string
  message?: string
  small?: boolean
}

export default function ErrorDisplay(props: ErrorDisplayProps){
  return <ErrorDisplayWrapper>
    <Icon 
      size={props.small ? '24px' : '48px'}
      path={mdiAlert}      
    />
    <Heading level={2} children={props.title || 'Erro ao renderizar componente'}/>
    <span style={{ fontFamily: '"Roboto Mono", monospace', fontSize: 12 }}>
      {props.message || 'Erro desconhecido'}
    </span>
  </ErrorDisplayWrapper>
}

const ErrorDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8;
  color: #274060;
`