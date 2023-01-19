import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { setUserData } from "../redux/slices/user";
import { theme } from "../theme";
import Head from "next/head";
import Header from "../components/Header";
import { wrapper } from "../redux/store";
import { Api } from "../utils/api";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RJournal</title>
        <meta name="description" content="Pet project - RJournal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const userData = await Api(ctx).user.getMe();

    store.dispatch(setUserData(userData));
  } catch (err) {
    if (ctx.asPath === '/write') {
      ctx.res?.writeHead(302, {
        Location: '/403',
      });
      ctx.res?.end();
    }
    console.log("getServerSideProps error", err);
  }

  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
})

export default wrapper.withRedux(MyApp);
