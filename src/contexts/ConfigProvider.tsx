import { FC, PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import { ErrorProvider } from './ErrorProvider'
import i18n from './i18n'
import { ModeProvider } from './ModeProvider'

export const ConfigProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  return (
    <ErrorProvider>
      <I18nextProvider i18n={i18n}>
        <ModeProvider>{children}</ModeProvider>
      </I18nextProvider>
    </ErrorProvider>
  )
}
