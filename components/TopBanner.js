export default function TopBanner() {
  return (
    // Fixed at top with explicit height so the nav can align beneath it
    <div className="fixed top-0 left-0 w-full z-50 bg-black text-white text-sm h-16">
      <div className="container h-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 py-2">
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