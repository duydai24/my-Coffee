import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500&display=swap"
            rel="stylesheet"
          />
          <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
