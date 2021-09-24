import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Provider } from 'react-redux'

import { store } from './store/index'

import SignIn from './users/SignIn'

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

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NotImplemented />} />

          <Route path="/usuarios">
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
      </Provider>
    </BrowserRouter>
  );
}

export default App;
