import { Component, ErrorInfo, ReactNode } from 'react'
import SomethingWrongImage from '../assets/images/something_wrong.svg'
interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    console.error(error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-16 bg-purple-200">
          <SomethingWrongImage />
          <h1 className="text-5xl">Oops !!</h1>
          <div className="text-3xl">Sorry!! Something went wrong</div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
