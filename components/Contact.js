import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (document.getElementById('hs-forms-script')) return

    const script = document.createElement('script')
    script.id = 'hs-forms-script'
    script.src = 'https://js-na2.hsforms.net/forms/embed/243818094.js'
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="max-w-2xl">
      <div className="hs-form-frame" data-region="na2" data-form-id="9c916cae-d26a-493d-80ec-e6fe2ce4edff" data-portal-id="243818094"></div>
    </div>
  )
}

