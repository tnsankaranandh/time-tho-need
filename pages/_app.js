import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { ServerStyleSheet } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
