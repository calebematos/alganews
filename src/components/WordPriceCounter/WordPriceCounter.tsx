import * as WCP from './WordPriceCounter.styles'

interface WordPriceCounterProps {
  wordsCount: number
  pricePerWord: number
}

function WordPriceCounter({ wordsCount, pricePerWord }: WordPriceCounterProps) {
  
  if(wordsCount < 0)
    throw Error('A quantidade de palavras não pode ser negativa');
    

  const amount = wordsCount * pricePerWord

  return<WCP.Wrapper>
    <WCP.WordCounter>{ wordsCount } palavras</WCP.WordCounter>
    <WCP.PricePreview>{amount.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits:2
    })}</WCP.PricePreview>
  </WCP.Wrapper>
}

export default WordPriceCounter
