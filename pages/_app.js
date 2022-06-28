import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (

    <>
    <Head>
      <title>Subhabrata Majee</title>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    </Head>
     <Navbar />

      <Component {...pageProps} />
      <Footer/>
    </>)
}

export default MyApp
