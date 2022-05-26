import "../src/styles/globals.scss";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../src/redux/store";
import Layout from "../src/modules/layout/layout";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Layout>
          <Helmet>
            <title>My Coffee</title>
          </Helmet>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
