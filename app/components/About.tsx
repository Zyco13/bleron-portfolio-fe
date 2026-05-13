export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-24"
      style={{ borderBottom: "1px solid var(--text)" }}
    >
      <h2
        className="mb-16"
        style={{ fontSize: "clamp(1rem, 3vw, 1.8rem)", color: "var(--green)" }}
      >
        About me
      </h2>

      {/* Foto */}
      <div
        className="mb-10 rounded-full overflow-hidden"
        style={{
          width: "160px",
          height: "160px",
          border: "3px solid var(--green)",
        }}
      >
        <img
          src="/IMG_0694.JPG"
          alt="Bleron Zekaj"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Intro */}
      <p
        className="max-w-xl mb-16"
        style={{
          color: "var(--text)",
          lineHeight: "2",
          fontFamily: "var(--font-share-tech)",
          fontSize: "1rem",
        }}
      >
        My name is Bleron Zekaj, I am based in Helsingborg and I am studying
        system development with a focus on testing at Jensen Education. My goal
        is to become a software engineer and understand code and programming in
        depth. Right now I am looking for an internship in Java and backend
        development.
      </p>

      {/* Story */}
      <div className="flex flex-col gap-16 max-w-2xl">
        <div>
          <span
            className="text-xs mb-4 block tracking-widest"
            style={{ color: "var(--green)" }}
          >
            2007 — 2022
          </span>
          <h3 className="text-sm mb-4">The fotball dream</h3>
          <p
            style={{
              color: "var(--text)",
              lineHeight: "2",
              fontFamily: "var(--font-share-tech)",
            }}
          >
            From the age of 7 I lived for football. Played in Högaborgs BK, made
            it to the A-team earlier than expected and took the step to play
            abroad. Football was everything.
          </p>
        </div>

        <div>
          <span
            className="text-xs mb-4 block tracking-widest"
            style={{ color: "var(--green)" }}
          >
            2022
          </span>
          <h3 className="text-sm mb-4">The knee injury</h3>
          <p
            style={{
              color: "var(--text)",
              lineHeight: "2",
              fontFamily: "var(--font-share-tech)",
            }}
          >
            A knee injury put an end to his career. What felt like the end
            turned out to be a new beginning.
          </p>
        </div>

        <div>
          <span
            className="text-xs mb-4 block tracking-widest"
            style={{ color: "var(--green)" }}
          >
            2022 — NOW
          </span>
          <h3 className="text-sm mb-4">A new dream</h3>
          <p
            style={{
              color: "var(--text)",
              lineHeight: "2",
              fontFamily: "var(--font-share-tech)",
            }}
          >
            I found programming and immediately felt the same passion that
            football gave me. Today I build applications with Java, Spring Boot
            and modern web technologies with a focus on quality and testing.
          </p>
        </div>
      </div>
    </section>
  );
}
