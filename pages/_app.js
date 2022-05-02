import Layout from "../hoc/Layout";
import "../styles/scss/main.scss";

// redux related
import store from "../redux/store";
import { Provider } from "react-redux";
import { saveState } from "../redux/localStorage";
import { debounce } from "debounce";

import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";

import { motion, AnimatePresence } from "framer-motion";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <Layout>
        <SnackbarProvider
          maxSnack={3}
          style={{ fontSize: "142.5%", fontWeight: 300, letterSpacing: 1 }}
        >
          <NextNProgress />
          {/* <AnimatePresence exitBeforeEnter> */}
          {/* <div key={router.route}> */}
          <Component {...pageProps} />
          {/* </div> */}
          {/* </AnimatePresence> */}
        </SnackbarProvider>
      </Layout>
    </Provider>
  );
}

export default MyApp;
