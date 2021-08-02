import * as C from './Confirm.styles'
import Button from '../Button/Button'

export interface ConfirmProps {
  title: string
  onConfirm: () => any
  onCancel: () => any
}

export default function Confirm({ title, onConfirm, onCancel }: ConfirmProps) {

  return <C.Wrapper>
    <C.Tittle>
      {title}
    </C.Tittle>
    <C.ButtonDisplay>
      <Button label="não" variant="danger" onClick={onCancel} />
      <Button label="sim" variant="primary" onClick={onConfirm}/>
    </C.ButtonDisplay>
  </C.Wrapper>
}