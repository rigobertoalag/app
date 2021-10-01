import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import { persistor, store } from './store/index'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Layout from './components/Layout'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Layout>
              <AppRoutes />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
