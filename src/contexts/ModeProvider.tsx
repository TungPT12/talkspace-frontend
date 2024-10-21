import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Modes } from '@/interfaces'
import { LOCAL_STORAGE } from '@/utils'
import { createContext, FC, PropsWithChildren, useContext } from 'react'

interface ModeConfigContext {
  mode: Modes
  setMode: (mode: Modes | ((prev: Modes) => Modes)) => void
}
export const ModeContext = createContext<ModeConfigContext | undefined>(undefined)

export const ModeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [mode, setMode] = useLocalStorage<Modes>(LOCAL_STORAGE.THEME, Modes.LIGHT)

  const updateMode = (mode: Modes | ((prev: Modes) => Modes)) => {
    setMode(mode)
  }
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
