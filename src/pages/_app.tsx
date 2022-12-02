import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import { ColorModeContextProvider } from "../contexts/ColorModeContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ColorModeContextProvider>
  );
};

export default App;
