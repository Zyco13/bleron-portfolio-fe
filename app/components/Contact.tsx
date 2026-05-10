'use client'

import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const response = await fetch('http://localhost:8080/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  })

  if (response.ok) {
    setSent(true)
  }
}

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-24"
             style={{ borderBottom: '1px solid var(--text)' }}>

      <h2 className="mb-4" style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', color: 'var(--green)' }}>
        Kontakt
      </h2>

      <p className="text-xs mb-16" style={{ color: 'var(--text)', fontFamily: 'var(--font-share-tech)' }}>
        Vill du komma i kontakt? Hör av dig!
      </p>

      <div className="grid md:grid-cols-2 gap-16 max-w-4xl w-full text-left">

        {/* Kontaktinfo */}
        <div className="flex flex-col justify-center gap-6">
          {[
            { label: 'Email', value: 'bleronzekaj@icloud.com', href: 'mailto:bleronzekaj@icloud.com' },
            { label: 'GitHub', value: 'github.com/Zyco13', href: 'https://github.com/Zyco13' },
            { label: 'LinkedIn', value: 'linkedin.com/in/bleron-zekaj', href: 'https://www.linkedin.com/in/bleron-zekaj-0ba225185/' },
          ].map((item) => (
            <div key={item.label} className="border-l-2 pl-5" style={{ borderColor: 'var(--green)' }}>
              <p className="text-xs mb-1" style={{ color: 'var(--text)', fontFamily: 'var(--font-share-tech)' }}>
                {item.label}
              </p>
              <a href={item.href} target="_blank"
                 className="text-xs hover:text-white transition-colors"
                 style={{ color: 'var(--green)', fontFamily: 'var(--font-share-tech)' }}>
                {item.value}
              </a>
            </div>
          ))}
        </div>

        {/* Formulär */}
        {sent ? (
          <div className="flex items-center justify-center">
            <p className="text-sm" style={{ color: 'var(--green)', fontFamily: 'var(--font-share-tech)' }}>
              ✓ Meddelande skickat! Jag hör av mig.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Namn"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="bg-transparent border px-4 py-3 text-xs outline-none focus:border-white transition-colors"
              style={{ borderColor: 'var(--text)', color: 'var(--white)', fontFamily: 'var(--font-share-tech)' }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="bg-transparent border px-4 py-3 text-xs outline-none focus:border-white transition-colors"
              style={{ borderColor: 'var(--text)', color: 'var(--white)', fontFamily: 'var(--font-share-tech)' }}
            />
            <textarea
              placeholder="Meddelande"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              rows={5}
              className="bg-transparent border px-4 py-3 text-xs outline-none focus:border-white transition-colors resize-none"
              style={{ borderColor: 'var(--text)', color: 'var(--white)', fontFamily: 'var(--font-share-tech)' }}
            />
            <button
              type="submit"
              className="text-xs px-6 py-4 transition-all duration-300 hover:bg-[#39ff14] hover:text-black"
              style={{ border: '1px solid var(--green)', color: 'var(--green)', fontFamily: 'var(--font-share-tech)' }}
            >
              Skicka →
            </button>
          </form>
        )}

      </div>
    </section>
  )
}