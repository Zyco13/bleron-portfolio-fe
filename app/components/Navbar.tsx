'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center"
         style={{ backgroundColor: 'var(--dark)', borderBottom: '1px solid var(--green)' }}>
      
      <span className="text-sm" style={{ fontFamily: 'Press Start 2P', color: 'var(--green)' }}>
        Bleron Zekaj
      </span>

      <ul className="flex gap-8 list-none">
        {['about', 'skills', 'cv', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <a href={`#${item}`}
               className="text-sm px-3 py-1 transition-all duration-200"
               style={{ color: 'var(--text)', fontFamily: 'Share Tech Mono' }}
               onMouseEnter={e => {
                 e.currentTarget.style.backgroundColor = 'yellow'
                 e.currentTarget.style.color = 'red'
               }}
               onMouseLeave={e => {
                 e.currentTarget.style.backgroundColor = 'transparent'
                 e.currentTarget.style.color = 'var(--text)'
               }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  )
}