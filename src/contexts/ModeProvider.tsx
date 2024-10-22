import { useKeyboardShortcut } from '@/hooks'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Key, Modes } from '@/interfaces'
import { LOCAL_STORAGE } from '@/utils'
import { createContext, FC, PropsWithChildren, useContext, useEffect } from 'react'

interface ModeConfigContext {
  mode: Modes
  setMode: (mode: Modes | ((prev: Modes) => Modes)) => void
}
export const ModeContext = createContext<ModeConfigContext | undefined>(undefined)

export const ModeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [mode, setMode] = useLocalStorage<Modes>(LOCAL_STORAGE.THEME, Modes.LIGHT)
  console.log(mode)
  useKeyboardShortcut([Key.TWO], () => {
    updateMode((mode) => (mode === Modes.DARK ? Modes.LIGHT : Modes.DARK))
  })
  const updateMode = (mode2: Modes | ((prev: Modes) => Modes)) => {
    const modeValue = mode2 instanceof Function ? mode2(mode) : mode2
    document.documentElement.classList.toggle(Modes.DARK)
    setMode(modeValue)
    // const modeValue = mode2 instanceof Function ? mode2(mode) : mode2
    // const root = window.document.documentElement
    // const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // console.log(modeValue)
    // if (modeValue === Modes.DARK || (!modeValue && systemPrefersDark)) root.classList.remove(Modes.DARK)
    // else root.classList.add(Modes.DARK)
  }

  useEffect(() => {}, [])
  return <ModeContext.Provider value={{ mode, setMode: updateMode }}>{children}</ModeContext.Provider>
}

export const useMode = () => {
  const context = useContext(ModeContext)
  if (context === undefined) {
    throw new Error(
      'useMode hook must be used within ModeProvider component. Ensure that your component is wrapped in <ModeProvider>',
    )
  }
  return context
}
export const toggleTheme = () => {
  const root = window.document.documentElement
  if (root.classList.contains('dark')) {
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}

export const setInitialTheme = () => {
  const root = window.document.documentElement
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}
