import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (res.ok) setStatus('sent')
    else setStatus('error')
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold">Contact & Request a Quote</h2>
      <p className="mt-2 text-gray-600">Fill out the form and our team will respond within one business day.</p>

      <form className="mt-6 grid gap-4" onSubmit={submit}>
        <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="border p-3 rounded" placeholder="Name" required />
        <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="border p-3 rounded" placeholder="Email" type="email" required />
        <input value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="border p-3 rounded" placeholder="Phone" />
        <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="border p-3 rounded h-32" placeholder="Message / Aircraft details" />

        <div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded">Submit</button>
        </div>
      </form>

      <div className="mt-4">
        {status === 'loading' && <p>Sending...</p>}
        {status === 'sent' && <p className="text-green-600">Thanks — we'll be in touch shortly.</p>}
        {status === 'error' && <p className="text-red-600">There was an error. Try again later.</p>}
      </div>
    </div>
  )
}
