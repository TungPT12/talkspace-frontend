import { Modes } from '@/interfaces'
import { createContext, FC, PropsWithChildren, useContext, useState } from 'react'

interface ModeConfigContext {
  mode: Modes
  setMode: (mode: Modes | ((currentMode: Modes) => Modes)) => void
}
export const ModeContext = createContext<ModeConfigContext | undefined>(undefined)

export const ModeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [mode, setMode] = useState<Modes>(Modes.LIGHT)

  const handleMode = (mode: Modes | ((currentMode: Modes) => Modes)) => {
    setMode(mode)
  }

  return <ModeContext.Provider value={{ mode, setMode: handleMode }}>{children}</ModeContext.Provider>
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
