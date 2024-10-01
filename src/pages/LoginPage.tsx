import { Modal } from '../components/modal'

export const LoginPage = () => {
  return (
    <div className="h-screen w-screen bg-red-600 relative">
      <img
        className="w-screen h-screen absolute"
        src={
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100'
        }
      />
      <main className="absolute inset-0">
        <Modal></Modal>
      </main>
    </div>
  )
}
