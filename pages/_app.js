import App from "next/app"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
// import { AuthProvider, getUser } from "../components/helpers/AuthProvider"
// import Layout from "../components/layout"
// import theme from "../components/theme"
const MyApp = ({ Component, pageProps, auth }) => {
  return (
    // <ThemeProvider theme={theme}>
    //   <AuthProvider myAuth={auth}>
          <Component {...pageProps} />
    //   </AuthProvider>
    // </ThemeProvider>
  )
}
// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext)
//   const auth = await getUser(appContext.ctx)
//   return { ...appProps, auth: auth }
// }
export default MyApp