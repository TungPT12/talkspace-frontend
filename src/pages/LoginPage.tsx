import { useTranslation } from 'react-i18next'
import i18n, { Languages } from '../contexts/i18n'

export const LoginPage = () => {
  const { t } = useTranslation('test')

  const handleChange = () => {
    console.log('click', i18n)
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
        <span>{t('test2')}</span>
        <button onClick={handleChange}>Change Language</button>
      </main>
    </div>
  )
}
