import usePageTitle from "../../core/hooks/usePageTitle"
import notFound from "../../assets/not_found.svg"
import Button from "../components/Button/Button"
import styled from "styled-components"
import { useHistory } from "react-router"

export default function NotFound404() {
  usePageTitle("Not found")
  const history = useHistory()

  return <NotFound404Wrapper>
    <span>
      Oops!
    </span>
    <h1>We can't find this page</h1>
    <img src={notFound} alt="Not found" />
    <Button 
      variant="primary" 
      label="Go to home"
      onClick={() => history.replace('/')}
    />
  </NotFound404Wrapper>
}

const NotFound404Wrapper = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 32px;

  span {
    font-size: 72px;
  }

  h1 {
    font-size: 18px;
    font-weight: 400
  }

`