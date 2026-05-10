export default function Footer() {
  return (
    <footer className="py-8 px-16 flex justify-between items-center"
            style={{ borderTop: '1px solid var(--text)' }}>
      <span className="text-xs" style={{ color: 'var(--text)' }}>
        © 2025 Bleron Zekaj
      </span>
      <span className="text-xs" style={{ color: 'var(--text)' }}>
        Built with Next.js & Tailwind
      </span>
    </footer>
  )
}