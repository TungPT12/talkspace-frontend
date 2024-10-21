import { KEY } from '@/interfaces/keys'
import { useEffect } from 'react'

export const useKeyboardShortcut = (keys: KEY[], callback: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const keyCombinationMatched = keys.every((key: KEY) => event.key.toLowerCase() === (key as unknown as string))

      if (keyCombinationMatched) {
        callback(event)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [keys, callback])
}
