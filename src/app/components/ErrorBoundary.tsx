import { transparentize } from "polished";
import { Component } from "react";
import styled from "styled-components"
import ErrorDisplay from "./ErrorDisplay/ErrorDisplay";

interface Props{}
interface State{
  hasError: boolean
  error?: {
    message?: string
  }
}

class ErrorBoundary extends Component<Props, State> {
  public state : State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error: {
        message: error.message
      }
    }
  }
  public render() {
    if(this.state.hasError) {
      return <ErrorDisplayWrapper>
        <ErrorDisplay message={this.state.error?.message}/>
      </ErrorDisplayWrapper>
    }
    return this.props.children
  }

}

const ErrorDisplayWrapper = styled.div`
  padding: 24px;
  border: 1px solid ${transparentize(0.9, "#274060")};
`

export default ErrorBoundary