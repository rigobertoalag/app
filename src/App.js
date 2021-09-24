import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'

import { Provider, useSelector, useDispatch } from 'react-redux'

import { persistor, store } from './store/index'

import SignIn from './users/SignIn'

import { logOut } from './store/user'
import { PersistGate } from 'redux-persist/integration/react'

const NotImplemented = () => {
  return (
    <>
      <Link to='/videos'>Ir a videos</Link>
      <p>Esta pagina aun no esta lista</p>
    </>
  )
}

const Error404 = () => {
  return (
    <>
      <Link to='/'>Ir al inicio</Link>
      <p>Esta pagina no existe - 404</p>
    </>
  )
}

const UsuariosOutlet = () => {
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogOut = () => {
    dispatch(
      logOut()
    )
    navigate('/usuarios/login')
  }

  return (
    <>
      {
        user && <button onClick={onLogOut}>Cerrar sesion</button>
      }
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<NotImplemented />} />

            <Route path="/usuarios" element={<UsuariosOutlet />}>
              <Route path="registro" element={<NotImplemented />} />
              <Route path="login" element={<SignIn />} />
              <Route path=":id" element={<NotImplemented />} />
              <Route path=":id/videos" element={<NotImplemented />} />
            </Route>

            <Route path="/videos">
              <Route path="/" element={<NotImplemented />} />
              <Route path="nuevo" element={<NotImplemented />} />
              <Route path=":id" element={<NotImplemented />} />
            </Route>

            <Route path="*" element={<Error404 />} />

          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
