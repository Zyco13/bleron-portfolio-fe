export default function Story() {
  return (
    <section id="story" className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-24"
             style={{ borderBottom: '1px solid var(--text)' }}>

      <h2 className="mb-16" style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', color: 'var(--green)' }}>
        Min story
      </h2>

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
          <h3 className="text-sm mb-4">Vändpunkten</h3>
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
            fotbollen gav mig. Idag studerar jag systemutveckling på Jensen
            Education med målet att bli mjukvaruingenjör.
          </p>
        </div>

      </div>

    </section>
  )
}