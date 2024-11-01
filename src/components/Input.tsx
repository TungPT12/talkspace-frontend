import { FC } from 'react'
import styles from './Input.module.css'
import PasswordImage from '@/assets/images/svgs/passowrd_icon.svg';
interface InputProps {
  type: string
  value: string
  placeholder: string
  handleValidation: () => void
  onChange: () => void
}

export const Input: FC<InputProps> = (props) => {
  const {
    type = 'text',
    value = "",
    placeholder = '',
    handleValidation = () => {},
    onChange = () => {},
  } = props;


  return (
    <div className={`${styles['input']} text-sm border flex border-lime-700 relative items-center`}>
      <PasswordImage className='h-3.5 w-auto'/>
      <input className='px-1 py-2 w-full text-sm outline-none' onChange={onChange}  type={type}/>
      <div className='placeholder absolute left-6 '>{placeholder}</div>
    </div>
  )
}
