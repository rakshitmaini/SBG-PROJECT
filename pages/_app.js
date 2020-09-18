import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../component/layout";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ position: "relative" }}>
      <Layout key={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
