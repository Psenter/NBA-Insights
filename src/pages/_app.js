import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStateProvider } from "../context/GlobalState";
import "src/styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </GlobalStateProvider>
  );
  return;
}
export default MyApp;
