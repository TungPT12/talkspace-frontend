import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, vi } from '../services'

export const resources: { en: typeof vi; vi: typeof en } = {
  en,
  vi,
}
export enum Languages {
  EN = 'en',
  VI = 'vi',
}

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: Languages.VI,
    debug: true,
    resources: resources,
    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
  })

export default i18n
