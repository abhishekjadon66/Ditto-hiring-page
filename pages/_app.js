import "../styles/globals.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.css";
import ReactNav from "../components/ReactNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <ReactNav />
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp;
