import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const pageLayout = Component.layout || ((page) => page)
  return pageLayout(<Component {...pageProps} />)
}

export default MyApp
