import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'

import { Provider, useSelector, useDispatch } from 'react-redux'

import { persistor, store } from './store/index'

import SignIn from './users/SignIn'

import { logOut } from './store/user'
import { PersistGate } from 'redux-persist/integration/react'
import Videos from './videos/Videos.jsx'
import VideosForm from './videos/VideosForm'
import VideoShow from './videos/VideoShow'
import Profile from './users/Profile'
import HomePage from './Home'
import { ThemeProvider } from 'styled-components'
import theme, { GlobalStyle  } from './theme'
import Layout from './components/Layout'
import UserFormLayout from './users/UserFormLayout'

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
          <ThemeProvider theme={theme}>
            {/* <GlobalStyle /> */}
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/usuarios" element={<UsuariosOutlet />}>
                  <Route path="registro" element={<UserFormLayout />} />
                  <Route path="login" element={<SignIn />} />
                  <Route path="miperfil" element={<Profile />} />
                  <Route path=":id/videos" element={<NotImplemented />} />
                </Route>

                <Route path="/videos">
                  <Route path="/" element={<Videos />} />
                  <Route path="nuevo" element={<VideosForm />} />
                  <Route path=":id" element={<VideoShow />} />
                </Route>

                <Route path="*" element={<Error404 />} />

              </Routes>
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
