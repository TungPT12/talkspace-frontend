interface CustomEventAttributes {
  add: <T>(eventName: string, callback: (params: CustomEvent<T>) => void) => void
  remove: <T>(eventName: string, callback: (params: CustomEvent<T>) => void) => void
  dispatch: <T>(eventName: string, payload?: T) => void
}

const add = <T>(eventName: string, callback: (params: CustomEvent<T>) => void) => {
  window.addEventListener(eventName, callback as EventListenerOrEventListenerObject)
}
const remove = <T>(eventName: string, callback: (params: CustomEvent<T>) => void) => {
  window.removeEventListener(eventName, callback as EventListenerOrEventListenerObject)
}
const dispatch = <T>(eventName: string, payload?: T) => {
  window.dispatchEvent(new CustomEvent<T>(eventName, { detail: payload }))
}

export const customEvent: CustomEventAttributes = {
  add,
  remove,
  dispatch,
}
