import { useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Jet Polish Logo" width={150} height={150} />
        </a>

        <nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>

          <ul className={`md:flex md:items-center gap-6 ${open ? 'block' : 'hidden'}`}>
            <li><a className="block py-2 md:py-0" href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a className="block py-2 md:py-0" href="#services" onClick={() => setOpen(false)}>Services</a></li>
            <li><a className="block py-2 md:py-0" href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
