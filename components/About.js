import Image from "next/image"

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold">About JetPolish</h2>
        <p className="mt-4 text-gray-700">We provide meticulous aircraft detailing focused on protection, longevity, and presentation. Our team uses aviation-grade products and processes tailored to each aircraft type. We offer mobile services across the region and hangar detailing when preferred.</p>
        <ul className="mt-4 list-disc list-inside text-gray-700">
          <li>FAA-compliant procedures</li>
          <li>Experienced, insured technicians</li>
          <li>Custom maintenance schedules</li>
        </ul>
      </div>

      <Image src="/about.jpg" alt="About Jet Polish" width={400} height={200} className="w-full h-auto rounded-md object-cover" />
    </div>
  )
}
