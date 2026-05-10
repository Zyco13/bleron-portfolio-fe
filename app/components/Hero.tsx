'use client'

import { useState, useEffect } from 'react'

const fullText = 'Bleron Zekaj'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index >= fullText.length) return
    const timeout = setTimeout(() => {
      setDisplayed(fullText.slice(0, index + 1))
      setIndex(index + 1)
    }, 100)
    return () => clearTimeout(timeout)
  }, [index])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-8"
             style={{ borderBottom: '1px solid var(--text)' }}>

      <p className="text-xs mb-6 tracking-widest uppercase"
         style={{ color: 'var(--text)' }}>
        &gt; Välkommen till min portfolio
      </p>

      <h1 style={{
        fontFamily: 'Press Start 2P',
        color: 'var(--green)',
        fontSize: 'clamp(2rem, 6vw, 5rem)',
        lineHeight: '1.4',
        marginBottom: '2rem',
      }}>
        {displayed}
        <span className="animate-pulse">▋</span>
      </h1>

      <p style={{
        color: 'var(--text)',
        fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
        maxWidth: '600px',
        lineHeight: '1.9',
        fontFamily: 'Share Tech Mono',
      }}>
        Systemutvecklare med bakgrund inom fotboll. Jag bygger
        applikationer med Java, Spring Boot och moderna webbtekniker,
        med fokus på kvalitet och testning.
      </p>

      <div className="flex gap-6 mt-12">
        <a href="#projects"
           className="text-xs px-8 py-4 transition-all duration-300 hover:bg-[#39ff14] hover:text-black"
           style={{ border: '1px solid var(--green)', color: 'var(--green)', fontFamily: 'Share Tech Mono' }}>
          Se projekt →
        </a>
        <a href="#contact"
           className="text-xs px-8 py-4 transition-all duration-300 hover:text-white"
           style={{ border: '1px solid var(--text)', color: 'var(--text)', fontFamily: 'Share Tech Mono' }}>
          Kontakt
        </a>
      </div>

    </section>
  )
}