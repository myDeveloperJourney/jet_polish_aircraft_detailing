const services = [
  {
    title: 'Exterior Wash & Decontamination',
    desc: 'Full exterior wash using aviation-safe detergents, bug and residue removal, wheel and landing gear cleaning, and paint decontamination (clay/iron removal).'
  },
  {
    title: 'Paint Correction & Polishing',
    desc: 'Multi-stage paint correction to remove oxidation, swirl marks and restore gloss. Finishing polish leaves the surface ready for protective coatings.'
  },
  {
    title: 'Protective Coatings (Ceramic/Polymer)',
    desc: 'Long-lasting hydrophobic coatings to protect paint and composites from UV, contaminants, and weather — reduces maintenance frequency.'
  }
]

export default function Services() {
  return (
    <div>
      <h2 className="text-3xl font-bold">Services</h2>
      <p className="mt-2 text-gray-600">We focus on high-impact services that protect value and appearance.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-6 bg-white rounded-md shadow">
            <h3 className="font-semibold text-xl">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-gray-700">Other offerings: interior deep cleaning, upholstery restoration, corrosion inspection prep, fabric/canvas care, and aircraft detailing maintenance plans.</p>
      </div>
    </div>
  )
}
