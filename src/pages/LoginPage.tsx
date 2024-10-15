/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePersonStore } from '@/stores'
import { useTranslation } from 'react-i18next'
import FourOhFourImage from '../assets/images/404.svg'
import i18n, { Languages } from '../contexts/i18n'
import { Modes, useMode } from '../contexts/ModeProvider'

export const LoginPage = () => {
  const { t } = useTranslation('test')
  const { mode, setMode } = useMode()
  // throw new Error('This component crashes during render')
  const handleChange = () => {
    i18n.changeLanguage(i18n.language === Languages.EN ? Languages.VI : Languages.EN)
  }

  return (
    <div className="relative h-screen w-screen bg-red-600">
      <img
        className="absolute h-screen w-screen"
        src={
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100'
        }
      />
      <main className="absolute inset-0">
        {/* <Modal></Modal> */}
        <div>{t('test2')}</div>
        <button onClick={handleChange}>Change Language</button>
        <div>
          <div>{mode}</div>
          <button onClick={() => setMode((v) => (v === Modes.DARK ? Modes.LIGHT : Modes.DARK))}>Change mode</button>
        </div>
        <FourOhFourImage />
      </main>
    </div>
  )
}
