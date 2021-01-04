import NProgress from "nprogress"
// import "nprogress/nprogress.css";
import "../styles/main.scss";
import Router from "next/router"
Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
function MyApp({ Component, pageProps }) {
  return( 
  <Component {...pageProps} />
  )
}

export default MyApp
