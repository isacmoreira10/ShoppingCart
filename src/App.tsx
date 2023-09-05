import { ThemeProvider } from "styled-components"
import { DefaultThemes } from "./pages/menu/styles/themes/Default"
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ContextCoffesSelected } from "./Context/Context"



function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <BrowserRouter>
        <ContextCoffesSelected>
          <Router />
        </ContextCoffesSelected>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
