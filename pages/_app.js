import Layout from "../hoc/Layout";
import "../styles/scss/main.scss";

// redux related
import store from "../redux/store";
import { Provider } from "react-redux";
import { saveState } from "../redux/localStorage";
import { debounce } from "debounce";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
