import { Modal } from '../components/modal'
import { usePersonStore } from '../stores'

export const LoginPage = () => {
  const firstName = usePersonStore((state) => state.firstName)
  const updateFirstName = usePersonStore((state) => state.updateFirstName)

  return (
    <div className="relative h-screen w-screen bg-red-600">
      <img
        className="absolute h-screen w-screen"
        src={
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100'
        }
      />
      <main className="absolute inset-0">
        <label>
          First name
          <input
            // Update the "firstName" state
            onChange={(e) => updateFirstName(e.currentTarget.value)}
            value={firstName}
          />
        </label>

        <p>
          Hello, <strong>{firstName}!</strong>
        </p>
        <Modal></Modal>
      </main>
    </div>
  )
}
