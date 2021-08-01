import * as FD from './FieldDescriptor.styles'

export interface FieldDescriptorProps {
  description: string
  value: string
}

export default function FieldDescriptor( {description, value} : FieldDescriptorProps){

  return <FD.Wrapper>
    <FD.Description>{ description }</FD.Description>
    <FD.Value>{ value }</FD.Value>
  </FD.Wrapper>
}