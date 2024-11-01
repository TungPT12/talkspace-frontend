import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { InitialLayout } from '../layouts/InitialLayout'
import { NotFound } from '../pages'
import { InitialPage } from '../pages/InitialPage'
import { LoginPage } from '../pages/login/LoginPage'
import { Input } from '@/components'

export const BaseRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <InitialLayout>
              <Outlet />
            </InitialLayout>
          }
        >
          <Route element={<InitialPage />} path='/' />
          <Route element={<LoginPage />} path='/sign-in' />
          <Route element={<NotFound />} path='*' />
          <Route element={<Input
              type='text'
              placeholder='name'
              handleValidation={() => {}}
              onChange={() => {}}
              value=''
          />} path='/input' />
        </Route>
      </Routes>
    </Router>
  )
}
