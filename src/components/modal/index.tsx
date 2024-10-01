import { Input } from '../Input'

export const Modal = () => {
  return (
    <div
      className={
        'absolute left-1/2 top-1/2 min-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-xl border border-custom-1 bg-custom-1 p-5 backdrop-blur-custom-1'
      }
    >
      <div>Header</div>
      <div>
        <Input />
        <Input />
      </div>
    </div>
  )
}
