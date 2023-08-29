import { ThemeProvider } from "styled-components"
import { DefaultThemes } from "./pages/menu/styles/themes/Default"
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
