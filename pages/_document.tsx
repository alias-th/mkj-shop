import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Script src="https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
