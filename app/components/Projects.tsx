"use client";

const projects = [
  {
    name: "LRN-Hub",
    desc: 'A Swedish EdTech platform — "TikTok for education" — aimed at Swedish university students. Users can share 60-second academic videos, find study buddies via a Tinder-inspired matching system, and book paid mentoring sessions. Built as a solo founder from idea to live product.',
    tech: [
      "React",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Tailwind",
      "Playwright",
    ],
    link: "https://lrn-hub.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-24"
      style={{ borderBottom: "1px solid var(--text)" }}
    >
      <h2
        className="mb-16"
        style={{ fontSize: "clamp(1rem, 3vw, 1.8rem)", color: "var(--green)" }}
      >
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 text-left"
            style={{ borderColor: "var(--text)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--green)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--text)")
            }
          >
            <h3
              className="text-sm"
              style={{
                color: "var(--white)",
                fontFamily: "var(--font-press-start)",
              }}
            >
              {project.name}
            </h3>

            <p
              className="text-xs"
              style={{
                color: "var(--text)",
                lineHeight: "1.8",
                fontFamily: "var(--font-share-tech)",
              }}
            >
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1"
                  style={{
                    color: "var(--green)",
                    border: "1px solid var(--green)",
                    fontFamily: "var(--font-share-tech)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-6 mt-auto">
              <div className="flex gap-6 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-xs hover:text-white transition-colors"
                  style={{
                    color: "var(--text)",
                    fontFamily: "var(--font-share-tech)",
                  }}
                >
                  → Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
