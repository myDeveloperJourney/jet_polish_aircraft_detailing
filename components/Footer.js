export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} JetPolish. All rights reserved.</div>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#about" className="text-sm text-gray-600">About</a>
          <a href="#services" className="text-sm text-gray-600">Services</a>
          <a href="#contact" className="text-sm text-gray-600">Contact</a>
        </div>
      </div>
    </footer>
  )
}
