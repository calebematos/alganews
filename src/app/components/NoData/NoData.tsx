import styled from "styled-components";

export interface NoDataProps {
  heigh?: number
}

export default function NoData({ heigh = 120} : NoDataProps ){
  return <NoDataWrapper heigh={heigh}>
    <Message>Sem dados para exibir</Message>
    <SadFace>:(</SadFace>
  </NoDataWrapper>
}

const NoDataWrapper = styled.div<{heigh: number}>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${p => p.heigh}px;
`
const Message = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #274060;
`

const SadFace = styled.span`
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
  color: #09f;
`