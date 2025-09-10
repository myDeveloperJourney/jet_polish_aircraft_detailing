import Head from 'next/head'
import TopBanner from '../components/TopBanner'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
      <Head>
        <title>Jet Polish Aircraft Detailing — Professional Aircraft Detailing</title>
        <meta name="description" content="High-end aircraft detailing services: exterior wash, interior deep clean, paint correction, ceramic coating, and more. Mobile service available." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.svg" />
        <meta property="og:title" content="Jet Polish Aircraft Detailing" />
        <meta property="og:description" content="Premium aircraft detailing services. Mobile and hangar service. Request a quote today." />
      </Head>

      <TopBanner />
      <Nav />

      <main>
        <Hero />

        <section id="about" className="py-16">
          <div className="container">
            <About />
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container">
            <Services />
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
