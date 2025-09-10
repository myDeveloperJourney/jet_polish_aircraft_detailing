export default function TopBanner() {
  return (
    <div className="w-full bg-black text-white text-sm py-2">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
        <div className="flex items-center gap-2">
          <span className="sr-only">Phone label</span>
          <span className="font-medium">Call Us:</span>
          <a href="tel:+18177755544" className="underline hover:text-yellow-400 font-semibold">(817) 775-5544</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="mailto:contact@jetpolishaircraftdetailing.com" className="underline hover:text-yellow-400 font-semibold break-words">contact@jetpolishaircraftdetailing.com</a>
        </div>
      </div>
    </div>
  )
}