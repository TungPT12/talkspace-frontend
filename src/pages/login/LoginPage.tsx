import LoginImage from '@/assets/images/svgs/login.svg'
import RegisterImage from '@/assets/images/svgs/register.svg'
// import { useKeyboardShortcut } from '@/hooks'
import { KEY } from '@/interfaces'
import clsx from 'clsx'
import { useState } from 'react'
import style from './Login.module.css'
import useKeyboardShortcut from '@/hooks/useKeyboardShortcut'
enum Types {
  signin = 'signin',
  signup = 'signup',
}

export const LoginPage = () => {
  const [type, setType] = useState<Types>(Types.signin)

  useKeyboardShortcut([KEY.ONE], () => {
    setType((prev: Types) => (prev === Types.signin ? Types.signup : Types.signin))
  })
  const handleSignin = () => {
    setType(Types.signin)
  }
  const handleSignup = () => {
    setType(Types.signup)
  }
  return (
    <div
      className={clsx(
        type === Types.signup && style['sign-up-mode'],
        style.container,
        'relative h-screen w-full overflow-hidden bg-white',
      )}
    >
      <div className={clsx(style['.forms-container'])}>
        <div className={clsx(style['signin-signup'])}>
          <form className={clsx(style['form-item'], style['sign-in-form'])}>Sign in</form>
          <form className={clsx(style['form-item'], style['sign-up-form'])}>Sign up</form>
        </div>
      </div>

      <div className={clsx(style['panels-container'])}>
        <div className={clsx(style.panel, style['left-panel'])}>
          <div className={clsx(style.content)}>
            <h3>New here ?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button className='btn transparent' onClick={handleSignup}>
              Sign up
            </button>
          </div>
          <div className={style.image}>
            <RegisterImage />
          </div>
        </div>
        <div className={clsx(style.panel, style['right-panel'])}>
          <div className={clsx(style.content)}>
            <h3>One of us ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button className='btn transparent' onClick={handleSignin}>
              Sign in
            </button>
          </div>
          <LoginImage className={style.image} />
        </div>
      </div>
    </div>
  )
}
