import { useState } from 'react'

// export const useLocalStorage = <T>(key: string, initialValue?: T) => {
export function useLocalStorage<T>(key: string, initialValue?: T): [T, (newValue: T | ((prevValue: T) => T)) => void] {
  // const [localStorage, setNewLocalStorage] = useState<T>(() => {
  //   try {
  //     const item = window.localStorage.getItem(key)
  //     return item ? JSON.parse(item) : initialValue
  //   } catch (e) {
  //     console.error(`Error setting localStorage key "${key}":`, e)
  //     return (initialValue as Modes) || Modes.LIGHT
  //   }
  // })
  const [localStorage, setNewLocalStorage] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (e) {
      console.error(`Error setting localStorage key "${key}":`, e)
      return initialValue
    }
  })

  const updateState = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(localStorage as T) : value
      setNewLocalStorage(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (e) {
      console.error(`Error setting localStorage key "${key}":`, e)
    }
  }

  return [localStorage, updateState]
}
