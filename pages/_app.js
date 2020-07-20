import { Provider } from 'react-redux';
import store from "../redux/store";

import Menu from "../components/menu";
import "./style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Menu />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
