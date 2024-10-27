import FourOhFourLogo from '../assets/images/svgs/404.svg'

export const NotFound = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-8 bg-purple-200'>
      <FourOhFourLogo />
      <h1 className='text-6xl'>Page Not Found</h1>
    </div>
  )
}
