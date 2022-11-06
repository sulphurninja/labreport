import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import '../styles/report.css'
import '../styles/report-style.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return <Component {...pageProps} />
}

export default MyApp
