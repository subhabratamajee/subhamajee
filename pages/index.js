import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact'
import Expirence from '../components/Expirence'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Works from '../components/Works'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Subhabrata Majee</title>
        <meta name="description" content="Subhabrata Majee" />
            <meta name="description" content="https://subhabrata.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Services />
      <Expirence />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}
