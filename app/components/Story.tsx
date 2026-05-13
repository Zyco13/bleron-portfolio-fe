export default function Story() {
  return (
    <section
      id="story"
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-24"
      style={{ borderBottom: "1px solid var(--text)" }}
    >
      <h2
        className="mb-16"
        style={{ fontSize: "clamp(1rem, 3vw, 1.8rem)", color: "var(--green)" }}
      >
        My story
      </h2>

      <div className="flex flex-col gap-16 max-w-2xl">
        <div>
          <span
            className="text-xs mb-4 block tracking-widest"
            style={{ color: "var(--green)" }}
          >
            2007 — 2022
          </span>
          <h3 className="text-sm mb-4">The football dream</h3>
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
          <h3 className="text-sm mb-4">The turning point</h3>
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
            2022 — nu
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
            football gave me. Today I study systems development at Jensen
            Education with the goal of becoming a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}
