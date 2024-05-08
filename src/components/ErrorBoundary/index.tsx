import {
  Component,
  ComponentType,
  createElement,
  ReactNode,
  ErrorInfo,
} from "react";

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

type FallbackProps = {
  error: Error | null;
  resetErrorBoundary?: () => void;
};

type ErrorBoundaryProps = {
  fallback: ComponentType<FallbackProps>;
  onReset: () => void;
  children: ReactNode;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  resetErrorBoundary(): void {
    this.props.onReset();

    // 에러 상태를 기본으로 초기화합니다.
    this.setState({
      hasError: false,
      error: null,
    });
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  render() {
    const { state, props, resetErrorBoundary } = this;

    const { hasError, error } = state;

    const { fallback, children } = props;

    const fallbackProps: FallbackProps = {
      error,
      resetErrorBoundary,
    };

    const fallbackComponent = createElement(fallback, fallbackProps);

    return hasError ? fallbackComponent : children;
  }
}

export default ErrorBoundary;
