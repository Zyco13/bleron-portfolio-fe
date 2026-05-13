'use client'

const skills = [
  { name: 'Java', level: 'Main language' },
  { name: 'Spring Boot', level: 'Huvudramverk' },
  { name: 'Spring Security', level: 'Auth & JWT' },
  { name: 'JUnit', level: 'Testing' },
  { name: 'SQL', level: 'Database' },
  { name: 'REST API', level: 'Backend' },
  { name: 'Docker', level: 'Containers' },
  { name: 'Git', level: 'Versioncontrol' },
  { name: 'PowerShell', level: 'Scripting' },
  { name: 'React', level: 'Frontend' },
  { name: 'TypeScript', level: 'Frontend' },
  { name: 'Tailwind CSS', level: 'Frontend' },
  { name: 'Next.js', level: 'Frontend' },
  { name: 'Javascript', level: 'Frontend' },
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-24"
             style={{ borderBottom: '1px solid var(--text)' }}>

      <h2 className="mb-16" style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', color: 'var(--green)' }}>
        Tech stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group p-6 border transition-all duration-300 cursor-default hover:-translate-y-1"
            style={{ borderColor: 'var(--text)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--green)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--text)')}
          >
            <p className="text-sm mb-2" style={{ color: 'var(--green)', fontFamily: 'var(--font-share-tech)' }}>
              {skill.name}
            </p>
            <p className="text-xs" style={{ color: 'var(--text)' }}>
              {skill.level}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}