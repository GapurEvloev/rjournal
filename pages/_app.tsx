import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import Head from "next/head";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Head>
        <title>RJournal</title>
        <meta name="description" content="Pet project - RJournal" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Header />
          <Component {...props.pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
