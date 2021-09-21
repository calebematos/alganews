import * as VD from './ValueDescriptor.styles'

export interface ValueDescriptorProps {
  description: string
  value: number
  color: 'primary' | 'default'
  isCurrency?: boolean
}

export default function ValueDescriptor( props : ValueDescriptorProps){
  const COLOR = {
    primary: '#0099FF',
    default: '#274060'
  }

  return <VD.Wrapper color={COLOR[props.color || 'default']}>
    <span className="Description">{ props.description }:</span>

    <div>
      {
        props.isCurrency &&
        <span className="Currency">{'R$'}</span>
      }

      <span className="Value">{props.value.toLocaleString('pt-BR')}</span>
    </div>


  </VD.Wrapper>
}