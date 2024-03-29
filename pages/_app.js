import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../component/layout";
import AOS from "aos";
import "aos/dist/aos.css";

export const IsCSR = typeof window !== "undefined";
function MyApp({ Component, pageProps }) {
  if (IsCSR) {
    AOS.init({
      once: true,
      startEvent: "load",
    });
  }
  return (
    <div style={{ position: "relative" }}>
      <Layout key={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
