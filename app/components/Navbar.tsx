export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center"
         style={{ backgroundColor: 'var(--dark)', borderBottom: '1px solid var(--green)' }}>
      
      <span className="text-xs" style={{ fontFamily: 'Press Start 2P', color: 'var(--green)' }}>
        BZ
      </span>

      <ul className="flex gap-8 list-none">
        {['story', 'skills', 'cv', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <a href={`#${item}`}
               className="text-sm transition-colors duration-200 hover:text-white"
               style={{ color: 'var(--text)', fontFamily: 'Share Tech Mono' }}>
              {item}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  )
}