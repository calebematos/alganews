import styled from "styled-components"
import CircleChart from "../components/CircleChart";

export default function UserTopTags() {

  return <UserTopTagsWrapper>
    <CircleChart 
      progress={73}
      size={88}
      caption={'Java'}
      theme={'primary'}
    />
    <CircleChart 
      progress={27}
      size={88}
      caption={'Javascript'}
    />
    <CircleChart 
      progress={82}
      size={88}
      caption={'scrum'}
    />
  </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 32px;
`