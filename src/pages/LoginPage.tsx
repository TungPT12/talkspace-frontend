import { useKeyboardShortcut } from '@/hooks'
import { Key } from '@/interfaces'
import clsx from 'clsx'
import { useState } from 'react'
import style from './Login.module.css'
import './LoginPage.css'

enum Types {
  SIGNIN = 'signin',
  SIGNUP = 'sign-up-mode',
}

export const LoginPage = () => {
  const [type, setType] = useState<Types>(Types.SIGNIN)
  const [test, setTest] = useState<string>('')

  useKeyboardShortcut([Key.ONE], () => {
    setType((prev: Types) => (prev === Types.SIGNUP ? Types.SIGNIN : Types.SIGNUP))
  })
  useKeyboardShortcut([Key.NINE], () => {
    setTest((prev: string) => (prev === '' ? 'active' : ''))
  })

  return (
    <div className={clsx(type, 'container2 relative h-screen w-full overflow-hidden bg-white')}>
      <div className={clsx(style.forms, test)}>
        <div className='signin-signup'>
          <div className='sign-in-form'>Sign in</div>
          <div className='sign-up-form'>Sign up</div>
        </div>
      </div>

      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>New here ?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button className='btn transparent' id='sign-up-btn'>
              Sign up
            </button>
          </div>
          <img src='img/log.svg' className='image' alt='' />
        </div>
        <div className='panel right-panel'>
          <div className='content'>
            <h3>One of us ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button className='btn transparent' id='sign-in-btn'>
              Sign in
            </button>
          </div>
          <img src='img/register.svg' className='image' alt='' />
        </div>
      </div>
    </div>
  )
}
