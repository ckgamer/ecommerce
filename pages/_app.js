import React from "react";
import Layout from "../components/layout";
import '../styles/global.scss'

function App({ Component, pageProps }) {
  return (
    <Layout>
        <main>
      <Component {...pageProps} />
        </main>
    </Layout>
  );
}

export default App;
