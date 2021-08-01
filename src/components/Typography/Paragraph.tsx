import styled from "styled-components"

export interface ParagraphPros {
  size?: 'default' | 'small'
  children: React.ReactNode
}

export default function Paragraph( {children, size} : ParagraphPros){

  return <StyledParagraph size={size || 'default'}>
    { children }
  </StyledParagraph>
}

const StyledParagraph = styled.p<{ size : 'default' | 'small'}>`

  font-size: ${p => p.size === 'default' ? 14 : 12}px;
  line-height: ${p => p.size === 'default' ? 25 : 20}px;
  color: #274060;
`