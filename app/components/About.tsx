export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-24"
             style={{ borderBottom: '1px solid var(--text)' }}>

      <h2 className="mb-16" style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', color: 'var(--green)' }}>
        Om mig
      </h2>

      {/* Foto */}
      <div className="mb-10 rounded-full overflow-hidden"
           style={{ width: '160px', height: '160px', border: '3px solid var(--green)' }}>
        <img src="/IMG_0694.JPG" alt="Bleron Zekaj"
             style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Intro */}
      <p className="max-w-xl mb-16" style={{ color: 'var(--text)', lineHeight: '2', fontFamily: 'var(--font-share-tech)', fontSize: '1rem' }}>
        Jag heter Bleron Zekaj, är baserad i Helsingborg och studerar systemutveckling 
        med testinriktning på Jensen Education. Mitt mål är att bli mjukvaruingenjör 
        och förstå kod och programmering på djupet. Just nu letar jag efter praktik 
        inom Java och backend-utveckling.
      </p>

      {/* Story */}
      <div className="flex flex-col gap-16 max-w-2xl">

        <div>
          <span className="text-xs mb-4 block tracking-widest" style={{ color: 'var(--green)' }}>
            2007 — 2022
          </span>
          <h3 className="text-sm mb-4">Fotbollsdrömmen</h3>
          <p style={{ color: 'var(--text)', lineHeight: '2', fontFamily: 'var(--font-share-tech)' }}>
            Från 7 års ålder levde jag för fotbollen. Spelade i Högaborgs BK,
            tog mig upp till A-laget tidigare än väntat och tog steget till
            spel utomlands. Fotboll var allt.
          </p>
        </div>

        <div>
          <span className="text-xs mb-4 block tracking-widest" style={{ color: 'var(--green)' }}>
            2022
          </span>
          <h3 className="text-sm mb-4">Knäskadan</h3>
          <p style={{ color: 'var(--text)', lineHeight: '2', fontFamily: 'var(--font-share-tech)' }}>
            En knäskada satte punkt för karriären. Det som kändes som slutet
            visade sig vara en ny början.
          </p>
        </div>

        <div>
          <span className="text-xs mb-4 block tracking-widest" style={{ color: 'var(--green)' }}>
            2022 — nu
          </span>
          <h3 className="text-sm mb-4">En ny dröm</h3>
          <p style={{ color: 'var(--text)', lineHeight: '2', fontFamily: 'var(--font-share-tech)' }}>
            Jag hittade programmering och kände direkt samma passion som
            fotbollen gav mig. Idag bygger jag applikationer med Java,
            Spring Boot och moderna webbtekniker med fokus på kvalitet och testning.
          </p>
        </div>

      </div>
    </section>
  )
}