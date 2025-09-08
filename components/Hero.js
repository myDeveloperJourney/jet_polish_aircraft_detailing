export default function Hero() {
  return (
    <section id="home" className="relative bg-cover bg-center" style={{backgroundImage: 'url(/hero_banner.jpg)'}}>
      <div className="bg-black/40">
        <div className="container py-28 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Premium Aircraft Detailing</h1>
          <p className="mt-4 max-w-2xl">Protect your aircraft with professional exterior and interior detailing, paint correction, and advanced coatings. Mobile and hangar services available.</p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="bg-blue-500 text-black px-6 py-3 rounded-md font-semibold">Get a Quote</a>
            <a href="#services" className="border border-white px-6 py-3 rounded-md">Our Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}
