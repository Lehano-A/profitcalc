import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './globalStyles'
import { lightTheme } from './theme/theme'
import App from './components/App/App'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
