import { Reset } from "styled-reset";
import Routers from "./componenets/Routers";
import GlobalStyle from "./theme/globalStyles";
import {ThemeProvider} from "styled-components";
import theme from "./theme/theme";


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Reset/>
      <GlobalStyle/>
      <Routers/>
    </ThemeProvider>
    </>
  )
}

export default App;
