import { ThemeProvider } from "styled-components";
import { DefaultThemes } from "./pages/menu/styles/themes/Default";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ContextItemsCart } from "./Context/Context";

function App() {
  return (
    <ContextItemsCart>
      <ThemeProvider theme={DefaultThemes}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ContextItemsCart>
  );
}

export default App;
