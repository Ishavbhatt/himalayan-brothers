import '../styles/globals.css'
import '../styles/css/style.css'
import '../styles/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import Layout from '../components/Layout'

// if (typeof window !== "undefined") 


function MyApp({ Component, pageProps }) {
  // <script src='jquery.js'></script>
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp 