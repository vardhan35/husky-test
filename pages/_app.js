import "../styles/globals.css";
import Template from "../components/Template/Template";

function MyApp({ Component, pageProps }) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

export default MyApp;
