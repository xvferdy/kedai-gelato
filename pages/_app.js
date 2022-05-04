import Layout from "../hoc/Layout";
import "../styles/scss/main.scss";
import store from "../redux/store";
import { Provider } from "react-redux";
import { saveState } from "../redux/localStorage";
import { debounce } from "debounce";
import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <SnackbarProvider
          maxSnack={3}
          style={{ fontSize: "142.5%", fontWeight: 300, letterSpacing: 1 }}
        >
          <NextNProgress color="#7FB5FF" options={{ showSpinner: false }} />
          <Component {...pageProps} />
        </SnackbarProvider>
      </Layout>
    </Provider>
  );
}

export default MyApp;
