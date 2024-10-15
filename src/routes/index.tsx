import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { InitialLayout } from '../layouts/InitialLayout'
import { NotFound } from '../pages'
import { InitialPage } from '../pages/InitialPage'
import { LoginPage } from '../pages/LoginPage'

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
        </Route>
      </Routes>
    </Router>
  )
}
