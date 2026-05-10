const experience = [
  {
    title: 'Fritidsledare',
    company: 'Fuzed',
    period: 'Dec 2025 – Nuvarande',
    desc: 'Ansvarar för barn och ungdomars aktiviteter och välmående. Stärker ledarskaps- och kommunikationsfärdigheter.',
  },
  {
    title: 'Lärare / Fotbollstränare',
    company: 'Svartedalsskolan, Göteborg',
    period: 'Aug 2024 – Aug 2025',
    desc: 'Kombinerade rollen som lärare med fotbollstränare. Kommunicerar och motiverar elever i olika åldrar och bakgrunder.',
  },
  {
    title: 'Säljare',
    company: 'Telenor Nordstan',
    period: 'Feb 2024 – Aug 2024',
    desc: 'Fokus på merförsäljning och kundanalys. Balanserade kundens behov med affärsmässiga mål.',
  },
  {
    title: 'Säljare – Telecom & Data',
    company: 'Elgiganten Nordstan, Göteborg',
    period: 'Aug 2023 – Feb 2024',
    desc: 'Breddade teknisk produktkunskap och säljerfarenhet i högt tempomiljö.',
  },
  {
    title: 'Säljare – Telefoni',
    company: 'Elgiganten Phonehouse Väla',
    period: 'Maj 2023 – Aug 2023',
    desc: 'Grunden i produktkunskap, säljstrategi och kundservice inom detaljhandeln.',
  },
  {
    title: 'Elevassistent / Fritidspedagog',
    company: 'NannyPalmkvist Skolan',
    period: 'Mars 2022 – Dec 2022',
    desc: 'Stöttade elever med olika diagnoser i skolarbete och social utveckling. Ansvarade för ca 20 elever på fritids.',
  },
  {
    title: 'Lagerarbetare',
    company: 'Nowaste Logistics AB',
    period: 'Juni 2019 – Jan 2022',
    desc: 'Nattskift med ansvar för städning, inventering och påfyllning. Strukturerat teamarbete under tidspress.',
  },
  {
    title: 'Lagerarbetare',
    company: 'Boozt / Logent AB',
    period: 'Maj 2016 – Okt 2021',
    desc: 'Plock och pack samt arbete på returavdelningen. Högt tempo och noggrannhet i logistikmiljö.',
  },
]

const education = [
  {
    title: 'Systemutvecklare (YH)',
    school: 'Jensen Yrkeshögskola',
    period: 'Aug 2025 – Maj 2027',
    desc: 'Java, Spring Boot, REST API:er, MySQL, JUnit, Mockito, TDD, React, TypeScript. Agila metoder och reella projektuppgifter.',
  },
  {
    title: 'Gymnasie – Handelsprogrammet',
    school: 'Filbornaskolan, Helsingborg',
    period: 'Aug 2014 – Juni 2017',
    desc: 'Inriktning mot försäljning, kundservice och ekonomi.',
  },
]

export default function CV() {
  return (
    <section id="cv" className="min-h-screen flex flex-col justify-center items-center px-8 py-24"
             style={{ borderBottom: '1px solid var(--text)' }}>

      <h2 className="mb-16" style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', color: 'var(--green)' }}>
        Cv
      </h2>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl w-full">

        {/* Erfarenhet */}
        <div>
          <h3 className="text-xs mb-10 tracking-widest text-center" style={{ color: 'var(--green)' }}>
            Arbetslivserfarenhet
          </h3>
          <div className="flex flex-col gap-8">
            {experience.map((job) => (
              <div key={job.title + job.company}
                   className="border-l-2 pl-5"
                   style={{ borderColor: 'var(--green)' }}>
                <p className="text-sm mb-1" style={{ fontFamily: 'var(--font-share-tech)' }}>
                  {job.title}
                </p>
                <p className="text-xs mb-1" style={{ color: 'var(--green)' }}>
                  {job.company}
                </p>
                <p className="text-xs mb-2" style={{ color: 'var(--text)' }}>
                  {job.period}
                </p>
                <p className="text-xs" style={{ color: 'var(--text)', lineHeight: '1.7' }}>
                  {job.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Utbildning + Språk */}
        <div>
          <h3 className="text-xs mb-10 tracking-widest text-center" style={{ color: 'var(--green)' }}>
            Utbildning
          </h3>
          <div className="flex flex-col gap-8 mb-16">
            {education.map((edu) => (
              <div key={edu.title}
                   className="border-l-2 pl-5"
                   style={{ borderColor: 'var(--green)' }}>
                <p className="text-sm mb-1" style={{ fontFamily: 'var(--font-share-tech)' }}>
                  {edu.title}
                </p>
                <p className="text-xs mb-1" style={{ color: 'var(--green)' }}>
                  {edu.school}
                </p>
                <p className="text-xs mb-2" style={{ color: 'var(--text)' }}>
                  {edu.period}
                </p>
                <p className="text-xs" style={{ color: 'var(--text)', lineHeight: '1.7' }}>
                  {edu.desc}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-xs mb-6 tracking-widest text-center" style={{ color: 'var(--green)' }}>
            Språk
          </h3>
          <div className="flex flex-col gap-3">
            {[
              { lang: 'Svenska', level: 'Modersmål' },
              { lang: 'Albanska', level: 'Modersmål' },
              { lang: 'Engelska', level: 'Mycket goda kunskaper' },
            ].map((l) => (
              <div key={l.lang} className="flex justify-between border-b pb-2"
                   style={{ borderColor: 'var(--text)' }}>
                <span className="text-xs" style={{ color: 'var(--white)' }}>{l.lang}</span>
                <span className="text-xs" style={{ color: 'var(--text)' }}>{l.level}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}