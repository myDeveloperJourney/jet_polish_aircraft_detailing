export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, phone, message } = req.body || {}

  if (!name || !email) return res.status(400).json({ error: 'Missing required fields' })

  // TODO: Hook this to an email provider or CRM. For now we log.
  console.log('Contact request received', { name, email, phone, message })

  return res.status(200).json({ ok: true })
}
