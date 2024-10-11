import { FC, PropsWithChildren } from 'react'
import ErrorBoundary from '../pages/ErrorBoundary'

export const ErrorProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  return <ErrorBoundary>{children}</ErrorBoundary>
}
