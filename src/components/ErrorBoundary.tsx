import { Component } from "react";

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error | string) {
    console.log(error);
    let msgToTelegram = ''
    if (error instanceof Error) {
      msgToTelegram = `${error.name} ${error.message} ${error.stack?.slice(500)}`
    } else {
      msgToTelegram = error
    }
    
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
